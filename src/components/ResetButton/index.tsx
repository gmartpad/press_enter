import { bitState, autoIncrementorsState, configState, currentHoveredBotItemState, mouseYState, DEFAULT_BIT_STATE_VALUE, DEFAULT_AUTO_INCREMENTORS_STATE_VALUE, DEFAULT_CONFIG_STATE_VALUE, DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE, DEFAULT_MOUSE_Y_STATE_VALUE, upgradesState, DEFAULT_UPGRADES_STATE_VALUE, enterPressesState, DEFAULT_ENTER_PRESSES_STATE, currentHoveredUpgradeItemState, DEFAULT_CURRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { Upgrade } from '@upgrades'
import { useSetAtom } from 'jotai'

interface ResetButtonProps {
    labelText: string
    additionalCallback?: () => void
}

const ResetButton = ({
    labelText = 'Reset All States',
    additionalCallback = () => {}
}: ResetButtonProps) => {
    const setEnterPressesState = useSetAtom(enterPressesState)
    const setBitState = useSetAtom(bitState)
    const setAutoIncrementorsState = useSetAtom(autoIncrementorsState)
    const setConfigState = useSetAtom(configState)
    const setCurrentHoveredBotItemState = useSetAtom(currentHoveredBotItemState)
    const setCurrentHoveredUpgradeItemState = useSetAtom(currentHoveredUpgradeItemState)
    const setMouseYState = useSetAtom(mouseYState)
    const setUpgradesState = useSetAtom(upgradesState)

    const handleReset = () => {
        
        additionalCallback()
        
        setEnterPressesState(DEFAULT_ENTER_PRESSES_STATE)
        setBitState(0)
        setAutoIncrementorsState(DEFAULT_AUTO_INCREMENTORS_STATE_VALUE)
        setConfigState(DEFAULT_CONFIG_STATE_VALUE)
        setCurrentHoveredBotItemState(DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE as Incrementor)
        setCurrentHoveredUpgradeItemState(DEFAULT_CURRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE as Upgrade)
        setMouseYState(DEFAULT_MOUSE_Y_STATE_VALUE)
        setUpgradesState(DEFAULT_UPGRADES_STATE_VALUE)

        localStorage.removeItem('enterPressesState')
        localStorage.removeItem('bitState')
        localStorage.removeItem('autoIncrementorsState')
        localStorage.removeItem('configState')
        localStorage.removeItem('currentHoveredBotItemState')
        localStorage.removeItem('currentHoveredUpgradeItemState')
        localStorage.removeItem('mouseYState')
        localStorage.removeItem('upgradesState')

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