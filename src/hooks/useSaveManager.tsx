import { useSetAtom } from 'jotai'
import { decodeSaveData } from '@utils/saveEncoder'
import {
    enterPressesState,
    bitState,
    autoIncrementorsState,
    configState,
    currentHoveredBotItemState,
    currentHoveredUpgradeItemState,
    mouseYState,
    mouseXState,
    upgradesState
} from '@state/atoms'
import { Upgrade } from '@state/upgrades'
import { Incrementor } from '@state/defaultAutoIncrementors'

const useSaveManager = () => {
    const setEnterPresses = useSetAtom(enterPressesState)
    const setBits = useSetAtom(bitState)
    const setAutoIncrementors = useSetAtom(autoIncrementorsState)
    const setConfig = useSetAtom(configState)
    const setCurrentHoveredBotItem = useSetAtom(currentHoveredBotItemState)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)
    const setMouseY = useSetAtom(mouseYState)
    const setMouseX = useSetAtom(mouseXState)
    const setUpgrades = useSetAtom(upgradesState)

    const loadGame = () => {
        const encoded = localStorage.getItem('gameState')
        if (!encoded) return false

        const saveData = decodeSaveData(encoded)
        if (!saveData) return false

        setEnterPresses(saveData.enterPresses)
        setBits(saveData.bits)
        setAutoIncrementors(saveData.autoIncrementors)
        setConfig(saveData.config)
        // setCurrentHoveredBotItem(saveData.currentHoveredBotItem as Incrementor)
        // setCurrentHoveredUpgradeItem(saveData.currentHoveredUpgradeItem as Upgrade)
        // setMouseY(saveData.mouseY)
        // setMouseX(saveData.mouseX)
        setUpgrades(saveData.upgrades)
    
        return true
    }

    const resetGame = () => {
        localStorage.removeItem('gameState')
    
        setEnterPresses(0)
        setBits(0)
        setAutoIncrementors([])
        setConfig({
            volume: 0.5,
            configDialogOpen: false,
            confirmDialogOpen: false,
            languageDialogOpen: false,
            statsSectionOpen: false,
            currentLanguageLocale: 'en',
            botBulkMode: 1,
            botBulkAmount: 1
        })
        setCurrentHoveredBotItem({} as Incrementor)
        setCurrentHoveredUpgradeItem({} as Upgrade)
        setMouseY(0)
        setMouseX(0)
        setUpgrades([])
    }

    return { loadGame, resetGame }
}

export default useSaveManager