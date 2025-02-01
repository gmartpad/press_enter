import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
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
import { autoIncrementorsState, bitState, configState, type Config, upgradesState, currentHoveredUpgradeItemState } from '@state/atoms'
import { useCallback } from 'react'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import BotBuyImg from '@components/BotBuyImg'
import IncrementorBotPrice from '@components/shared/IncrementorBotPrice'
import IncrementorButton from '@components/IncrementorButton'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import { FormattedMessage } from 'react-intl'
import Divider from '@components/shared/Divider'
import UpgradeItem from '@components/UpgradeItem'
import { Upgrade } from '@upgrades'

const BotBuyList = () => {
    const upgrades = useRecoilValue<Upgrade[]>(upgradesState)
    const autoIncrementors = useRecoilValue(autoIncrementorsState)
    const [config, setConfig] = useRecoilState<Config>(configState)
    
    const handlePurchaseUpgrade = useRecoilCallback(({ snapshot, set, }) => async (upgrade: Upgrade, isUpgradeAffordable: boolean) => {
        if (!upgrade || upgrade.purchased || !isUpgradeAffordable) return
    
        const upgrades = await snapshot.getPromise<Upgrade[]>(upgradesState)

        const updatedUpgrades = upgrades.map(u => {
            if(u.id === upgrade.id) {
                return { ...u, purchased: true } 
            } 
            return u
        })

        set(upgradesState, updatedUpgrades)
        set(bitState, (currVal) => (currVal - upgrade.cost))
        set(currentHoveredUpgradeItemState, {} as Upgrade)
    }, [upgradesState, bitState, currentHoveredUpgradeItemState])

    const handleChangeBulkMode = useCallback(
        (newBotBulkModeValue: number) => {
            setConfig((currentConfig: Config) => ({
                ...currentConfig,
                botBulkMode: newBotBulkModeValue,
            }))
        },
        [setConfig]
    )

    const handleChangeBulkAmount = useCallback(
        (newBotBulkAmountValue: number) => {
            setConfig((currentConfig: Config) => ({
                ...currentConfig,
                botBulkAmount: newBotBulkAmountValue,
            }))
        },
        [setConfig]
    )

    return (
        <Aside>
            {!!upgrades.filter((u) => u.purchasable)?.length && (
                <h3 style={{ margin: 0, textAlign: 'center', padding: '3px 0' }}><FormattedMessage id="botBuyList.upgrades.title" /></h3> 
            )}
            <BotUpgradeList>
                {upgrades.filter((u) => u.purchasable && !u.purchased).map((i, k) => (
                    <UpgradeItem
                        key={k + JSON.stringify(i)}
                        upgrade={i}
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
                <BotBulkAmountButton
                    onClick={() => handleChangeBulkAmount(1)}
                    $active={config.botBulkAmount === 1}
                >
                    <p>1</p>
                </BotBulkAmountButton>
                <BotBulkAmountButton
                    onClick={() => handleChangeBulkAmount(10)}
                    $active={config.botBulkAmount === 10}
                >
                    <p>10</p>
                </BotBulkAmountButton>
                <BotBulkAmountButton
                    onClick={() => handleChangeBulkAmount(100)}
                    $active={config.botBulkAmount === 100}
                >
                    <p>100</p>
                </BotBulkAmountButton>
            </BuySellContainer>
            <BotBuyListGrid>
                {autoIncrementors.map((item: Incrementor, k: number) => (
                    <IncrementorButton key={k} item={item}>
                        <BotBuyImg key={item.id} item={item} />
                        <BotBuyInfo>
                            <IncrementorName>
                                {item?.revealed ? <FormattedMessage id={`botBuyList.${item.id}.name`} /> : <p style={{ margin: 0 }}>???????</p>}
                            </IncrementorName>
                            <IncrementorBotPrice
                                price={handleRecalculatePricePerUnit(item, config)}
                                item={item}
                                config={config}
                            />
                        </BotBuyInfo>
                        <IncrementorAmount>{item?.revealed ? item.units : '???'}</IncrementorAmount>
                    </IncrementorButton>
                ))}
            </BotBuyListGrid>
        </Aside>
    )
}

export default BotBuyList
