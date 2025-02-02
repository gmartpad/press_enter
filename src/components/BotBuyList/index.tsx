import {
    Aside,
    BotBulkAmountButton,
    BotBulkModeButton,
    BotBuyInfo,
    BotBuyListGrid,
    BotUpgradeList,
    BuySellContainer,
    IncrementorAmount,
    IncrementorName,
} from './styled'
import { autoIncrementorsState, bitState, configState, upgradesState, currentHoveredUpgradeItemState } from '@state/atoms'
import { useCallback, useMemo } from 'react'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import BotBuyImg from '@components/BotBuyImg'
import IncrementorBotPrice from '@components/shared/IncrementorBotPrice'
import IncrementorButton from '@components/IncrementorButton'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import { FormattedMessage } from 'react-intl'
import Divider from '@components/shared/Divider'
import UpgradeItem from '@components/UpgradeItem'
import { Upgrade } from '@upgrades'
import { useAtom, useAtomValue, useSetAtom, useStore } from 'jotai'

const BotBuyList = () => {
    const store = useStore()
    const [upgrades, setUpgrades] = useAtom(upgradesState)
    const setBits = useSetAtom(bitState)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)
    const [config, setConfig] = useAtom(configState)
    const autoIncrementors = useAtomValue(autoIncrementorsState)

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
        <Aside>
            {purchasableUpgrades.length > 0 && (
                <h3 style={{ margin: 0, textAlign: 'center', padding: '3px 0' }}>
                    <FormattedMessage id="botBuyList.upgrades.title" />
                </h3> 
            )}
            <BotUpgradeList>
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
                </BotBulkModeButton>
                
                <BotBulkModeButton
                    $bulkType="sell"
                    onClick={() => handleChangeBulkMode(0)}
                    $active={config.botBulkMode === 0}
                >
                    <FormattedMessage tagName="p" id="botBuyList.sell.title" />
                </BotBulkModeButton>
                
                {[1, 10, 100].map((amount) => (
                    <BotBulkAmountButton
                        key={amount}
                        onClick={() => handleChangeBulkAmount(amount)}
                        $active={config.botBulkAmount === amount}
                    >
                        <p>{amount}</p>
                    </BotBulkAmountButton>
                ))}
            </BuySellContainer>
            
            <BotBuyListGrid>
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