import { useSetRecoilState } from 'recoil'
import { bitState, autoIncrementorsState, configState, currentHoveredBotItemState, mouseYState, DEFAULT_BIT_STATE_VALUE, DEFAULT_AUTO_INCREMENTORS_STATE_VALUE, DEFAULT_CONFIG_STATE_VALUE, DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE, DEFAULT_MOUSE_Y_STATE_VALUE, upgradesState, DEFAULT_UPGRADES_STATE_VALUE, enterPressesState, DEFAULT_ENTER_PRESSES_STATE, currentHoveredUpgradeItemState, DEFAULT_CURRRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE, bitIntervalsState, DEFAULT_BIT_INTERVALS_STATE } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { Upgrade } from '@upgrades'

interface ResetButtonProps {
    labelText: string
    additionalCallback?: () => void
}

const ResetButton = ({
    labelText = 'Reset All States',
    additionalCallback = () => {}
}: ResetButtonProps) => {
    const setEnterPressesState = useSetRecoilState(enterPressesState)
    const setBitState = useSetRecoilState(bitState)
    const setAutoIncrementorsState = useSetRecoilState(autoIncrementorsState)
    const setConfigState = useSetRecoilState(configState)
    const setCurrentHoveredBotItemState = useSetRecoilState(currentHoveredBotItemState)
    const setCurrentHoveredUpgradeItemState = useSetRecoilState(currentHoveredUpgradeItemState)
    const setMouseYState = useSetRecoilState(mouseYState)
    const setUpgradesState = useSetRecoilState(upgradesState)
    const setBitIntervalsState = useSetRecoilState(bitIntervalsState)

    const handleReset = () => {
        
        additionalCallback()
        
        setEnterPressesState(DEFAULT_ENTER_PRESSES_STATE)
        setBitState(DEFAULT_BIT_STATE_VALUE)
        setAutoIncrementorsState(DEFAULT_AUTO_INCREMENTORS_STATE_VALUE)
        setConfigState(DEFAULT_CONFIG_STATE_VALUE)
        setCurrentHoveredBotItemState(DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE as Incrementor)
        setCurrentHoveredUpgradeItemState(DEFAULT_CURRRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE as Upgrade)
        setMouseYState(DEFAULT_MOUSE_Y_STATE_VALUE)
        setUpgradesState(DEFAULT_UPGRADES_STATE_VALUE)
        setBitIntervalsState(DEFAULT_BIT_INTERVALS_STATE)

        localStorage.removeItem('enterPressesState')
        localStorage.removeItem('bitState')
        localStorage.removeItem('autoIncrementorsState')
        localStorage.removeItem('configState')
        localStorage.removeItem('currentHoveredBotItemState')
        localStorage.removeItem('currentHoveredUpgradeItemState')
        localStorage.removeItem('mouseYState')
        localStorage.removeItem('upgradesState')
        localStorage.removeItem('bitIntervalsState')

    }

    return (
        <button
            style={{
                cursor: 'pointer',
                padding: 10
            }}
            onClick={handleReset}
        >
            {labelText}
        </button>
    )
}

export default ResetButton