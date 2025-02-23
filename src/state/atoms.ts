import { atom } from 'jotai'
import formatLargeNumber from '@utils/formatLargeNumber'
import defaultAutoIncrementors, { Incrementor } from './defaultAutoIncrementors.ts'
import { defaultUpgrades, Upgrade } from '@upgrades'
import { LanguageValues } from '@components/LanguageDialog/languages.ts'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit.ts'
import { decodeSaveData, encodeSaveData } from '@utils/saveEncoder.ts'

// Types
export type Config = {
  volume: number
  configDialogOpen: boolean
  confirmDialogOpen: boolean
  languageDialogOpen: boolean
  statsSectionOpen: boolean
  exportSaveFileDialogOpen: boolean
  importSaveFileDialogOpen: boolean
  currentLanguageLocale: LanguageValues
  botBulkAmount: number
  botBulkMode: number
}

// Default values
const DEFAULT_CONFIG: Config = {
    volume: 0.5,
    configDialogOpen: false,
    confirmDialogOpen: false,
    languageDialogOpen: false,
    statsSectionOpen: false,
    exportSaveFileDialogOpen: false,
    importSaveFileDialogOpen: false,
    currentLanguageLocale: 'en',
    botBulkAmount: 1,
    botBulkMode: 1,
}

export type SaveData = {
  enterPresses: number
  bits: number
  autoIncrementors: Incrementor[]
  config: Config
  // currentHoveredBotItem: Incrementor
  // currentHoveredUpgradeItem: Upgrade
  // mouseY: number
  // mouseX: number
  upgrades: Upgrade[]
  lastUpdateTime?: number
}

// Get initial state from gameState if it exists
const savedState = (() => {
    const encoded = localStorage.getItem('gameState')
    if (!encoded) return null
    return decodeSaveData(encoded)
})()

// Helper function to save game state
export const saveGameState = (get: any) => {
    const oldEncoded = localStorage.getItem('gameState')
    const oldSaveData = oldEncoded ? decodeSaveData(oldEncoded) : null
    const saveData: SaveData = {
        ...oldSaveData,
        enterPresses: get(enterPressesState),
        bits: get(bitState),
        autoIncrementors: get(autoIncrementorsState),
        config: get(configState),
        upgrades: get(upgradesState),
    }
    const encoded = encodeSaveData(saveData)
    localStorage.setItem('gameState', encoded)
}

// Validation helper functions
const validateNumber = (value: unknown, defaultValue: number): number => {
    return typeof value === 'number' && !isNaN(value) ? value : defaultValue
}

function validateArray<T>(saved: T[] | undefined, defaults: T[]): T[] {
    if (!saved) return defaults
    
    // If the saved array is shorter than defaults, append the new items
    if (saved.length < defaults.length) {
        return [...saved, ...defaults.slice(saved.length)]
    }
    
    return saved
}

const validateObject = <T extends object>(value: unknown, defaultValue: T): T => {
    return value && typeof value === 'object' ? value as T : defaultValue
}

// Internal atoms with validated initial values
const enterPressesStateInternal = atom<number>(
    validateNumber(savedState?.enterPresses, 0)
)

const bitStateInternal = atom<number>(
    validateNumber(savedState?.bits, 0)
)

export const autoIncrementorsStateInternal = atom<Incrementor[]>(
    validateArray(savedState?.autoIncrementors, defaultAutoIncrementors)
)

const configStateInternal = atom<Config>(
    validateObject(savedState?.config, DEFAULT_CONFIG)
)

export const upgradesStateInternal = atom<Upgrade[]>(
    validateArray(savedState?.upgrades, defaultUpgrades)
)

// External atoms with validation on updates
export const enterPressesState = atom<number, [number], void>(
    (get) => get(enterPressesStateInternal),
    (get, set, newValue: number) => {
        const current = get(enterPressesStateInternal)
        const valueToSet = validateNumber(newValue, current)
        set(enterPressesStateInternal, valueToSet)
    }
)

export const bitState = atom<number, [number], void>(
    (get) => get(bitStateInternal),
    (get, set, newValue: number) => {
        const current = get(bitStateInternal)
        const valueToSet = validateNumber(newValue, current)
        set(bitStateInternal, valueToSet)
        document.title = `${formatLargeNumber(Number(valueToSet.toFixed(0)))} bits`
    }
)

export const autoIncrementorsState = atom<Incrementor[], [Incrementor[]], void>(
    (get) => get(autoIncrementorsStateInternal),
    (get, set, newValue: Incrementor[]) => {
        const current = get(autoIncrementorsStateInternal)
        const valueToSet = validateArray(newValue, current)
        set(autoIncrementorsStateInternal, valueToSet)
    }
)

export const configState = atom<Config, [Config], void>(
    (get) => get(configStateInternal),
    (get, set, newValue: Config) => {
        const current = get(configStateInternal)
        const valueToSet = validateObject(newValue, current)
        set(configStateInternal, valueToSet)
        saveGameState(get)
    }
)

export const currentHoveredBotItemState = atom<Incrementor, [Incrementor], void>(
  {} as Incrementor,
  (_, set, newValue: Incrementor) => {
      set(currentHoveredBotItemState, newValue)
  }
)

export const currentHoveredUpgradeItemState = atom<Upgrade, [Upgrade], void>(
  {} as Upgrade,
  (_, set, newValue: Upgrade) => {
      set(currentHoveredUpgradeItemState, newValue)
  }
)

export const mouseYState = atom<number, [number], void>(
    0,
    (_, set, newValue: number) => {
        set(mouseYState, newValue)
    }
)

export const mouseXState = atom<number, [number], void>(
    0,
    (_, set, newValue: number) => {
        set(mouseXState, newValue)
    }
)

export const upgradesState = atom<Upgrade[], [Upgrade[]], void>(
    (get) => get(upgradesStateInternal),
    (get, set, newValue: Upgrade[]) => {
        const current = get(upgradesStateInternal)
        const valueToSet = validateArray(newValue, current)
        set(upgradesStateInternal, valueToSet)
    }
)

// ---------------------------------------
// Derived atoms
// ---------------------------------------

export const syncedHoveredBotItemState = atom<Incrementor | null>((get) => {
    const autoIncrementors = get(autoIncrementorsState) as Incrementor[]
    const currentHovered = get(currentHoveredBotItemState)
    return currentHovered?.id ? autoIncrementors.find(inc => inc.id === currentHovered.id) || null : null
})

export const pressEnterPurchasedUpgradesState = atom<Upgrade[]>((get) => {
    const upgrades = get(upgradesState) as Upgrade[]
    return upgrades.filter((u) => u.incrementorId === 'pressEnter' && u.purchased)
})

export const calculatedEnterPressBitAmountState = atom<number>((get) => {
    const purchasedEnterUpgrades = get(pressEnterPurchasedUpgradesState)
    const currentProduction = get(currentProductionState)
    const percentageIncrease = purchasedEnterUpgrades.reduce(
        (acc, current) => acc + (current?.effects?.specific?.additive ?? 0),
        0
    )
    const enterPressBitProductionIncrease = currentProduction * percentageIncrease
    return 1 + enterPressBitProductionIncrease
})

export const getSpecificIncrementor = (incrementorId: string) => atom<Incrementor | undefined>((get) => {
    const autoIncrementors = get(autoIncrementorsState) as Incrementor[]
    return autoIncrementors.find(i => i.id === incrementorId)
})

export const getIncrementorMultiplier = (incrementorId: string) => atom<number>((get) => {
    const upgrades = (get(upgradesState) as Upgrade[]).filter(u => u.purchased)
    let additive = 0
    let multiplicative = 1

    upgrades.forEach(upgrade => {
        if (upgrade.effects.global) {
            additive += upgrade.effects.global?.additive ?? 0
            multiplicative *= upgrade.effects.global?.multiplicative ?? 1
        }
        if (upgrade.effects.specific?.incrementorId === incrementorId) {
            additive += upgrade.effects.specific?.additive ?? 0
            multiplicative *= upgrade.effects.specific?.multiplicative ?? 1
        }
    })

    return (1 + additive) * multiplicative
})

export const isAffordableState = (botId: string) => atom<boolean>((get) => {
    const autoIncrementors = get(autoIncrementorsState) as Incrementor[]
    const bits = get(bitState)
    const config = get(configState) as Config
    const bot = autoIncrementors.find(i => i.id === botId)
    if (!bot) return false

    const price = handleRecalculatePricePerUnit(bot, config)
    if (config.botBulkMode === 1) return bits >= price[0]
    if (config.botBulkMode === 0) return bot.units > 0
    return false
})

export const isUpgradeAffordableState = (upgradeId: string) => atom<boolean>((get) => {
    const upgrades = get(upgradesState) as Upgrade[]
    const bits = get(bitState)
    const pressEnterClicks = get(enterPressesState)
    const autoIncrementors = get(autoIncrementorsState) as Incrementor[]
    const upgrade = upgrades.find(upg => upg.id === upgradeId)
    if (!upgrade) return false

    const { requirementsToBeListable, purchasable } = upgrade
    if (!requirementsToBeListable) return true

    if (requirementsToBeListable.pressEnterClicks && requirementsToBeListable.pressEnterClicks > pressEnterClicks) {
        return false
    }

    if (requirementsToBeListable.bits && bits < requirementsToBeListable.bits && !purchasable) {
        return false
    }

    if (requirementsToBeListable.incrementorUnits) {
        const allMet = Object.entries(requirementsToBeListable.incrementorUnits).every(([id, units]) => {
            const inc = autoIncrementors.find(i => i.id === id)
            return inc && inc.units >= units
        })
        if (!allMet && !purchasable) return false
    }

    if (requirementsToBeListable.upgrades) {
        const purchasedIds = upgrades.filter(u => u.purchased).map(u => u.id)
        const allMet = requirementsToBeListable.upgrades.every(id => purchasedIds.includes(id))
        if (!allMet && !purchasable) return false
    }

    return bits >= upgrade.cost
})

export const affordableUpgradesState = atom<Upgrade[]>((get) => {
    const currentUpgrades = get(upgradesState)
    const currentBits = get(bitState)
    const pressEnterClicks = get(enterPressesState)
    const autoIncrementors = get(autoIncrementorsState)
    const purchasedUpgradeIds = currentUpgrades.filter(u => u.purchased).map(u => u.id)

    return currentUpgrades.filter(upgrade => {
        if (upgrade.purchased) return false

        // Check if purchasable (ignores requirements) or meets requirements
        if (upgrade.purchasable) {
            return currentBits >= upgrade.cost
        }

        // Check requirements if not purchasable
        let meetsRequirements = true
        const requirements = upgrade.requirementsToBeListable
    
        if (requirements) {
            if (requirements.pressEnterClicks !== undefined && requirements.pressEnterClicks > pressEnterClicks) {
                meetsRequirements = false
            }

            if (requirements.bits !== undefined && currentBits < requirements.bits) {
                meetsRequirements = false
            }

            if (meetsRequirements && requirements.incrementorUnits) {
                meetsRequirements = Object.entries(requirements.incrementorUnits).every(([id, units]) => {
                    const inc = autoIncrementors.find(i => i.id === id)
                    return inc && inc.units >= units
                })
            }

            if (meetsRequirements && requirements.upgrades) {
                meetsRequirements = requirements.upgrades.every(id => purchasedUpgradeIds.includes(id))
            }
        }

        return meetsRequirements && currentBits >= upgrade.cost
    })
})

export const currentProductionState = atom<number>((get) => {
    const autoIncrementors = get(autoIncrementorsState) as Incrementor[]
    return autoIncrementors.reduce((total, inc) => {
        const multiplier = get(getIncrementorMultiplier(inc.id))
        return total + inc.units * inc.productionPerUnit * multiplier
    }, 0)
})

export const clearIntervalsState = atom<boolean>(false)