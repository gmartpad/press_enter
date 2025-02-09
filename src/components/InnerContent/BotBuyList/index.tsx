import {
    Aside,
    BotBulkAmountButton,
    BotBulkModeButton,
    BotBuyInfo,
    BotBuyListGrid,
    BotUpgradeList,
    BulkAmountIndicatorParagraph,
    BulkModeIndicatorParagraph,
    BuySellContainer,
    IncrementorAmount,
    IncrementorName,
    NoUpgradesH5,
} from './styled'
import { 
    autoIncrementorsState, 
    bitState, 
    configState, 
    upgradesState, 
    currentHoveredUpgradeItemState, 
    affordableUpgradesState, 
    enterPressesState
} from '@state/atoms'
import { useCallback, useMemo } from 'react'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import IncrementorBotPrice from '@components/shared/IncrementorBotPrice'
import IncrementorButton from '@components/InnerContent/BotBuyList/IncrementorButton'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import { FormattedMessage } from 'react-intl'
import Divider from '@components/shared/Divider'
import { Upgrade } from '@upgrades'
import { useAtom, useAtomValue, useSetAtom, useStore } from 'jotai'
import BuyAllUpgradesButton from './BuyAllUpgradesButton'
import UpgradeItem from './UpgradeItem'
import BotBuyImg from './BotBuyImg'
import updateUpgrades from '@utils/updateUpgrades'
import shallowEqualUpgrades from '@utils/shallowEqualUpgrades'
import useWindowInnerValues from '@hooks/useWindowInnerValues'

const BotBuyList = () => {
    const { windowInnerWidth } = useWindowInnerValues()
    const store = useStore()
    const [upgrades, setUpgrades] = useAtom(upgradesState)
    const setBits = useSetAtom(bitState)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)
    const [config, setConfig] = useAtom(configState)
    const autoIncrementors = useAtomValue(autoIncrementorsState)
    const affordableUpgrades = useAtomValue(affordableUpgradesState)

    // Memoized derived data
    const purchasableUpgrades = useMemo(
        () => upgrades.filter(u => u.purchasable && !u.purchased),
        [upgrades]
    )

    // Stable empty object reference
    const EMPTY_UPGRADE = useMemo(() => ({} as Upgrade), [])

    // Memoized price calculator
    const getPrice = useCallback(
        (item: Incrementor) => handleRecalculatePricePerUnit(item, config),
        [config]
    )

    const handlePurchaseUpgrade = useCallback(async (
        upgrade: Upgrade,
        isUpgradeAffordable: boolean
    ) => {
        if (!upgrade || upgrade.purchased || !isUpgradeAffordable) return
    
        const currentUpgrades = store.get(upgradesState)
        const updatedUpgrades = currentUpgrades.map(u => 
            u.id === upgrade.id ? { ...u, purchased: true } : u
        )

        setUpgrades(updatedUpgrades)
        const currentBits = store.get(bitState)
        setBits(currentBits - upgrade.cost)
        setCurrentHoveredUpgradeItem(EMPTY_UPGRADE)
    }, [EMPTY_UPGRADE, setBits, setCurrentHoveredUpgradeItem, setUpgrades, store])

    const handleUpdateUpgrades = useCallback(() => {
        try {
            const currentUpgrades = store.get(upgradesState)
            const currentBits = store.get(bitState)
            const currentIncrementors = store.get(autoIncrementorsState)
            const currentEnterPresses = store.get(enterPressesState)

            const updatedUpgrades = updateUpgrades(
                currentUpgrades,
                currentBits,
                currentIncrementors,
                currentEnterPresses
            )

            if (!shallowEqualUpgrades(currentUpgrades, updatedUpgrades)) {
                setUpgrades(updatedUpgrades)
            }
        } catch (error) {
            console.error('Error updating upgrades:', error)
        }
    }, [store, setUpgrades])

    const handleChangeBulkMode = useCallback(
        (newBotBulkModeValue: number) => {
            const currentConfig = store.get(configState)
            setConfig({
                ...currentConfig,
                botBulkMode: newBotBulkModeValue,
            })
        },
        [setConfig, store]
    )

    const handleChangeBulkAmount = useCallback(
        (newBotBulkAmountValue: number) => {
            setConfig(currentConfig => ({
                ...currentConfig,
                botBulkAmount: newBotBulkAmountValue,
            }))
        },
        [setConfig]
    )

    return (
        <Aside $windowInnerWidth={windowInnerWidth}>
            <>
                <h3 style={{ margin: 0, textAlign: 'center', padding: '12px 0 3px 0', textShadow: '-2px 2px #555' }}>
                    <FormattedMessage id="botBuyList.upgrades.title" />
                </h3>
                {affordableUpgrades.length > 0 && (
                    <BuyAllUpgradesButton />
                )}
            </>
            
            <BotUpgradeList $windowInnerWidth={windowInnerWidth} onMouseEnter={handleUpdateUpgrades}>
                {purchasableUpgrades?.length === 0 && (
                    <NoUpgradesH5>
                        <FormattedMessage id="botBuyList.upgrades.noUpgrades.title" />
                    </NoUpgradesH5>
                )}
                {purchasableUpgrades.map((upgrade) => (
                    <UpgradeItem
                        key={upgrade.id}
                        upgrade={upgrade}
                        handlePurchaseUpgrade={handlePurchaseUpgrade}
                    />
                ))}
            </BotUpgradeList>
            
            <Divider/>
            
            <BuySellContainer>
                <BotBulkModeButton
                    $bulkType="buy"
                    onClick={() => handleChangeBulkMode(1)}
                    $active={config.botBulkMode === 1}
                >
                    <FormattedMessage tagName="p" id="botBuyList.buy.title" />
                    <BulkModeIndicatorParagraph>
                        {config.botBulkMode === 1 ? '<-' : ''}
                    </BulkModeIndicatorParagraph>
                </BotBulkModeButton>
                
                <BotBulkModeButton
                    $bulkType="sell"
                    onClick={() => handleChangeBulkMode(0)}
                    $active={config.botBulkMode === 0}
                >
                    <FormattedMessage tagName="p" id="botBuyList.sell.title" />
                    <BulkModeIndicatorParagraph>
                        {config.botBulkMode === 0 ? '<-' : ''}
                    </BulkModeIndicatorParagraph>
                </BotBulkModeButton>
                
                {[1, 10, 100].map((amount) => (
                    <BotBulkAmountButton
                        key={amount}
                        onClick={() => handleChangeBulkAmount(amount)}
                        $active={config.botBulkAmount === amount}
                    >
                        <p>{amount}</p>
                        <BulkAmountIndicatorParagraph>
                            {config.botBulkAmount === amount ? 'ˆ' : ''}
                        </BulkAmountIndicatorParagraph>
                    </BotBulkAmountButton>
                ))}
            </BuySellContainer>
            
            <BotBuyListGrid $windowInnerWidth={windowInnerWidth}>
                {autoIncrementors.map((item: Incrementor) => (
                    <IncrementorButton key={item.id} item={item}>
                        <BotBuyImg item={item} />
                        <BotBuyInfo>
                            <IncrementorName>
                                {item?.revealed ? (
                                    <FormattedMessage id={`botBuyList.${item.id}.name`} />
                                ) : (
                                    <p style={{ margin: 0 }}>???????</p>
                                )}
                            </IncrementorName>
                            <IncrementorBotPrice
                                price={getPrice(item)}
                                item={item}
                                config={config}
                            />
                        </BotBuyInfo>
                        <IncrementorAmount>
                            {item?.revealed ? item.units : '???'}
                        </IncrementorAmount>
                    </IncrementorButton>
                ))}
            </BotBuyListGrid>
        </Aside>
    )
}

export default BotBuyList