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
    upgradesState,
    clearIntervalsState,
    autoIncrementorsStateInternal,
    upgradesStateInternal
} from '@state/atoms'
import { defaultUpgrades, Upgrade } from '@state/upgrades'
import defaultAutoIncrementors, { Incrementor } from '@state/defaultAutoIncrementors'

const useSaveManager = () => {
    const setEnterPresses = useSetAtom(enterPressesState)
    const setBits = useSetAtom(bitState)
    const setAutoIncrementors = useSetAtom(autoIncrementorsState)
    const setAutoIncrementorsInternal = useSetAtom(autoIncrementorsStateInternal)
    const setConfig = useSetAtom(configState)
    const setCurrentHoveredBotItem = useSetAtom(currentHoveredBotItemState)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)
    const setMouseY = useSetAtom(mouseYState)
    const setMouseX = useSetAtom(mouseXState)
    const setUpgrades = useSetAtom(upgradesState)
    const setUpgradesInternal = useSetAtom(upgradesStateInternal)
    const setClearIntervals = useSetAtom(clearIntervalsState)

    const loadGame = (alternativeEncoded?: string) => {
        const encoded = alternativeEncoded ? alternativeEncoded : localStorage.getItem('gameState')
        if (!encoded) return false

        const saveData = decodeSaveData(encoded)
        if (!saveData) return false

        setEnterPresses(saveData.enterPresses)
        setBits(saveData.bits)
        setAutoIncrementors(saveData.autoIncrementors)
        setConfig({
            ...saveData.config,
            importSaveFileDialogOpen: false
        })
        setUpgrades(saveData.upgrades)
        setClearIntervals(false)
        return true
    }

    const resetGame = () => {
        localStorage.removeItem('gameState')
        
        // Clear all intervals
        setClearIntervals(true)
        setAutoIncrementorsInternal(defaultAutoIncrementors)
        setEnterPresses(0)
        setBits(0)
        setConfig({
            volume: 0.5,
            physicalEnter: true,
            configDialogOpen: false,
            confirmDialogOpen: false,
            languageDialogOpen: false,
            statsSectionOpen: false,
            exportSaveFileDialogOpen: false,
            importSaveFileDialogOpen: false,
            currentLanguageLocale: 'en',
            botBulkMode: 1,
            botBulkAmount: 1
        })
        setCurrentHoveredBotItem({} as Incrementor)
        setCurrentHoveredUpgradeItem({} as Upgrade)
        setMouseY(0)
        setMouseX(0)
        setUpgradesInternal(defaultUpgrades)
    }

    return { loadGame, resetGame }
}

export default useSaveManager