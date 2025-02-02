import {  useMemo, useRef } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { useAtomValue } from 'jotai'

import InfoDialogImg from '@components/InfoDialogImg'
import useMouseYTracker from '@hooks/useMouseYTracker'
import { 
    bitState, 
    configState, 
    currentHoveredUpgradeItemState,
    currentProductionState, 
    getIncrementorMultiplier, 
    syncedHoveredBotItemState 
} from '@state/atoms'
import IncrementorBotPrice from '@components/shared/IncrementorBotPrice'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import formatTimeNumber from '@utils/formatTimeNumber'
import formatCurrentProductionInfo from '@utils/formatCurrentProductionInfo'
import formatRelativeBpS from '@utils/formatRelativeBpS'
import formatBitsProducedSoFar from '@utils/formatBitsProducedSoFar'
import { 
    ItemDescription, 
    ItemInfoDialog as StyledItemInfoDialog, 
    ItemInfoLabel, 
    ItemInfoLabelParagraph, 
    ItemInfoParagraph, 
    ItemName, 
    ItemPriceInfo, 
    ItemTitleInfo, 
    MainItemInfo, 
    MoreInfoLI, 
    MoreInfoUL 
} from '@components/shared/ItemInfoDialog/styled'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { type Upgrade } from '@upgrades'
import { IncrementorPrice } from '../IncrementorBotPrice/styled'
import formatLargeNumber from '@utils/formatLargeNumber'

// Type guard functions
const isIncrementor = (item: Incrementor | Upgrade): item is Incrementor => {
    return 'productionPerUnit' in item
}

const ItemInfoDialog = () => {
    const intl = useIntl()
    const config = useAtomValue(configState)
    const currentProduction = useAtomValue(currentProductionState)
    const bits = useAtomValue(bitState)
    const mouseY = useMouseYTracker()
    const dialogRef = useRef<HTMLDialogElement>(null)

    const currentHoveredBotItem = useAtomValue(syncedHoveredBotItemState)
    const currentHoveredUpgradeItem = useAtomValue(currentHoveredUpgradeItemState)

    // Memoize current item with deep comparison
    const currentItem = useMemo(() => {
        const botEmpty = !currentHoveredBotItem || Object.keys(currentHoveredBotItem).length === 0
        const upgradeEmpty = !currentHoveredUpgradeItem || Object.keys(currentHoveredUpgradeItem).length === 0

        if (!botEmpty) return currentHoveredBotItem
        if (!upgradeEmpty) return currentHoveredUpgradeItem
        return null
    }, [currentHoveredBotItem, currentHoveredUpgradeItem])

    const memoizedAtom = useMemo(() => {
        return getIncrementorMultiplier(currentItem?.id || '')
    }, [currentItem?.id])

    // Stable atom reference
    const incrementorMultiplier = useAtomValue(memoizedAtom)

    const multipliedProduction = useMemo(
        () => currentProduction * incrementorMultiplier,
        [currentProduction, incrementorMultiplier]
    )

    // Throttle dialog position updates
    const dialogTop = useMemo(() => {
        const mouseYWithNavbar = mouseY
        const dialogHeight = dialogRef.current?.offsetHeight || 0
        const validPosition = mouseYWithNavbar + dialogHeight

        return validPosition > window.innerHeight
            ? window.innerHeight - dialogHeight
            : mouseYWithNavbar
    }, [mouseY])

    // Memoize expensive calculations
    const itemCost = useMemo(() => {
        if (!currentItem) return 0
        return isIncrementor(currentItem) ? currentItem.pricePerUnit : currentItem.cost
    }, [currentItem])

    const handleItemTotalWorthPercentage = useMemo(() => {
        if (!currentItem || (isIncrementor(currentItem) && !currentItem?.revealed)) return '???????'
        const relativePercentage = ((itemCost / bits) * 100).toFixed(1)
        const suffix = intl.formatMessage({ 
            id: 'percentageTotalBitsNumber.totalBits', 
            defaultMessage: ' of total bits' 
        })
        return `${relativePercentage}%${suffix}`
    }, [itemCost, bits, intl, currentItem])

    const itemBitsPerSecondWorth = useMemo(() => {
        if (!currentItem || (isIncrementor(currentItem) && !currentItem?.revealed)) return '???????'
        return formatTimeNumber(itemCost / multipliedProduction, intl)
    }, [itemCost, multipliedProduction, intl, currentItem])

    // Memoized render functions
    const renderItemName = useMemo(() => {
        if (!currentItem) return null
        if (isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>
        return isIncrementor(currentItem) 
            ? <FormattedMessage id={`botBuyList.${currentItem.id}.name`} />
            : <FormattedMessage id={`upgrade.${currentItem.id}.name`} />
    }, [currentItem])

    const renderLabelText = useMemo(() => {
        if (!currentItem) return ''
        if (isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>
        return isIncrementor(currentItem)
            ? `${intl.formatMessage({ id: 'botsOwned' })}: ${currentItem.units}`
            : 'upgrade'
    }, [currentItem, intl])

    const renderPrice = useMemo(() => {
        if (!currentItem) return null
        if (isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>
        
        if (isIncrementor(currentItem)) {
            return (
                <IncrementorBotPrice
                    price={handleRecalculatePricePerUnit(currentItem, config)}
                    item={currentItem}
                    config={config}
                />
            )
        }
        
        const purchasable = currentItem.cost < bits && !currentItem.purchased
        return (
            <IncrementorPrice $affordable={purchasable}>
                <GiArtificialIntelligence size={16} />
                {formatLargeNumber(currentItem.cost, intl)} bits
            </IncrementorPrice>
        )
    }, [currentItem, config, bits, intl])

    const renderDescription = useMemo(() => {
        if (!currentItem || (isIncrementor(currentItem) && !currentItem?.revealed)) return null
        return isIncrementor(currentItem)
            ? <FormattedMessage id={`botBuyList.${currentItem.id}.description`} />
            : <FormattedMessage tagName="p" id={`upgrade.${currentItem.id}.description`} />
    }, [currentItem])

    const renderAdditionalInfo = useMemo(() => {
        if (!currentItem || !isIncrementor(currentItem) || !currentItem?.revealed) return null

        return (
            <MoreInfoUL>
                <MoreInfoLI>
                    {formatCurrentProductionInfo({
                        currentHoveredBotItem: currentItem,
                        incrementorMultiplier,
                        intl
                    })}
                </MoreInfoLI>
                <MoreInfoLI>
                    {formatRelativeBpS({
                        currentHoveredBotItem: currentItem,
                        intl,
                        multipliedProduction,
                        incrementorMultiplier
                    })}
                </MoreInfoLI>
                <MoreInfoLI>
                    {formatBitsProducedSoFar({
                        currentHoveredBotItem: currentItem,
                        intl
                    })}
                </MoreInfoLI>
            </MoreInfoUL>
        )
    }, [currentItem, incrementorMultiplier, multipliedProduction, intl])

    if (!currentItem) return null

    return (
        <StyledItemInfoDialog
            $dialogTop={dialogTop}
            ref={dialogRef}
            open
        >
            <MainItemInfo>
                <InfoDialogImg item={currentItem} isIncrementor={isIncrementor(currentItem)} />
                <ItemTitleInfo>
                    <ItemName>
                        {renderItemName}
                    </ItemName>
                    <ItemInfoLabel>
                        <ItemInfoLabelParagraph>
                            {renderLabelText}
                        </ItemInfoLabelParagraph>
                    </ItemInfoLabel>
                </ItemTitleInfo>
                <ItemPriceInfo>
                    {renderPrice}
                    <ItemInfoParagraph>
                        {itemBitsPerSecondWorth}
                    </ItemInfoParagraph>
                    <ItemInfoParagraph>
                        {handleItemTotalWorthPercentage}
                    </ItemInfoParagraph>
                </ItemPriceInfo>
            </MainItemInfo>
            <hr />
            <ItemDescription>
                {renderDescription}
            </ItemDescription>
            {renderAdditionalInfo}
        </StyledItemInfoDialog>
    )
}

export default ItemInfoDialog