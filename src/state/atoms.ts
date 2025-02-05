import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import formatLargeNumber from '@utils/formatLargeNumber'
import defaultAutoIncrementors, { Incrementor } from './defaultAutoIncrementors.ts'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit.ts'
import { defaultUpgrades, Upgrade } from '@upgrades'
import { LanguageValues } from '@components/LanguageDialog/languages.ts'

// ---------------------------------------
// Base atoms with localStorage integration
// ---------------------------------------

export const DEFAULT_ENTER_PRESSES_STATE = Number(localStorage.getItem('enterPressesState'))
export const enterPressesState = atomWithStorage<number>(
    'enterPressesState',
    DEFAULT_ENTER_PRESSES_STATE
)

export const DEFAULT_BIT_STATE_VALUE = Number(localStorage.getItem('bitState'))
const bitStateInternal = atomWithStorage<number>('bitState', DEFAULT_BIT_STATE_VALUE)

export const bitState = atom(
    (get) => get(bitStateInternal),
    (get, set, newValue: number) => {
        set(bitStateInternal, newValue)
        document.title = `${formatLargeNumber(Number(newValue.toFixed(0)))} bits`
    }
)

// ------------------------------------------

export const DEFAULT_AUTO_INCREMENTORS_STATE_VALUE = defaultAutoIncrementors

export const autoIncrementorsState = atomWithStorage<Incrementor[]>('autoIncrementorsState', defaultAutoIncrementors, {
    getItem: (key) => {
        const storedValue = localStorage.getItem(key)
        if (!storedValue) return defaultAutoIncrementors // Return default if empty
        try {
            return JSON.parse(storedValue) as Incrementor[]
        } catch (error) {
            console.error('Error parsing localStorage:', error)
            return defaultAutoIncrementors // Handle invalid JSON gracefully
        }
    },
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    removeItem: (key) => localStorage.removeItem(key)
})


export type Config = {
  volume: number
  configDialogOpen: boolean
  confirmDialogOpen: boolean
  languageDialogOpen: boolean
  statsSectionOpen: boolean
  currentLanguageLocale: LanguageValues
  botBulkAmount: number
  botBulkMode: number
}

const defaultConfig: Config = {
    volume: 0.5,
    configDialogOpen: false,
    confirmDialogOpen: false,
    languageDialogOpen: false,
    statsSectionOpen: false,
    currentLanguageLocale: 'en',
    botBulkAmount: 1,
    botBulkMode: 1,
}

export const DEFAULT_CONFIG_STATE_VALUE = defaultConfig
export const configState = atomWithStorage<Config>(
    'configState',
    DEFAULT_CONFIG_STATE_VALUE,
    {
        getItem: (key) => {
            const storedValue = localStorage.getItem(key)
            if (!storedValue) return DEFAULT_CONFIG_STATE_VALUE
            try {
                const parsed = JSON.parse(storedValue) as Partial<Config>
                return {
                    ...DEFAULT_CONFIG_STATE_VALUE,
                    ...parsed
                }
            } catch (error) {
                console.error('Error parsing configState:', error)
                return DEFAULT_CONFIG_STATE_VALUE
            }
        },
        setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
        removeItem: (key) => localStorage.removeItem(key),
    }
)

export const DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE = {} as Incrementor
export const currentHoveredBotItemState = atomWithStorage<Incrementor>(
    'currentHoveredBotItemState',
    DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE
)

export const DEFAULT_CURRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE = {} as Upgrade
export const currentHoveredUpgradeItemState = atomWithStorage<Upgrade>(
    'currentHoveredUpgradeItemState',
    DEFAULT_CURRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE
)

export const DEFAULT_MOUSE_Y_STATE_VALUE = 0
export const mouseYState = atomWithStorage<number>(
    'mouseYState',
    DEFAULT_MOUSE_Y_STATE_VALUE
)

export const DEFAULT_MOUSE_X_STATE_VALUE = 0
export const mouseXState = atomWithStorage<number>(
    'mouseXState',
    DEFAULT_MOUSE_X_STATE_VALUE
)

export const DEFAULT_UPGRADES_STATE_VALUE = defaultUpgrades
export const upgradesState = atomWithStorage<Upgrade[]>(
    'upgradesState',
    DEFAULT_UPGRADES_STATE_VALUE,
    {
        getItem: (key) => {
            const storedValue = localStorage.getItem(key)
            if (!storedValue) return DEFAULT_UPGRADES_STATE_VALUE
            try {
                const parsed = JSON.parse(storedValue) as Upgrade[]
                return DEFAULT_UPGRADES_STATE_VALUE.map((i, k) => ({
                    ...i,
                    ...parsed[k],
                    effects: parsed[k]?.effects ?? i.effects,
                    requirementsToBeListable: parsed[k]?.requirementsToBeListable ?? i.requirementsToBeListable
                }))
            } catch (error) {
                console.error('Error parsing upgradesState:', error)
                return DEFAULT_UPGRADES_STATE_VALUE
            }
        },
        setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
        removeItem: (key) => localStorage.removeItem(key),
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

            // Check bits requirement
            if (requirements.bits !== undefined && currentBits < requirements.bits) {
                meetsRequirements = false
            }

            // Check incrementor units requirement
            if (meetsRequirements && requirements.incrementorUnits) {
                meetsRequirements = Object.entries(requirements.incrementorUnits).every(([id, units]) => {
                    const inc = autoIncrementors.find(i => i.id === id)
                    return inc && inc.units >= units
                })
            }

            // Check upgrade requirements
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