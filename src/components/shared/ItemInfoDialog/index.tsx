import { useCallback, useMemo, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { FormattedMessage, useIntl } from 'react-intl'
import { GiArtificialIntelligence } from 'react-icons/gi'

import InfoDialogImg from '@components/InfoDialogImg'
import useMouseYTracker from '@hooks/useMouseYTracker'
import { 
    bitState, 
    configState, 
    type Config, 
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

// eslint-disable-next-line
const isUpgrade = (item: Incrementor | Upgrade): item is Upgrade => {
    return 'effects' in item
}

const ItemInfoDialog = () => {
    const intl = useIntl()
    const config = useRecoilValue<Config>(configState)
    const currentProduction = useRecoilValue(currentProductionState)
    const bits = useRecoilValue(bitState)
    const mouseY = useMouseYTracker()
    const dialogRef = useRef<HTMLDialogElement>(null)

    const currentHoveredBotItem = useRecoilValue(syncedHoveredBotItemState)
    const currentHoveredUpgradeItem = useRecoilValue(currentHoveredUpgradeItemState)

    const currentItem = useMemo<Incrementor | Upgrade | null>(() => {
        const botEmpty = Object.keys(currentHoveredBotItem).length === 0
        const upgradeEmpty = Object.keys(currentHoveredUpgradeItem).length === 0

        if (!botEmpty && upgradeEmpty) return currentHoveredBotItem
        if (botEmpty && !upgradeEmpty) return currentHoveredUpgradeItem
        return null
    }, [currentHoveredBotItem, currentHoveredUpgradeItem])

    const currentItemId = useMemo(() => {
        if (!currentItem) return ''
        return isIncrementor(currentItem) ? currentItem.id : currentItem.incrementorId
    }, [currentItem])

    const incrementorMultiplier = useRecoilValue(getIncrementorMultiplier(String(currentItemId)))
    const multipliedProduction = useMemo(
        () => currentProduction * incrementorMultiplier,
        [currentProduction, incrementorMultiplier]
    )

    const dialogTop = useMemo(() => {
        const mouseYWithNavbar = mouseY
        const dialogHeight = Number(dialogRef?.current?.offsetHeight)
        const validPosition = mouseYWithNavbar + dialogHeight

        return validPosition > window.innerHeight
            ? window.innerHeight - dialogHeight
            : mouseYWithNavbar
    }, [mouseY])

    const itemCost = useMemo(() => {
        if (!currentItem) return 0
        return isIncrementor(currentItem) ? currentItem.pricePerUnit : currentItem.cost
    }, [currentItem])

    const handleItemTotalWorthPercentage = useCallback(() => {
        if(!!currentItem && isIncrementor(currentItem) && !currentItem?.revealed) return '???????'
        const relativePercentage = ((itemCost/bits) * 100).toFixed(1)
        const suffix = intl.formatMessage({ 
            id: 'percentageTotalBitsNumber.totalBits', 
            defaultMessage: ' of total bits' 
        })
        return `${relativePercentage}%${suffix}`
    }, [itemCost, bits, intl])

    const itemBitsPerSecondWorth = useMemo(() => {
        if(!!currentItem && isIncrementor(currentItem) && !currentItem?.revealed) return '???????'

        return formatTimeNumber(itemCost/multipliedProduction, intl)
    }, [itemCost, multipliedProduction, intl])

    const renderItemName = () => {
        if (!currentItem) return null
        if(isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>
        return isIncrementor(currentItem) 
            ? <FormattedMessage id={`botBuyList.${currentItem.id}.name`} />
            : <FormattedMessage id={`upgrade.${currentItem.id}.name`} />
    }

    const renderLabelText = () => {
        if (!currentItem) return ''
        if(isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>
        return isIncrementor(currentItem)
            ? `${intl.formatMessage({id: 'botsOwned', defaultMessage: 'owned'})}: ${currentItem.units}`
            : 'upgrade'
    }

    const renderPrice = () => {
        if (!currentItem) return null
        if(isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>
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
    }

    const renderDescription = () => {
        if (!currentItem) return null
        if(isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>

        return isIncrementor(currentItem)
            ? <FormattedMessage id={`botBuyList.${currentItem.id}.description`} />
            : <FormattedMessage tagName="p" id={`upgrade.${currentItem.id}.description`} />
    }

    const renderAdditionalInfo = () => {
        if (!currentItem || !isIncrementor(currentItem)) return null
        if(isIncrementor(currentItem) && !currentItem?.revealed) return <p style={{ margin: 0 }}>???????</p>

        
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
    }

    if (!currentItem) return null

    return (
        <StyledItemInfoDialog
            $dialogTop={dialogTop}
            ref={dialogRef}
            open
        >
            <MainItemInfo>
                <InfoDialogImg key={currentItem?.id} item={currentItem} isIncrementor={isIncrementor(currentItem)} />
                <ItemTitleInfo>
                    <ItemName>
                        {renderItemName()}
                    </ItemName>
                    <ItemInfoLabel>
                        <ItemInfoLabelParagraph>
                            {renderLabelText()}
                        </ItemInfoLabelParagraph>
                    </ItemInfoLabel>
                </ItemTitleInfo>
                <ItemPriceInfo>
                    {renderPrice()}
                    <ItemInfoParagraph>
                        {itemBitsPerSecondWorth}
                    </ItemInfoParagraph>
                    <ItemInfoParagraph>
                        {handleItemTotalWorthPercentage()}
                    </ItemInfoParagraph>
                </ItemPriceInfo>
            </MainItemInfo>
            <hr />
            <ItemDescription>
                {renderDescription()}
            </ItemDescription>
            {renderAdditionalInfo()}
        </StyledItemInfoDialog>
    )
}

export default ItemInfoDialog