import formatLargeNumber from '@utils/formatLargeNumber'
import { atom, RecoilState, RecoilValueReadOnly, selector, selectorFamily } from 'recoil'
import defaultAutoIncrementors, { Incrementor } from './defaultAutoIncrementors.ts'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit.ts'
import { defaultUpgrades, Upgrade } from '@upgrades'
import checkUpgradeRequirements from '@utils/checkUpgradeRequirements.ts'
import { LanguageValues } from '@components/LanguageDialog/languages.ts'

// Utility function to check and parse value from localStorage
const getLocalStorageValue = (key: string, defaultValue: any) => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
}

// ---------------------------------------

export const DEFAULT_ENTER_PRESSES_STATE = 0

const enterPressesState = atom({
    key: 'enterPressesState',
    default: Number(getLocalStorageValue('enterPressesState', DEFAULT_ENTER_PRESSES_STATE)),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('enterPressesState')

            if (storedValue != null) {
                setSelf(Number(JSON.parse(storedValue)))
            }

            // Save to localStorage whenever the atom state changes
            onSet((newValue) => {
                localStorage.setItem('enterPressesState', JSON.stringify(newValue))
            })
        }
    ]
})

// ---------------------------------------

export const DEFAULT_BIT_STATE_VALUE = 0

const bitState = atom({
    key: 'bitState',
    default: Number(getLocalStorageValue('bitState', DEFAULT_BIT_STATE_VALUE)),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('bitState')

            if (storedValue != null) {
                setSelf(Number(JSON.parse(storedValue)))
            }

            // Save to localStorage whenever the atom state changes
            onSet(newValue => {
                localStorage.setItem('bitState', JSON.stringify(newValue))
                document.title = `${formatLargeNumber(Number(newValue.toFixed(0)))} bits`
            })
        },
    ],
})

// ---------------------------------------

export const DEFAULT_AUTO_INCREMENTORS_STATE_VALUE = defaultAutoIncrementors

const autoIncrementorsState: RecoilState<Incrementor[]> = atom({
    key: 'autoIncrementorsState',
    default: getLocalStorageValue('autoIncrementorsState', DEFAULT_AUTO_INCREMENTORS_STATE_VALUE as Incrementor[]),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('autoIncrementorsState')

            if (storedValue != null) {
                const jsonStoredValue: Incrementor[] = JSON.parse(storedValue)

                const updatedStoredValue = defaultAutoIncrementors.map((i: Incrementor, k) => ({
                    ...i,
                    units: jsonStoredValue[k]?.units ?? i.units,
                    pricePerUnit: jsonStoredValue[k]?.pricePerUnit ?? i.pricePerUnit,
                    bitsProducedSoFar: jsonStoredValue[k]?.bitsProducedSoFar ?? i.bitsProducedSoFar,
                }))

                setSelf(updatedStoredValue)
            }

            // Save to localStorage whenever the atom state changes
            onSet(newValue => {
                localStorage.setItem('autoIncrementorsState', JSON.stringify(newValue))
            })
        },
    ],
})

// ---------------------------------------

// ---------------------------------------

export type Config = {
  volume: number
  configDialogOpen: boolean
  confirmDialogOpen: boolean
  languageDialogOpen: boolean
  statsSectionOpen: boolean
  currentLanguageLocale: LanguageValues 
  botBulkAmount: number
  // botBulkMode 0 is Sell, botBulkMode 1 is Buy
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

const configState = atom({
    key: 'configState',
    default: getLocalStorageValue('configState', DEFAULT_CONFIG_STATE_VALUE),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('configState')

            if (storedValue != null) {
                const jsonStoredValue: Config = JSON.parse(storedValue)

                const updatedStoredValue = {
                    volume: jsonStoredValue?.volume ?? DEFAULT_CONFIG_STATE_VALUE.volume,
                    configDialogOpen: jsonStoredValue?.configDialogOpen ?? DEFAULT_CONFIG_STATE_VALUE.configDialogOpen,
                    confirmDialogOpen: jsonStoredValue?.confirmDialogOpen ?? DEFAULT_CONFIG_STATE_VALUE.confirmDialogOpen,
                    languageDialogOpen: jsonStoredValue?.languageDialogOpen ?? DEFAULT_CONFIG_STATE_VALUE.languageDialogOpen,
                    statsSectionOpen: jsonStoredValue?.statsSectionOpen ?? DEFAULT_CONFIG_STATE_VALUE.statsSectionOpen,
                    currentLanguageLocale: jsonStoredValue?.currentLanguageLocale ?? DEFAULT_CONFIG_STATE_VALUE.currentLanguageLocale,
                    botBulkAmount: jsonStoredValue?.botBulkAmount ?? DEFAULT_CONFIG_STATE_VALUE.botBulkAmount,
                    botBulkMode: jsonStoredValue?.botBulkMode ?? DEFAULT_CONFIG_STATE_VALUE.botBulkMode,
                }

                setSelf(updatedStoredValue)
            }

            onSet(newValue => {
                localStorage.setItem('configState', JSON.stringify(newValue))
            })
        },
    ],
})

// ---------------------------------------

export const DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE = {}

const currentHoveredBotItemState: RecoilState<Incrementor> = atom({
    key: 'currentHoveredBotItemState',
    default: getLocalStorageValue('currentHoveredBotItemState', DEFAULT_CURRENT_HOVERED_BOT_ITEM_STATE_VALUE as Incrementor),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('currentHoveredBotItemState')

            if (storedValue != null) {
                const jsonStoredValue: Incrementor = JSON.parse(storedValue)

                setSelf(jsonStoredValue)
            }

            onSet(newValue => {
                localStorage.setItem('currentHoveredBotItemState', JSON.stringify(newValue))
            })
        },
    ],
})

// ---------------------------------------

export const DEFAULT_CURRRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE = {}

const currentHoveredUpgradeItemState: RecoilState<Upgrade> = atom({
    key: 'currentHoveredUpgradeItemState',
    default: getLocalStorageValue('currentHoveredUpgradeItemState', DEFAULT_CURRRENT_HOVERED_UPGRADE_ITEM_STATE_VALUE as Upgrade),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('currentHoveredUpgradeItemState')

            if (storedValue !== null) {
                const jsonStoredValue: Upgrade = JSON.parse(storedValue)

                setSelf(jsonStoredValue)
            }

            onSet(newValue => {
                localStorage.setItem('currentHoveredUpgradeItemState', JSON.stringify(newValue))
            })
        }
    ]
})

// ---------------------------------------

const syncedHoveredBotItemState = selector({
    key: 'syncedHoveredBotItemState',
    get: ({ get }) => {
        const autoIncrementors = get(autoIncrementorsState)
        const currentHovered = get(currentHoveredBotItemState)

        // If there's no hovered item, return empty object
        if (!currentHovered?.id) return {} as Incrementor

        // Find the matching incrementor and return updated version
        const updatedHoveredItem = autoIncrementors.find(inc => inc.id === currentHovered.id)

        return updatedHoveredItem || ({} as Incrementor)
    },
})

// ---------------------------------------

export const DEFAULT_MOUSE_Y_STATE_VALUE = 0

const mouseYState = atom({
    key: 'mouseYState',
    default: getLocalStorageValue('mouseYState', DEFAULT_MOUSE_Y_STATE_VALUE),
    effects: [
        ({ setSelf, onSet }) => {
            const storedValue = localStorage.getItem('mouseYState')

            if (storedValue != null) {
                setSelf(Number(JSON.parse(storedValue)))
            }

            // Save to localStorage whenever the atom state changes
            onSet(newValue => {
                localStorage.setItem('mouseYState', JSON.stringify(newValue))
            })
        },
    ],
})

// ---------------------------------------

export const DEFAULT_UPGRADES_STATE_VALUE = defaultUpgrades

export const upgradesState = atom({
    key: 'upgradesState',
    default: getLocalStorageValue('upgradesState', DEFAULT_UPGRADES_STATE_VALUE as Upgrade[]),
    effects: [
        ({ setSelf, onSet }) => {
            const storedValue = localStorage.getItem('upgradesState')

            if (storedValue !== null) {
                const jsonStoredValue: Upgrade[] = JSON.parse(storedValue)

                const updatedStoredValue = DEFAULT_UPGRADES_STATE_VALUE.map((i: Upgrade, k) => ({
                    ...i,
                    id: jsonStoredValue[k]?.id ?? i.id,
                    name: jsonStoredValue[k]?.name ?? i.name,
                    imgSrc: jsonStoredValue[k]?.imgSrc ?? i.imgSrc,
                    description: jsonStoredValue[k]?.description ?? i.description,
                    cost: jsonStoredValue[k]?.cost ?? i.cost,
                    purchased: jsonStoredValue[k]?.purchased ?? i.purchased,
                    effects: jsonStoredValue[k]?.effects ?? i.effects,
                    requirementsToBeListable: jsonStoredValue[k]?.requirementsToBeListable ?? i.requirementsToBeListable
                }))

                setSelf(updatedStoredValue)
            }

            if (storedValue === null) {
                localStorage.setItem('upgradesState', JSON.stringify(DEFAULT_UPGRADES_STATE_VALUE))
                setSelf(DEFAULT_UPGRADES_STATE_VALUE)
            }

            onSet(newValue => {
                localStorage.setItem('upgradesState', JSON.stringify(newValue))
            })
        }
    ]
})

// ---------------------------------------

export interface BitIntervals {
    quickUpdateIntervalId: NodeJS.Timeout | null,
    slowUpdateIntervalId: NodeJS.Timeout | null
}

export const DEFAULT_BIT_INTERVALS_STATE: BitIntervals = {
    quickUpdateIntervalId: null,
    slowUpdateIntervalId: null
}

const bitIntervalsState = atom({
    key: 'bitIntervalsState',
    default: getLocalStorageValue('bitIntervalsState', DEFAULT_BIT_INTERVALS_STATE as BitIntervals),
    effects: [
        ({ setSelf, onSet }) => {
            const storedValue = localStorage.getItem('bitIntervalsState')

            if (storedValue !== null) {
                const jsonStoredValue: BitIntervals = JSON.parse(storedValue)

                const updatedStoredValue = {
                    quickUpdateIntervalId: jsonStoredValue.quickUpdateIntervalId ?? DEFAULT_BIT_INTERVALS_STATE.quickUpdateIntervalId,
                    slowUpdateIntervalId: jsonStoredValue.slowUpdateIntervalId ?? DEFAULT_BIT_INTERVALS_STATE.slowUpdateIntervalId,
                }

                setSelf(updatedStoredValue)
            }

            if (storedValue === null) {
                localStorage.setItem('bitIntervalsState', JSON.stringify(DEFAULT_BIT_INTERVALS_STATE))
                setSelf(DEFAULT_BIT_INTERVALS_STATE)
            }

            onSet(newValue => {
                localStorage.setItem('bitIntervalsState', JSON.stringify(newValue))
            })
        }
    ]
})

// ---------------------------------------

const pressEnterPurchasedUpgradesState = selector({
    key: 'pressEnterUpgradesState',
    get: ({ get }) => {
        const upgrades = get<Upgrade[]>(upgradesState)
        return upgrades.filter((u) => u.incrementorId === 'pressEnter' && u.purchased)
    }
})

// ---------------------------------------

const calculatedEnterPressBitAmountState = selector({
    key: 'calculatedEnterPressBitAmountState',
    get: ({ get }) => {
        const purchasedEnterUpgrades =  get<Upgrade[]>(pressEnterPurchasedUpgradesState)
        const currentProduction = get<number>(currentProductionState)
        
        const percentageIncrease = purchasedEnterUpgrades.reduce(
            (accumulator, currentValue) => accumulator + (currentValue?.effects?.specific?.additive ?? 0),
            0
        )

        const enterPressBitProductionIncrease = currentProduction * percentageIncrease

        return 1 + enterPressBitProductionIncrease
    }
})

const listableUpgradesState = selector({
    key: 'listableUpgradesState',
    get: ({ get }) => {
        const upgrades = get<Upgrade[]>(upgradesState)
        const bits = get(bitState)
        const incrementors = get(autoIncrementorsState)
        const enterPresses = get(enterPressesState)
        const purchasedUpgrades = upgrades.filter(u => u.purchased)

        return upgrades.filter(upgrade => 
            checkUpgradeRequirements(
                upgrade,
                bits,
                incrementors,
                purchasedUpgrades,
                enterPresses
            )
        )
    }
})

// ---------------------------------------

const getSpecificIncrementor = selectorFamily({
    key: 'specificIncrementor',
    get: (incrementorId: string) => ({ get }) => {
        const autoIncrementors: Incrementor[] = get(autoIncrementorsState)

        return autoIncrementors.find((i) => i.id === incrementorId)
    }
})

// ---------------------------------------

const getIncrementorMultiplier = selectorFamily({
    key: 'incrementorMultiplier',
    get: (incrementorId: string) => ({ get }) => {
        const upgrades = get<Upgrade[]>(upgradesState).filter(u => u.purchased)
        let additive = 0
        let multiplicative = 1

        upgrades.forEach(upgrade => {
            if (upgrade.effects.global) {
                if (upgrade?.effects?.global?.additive) additive += upgrade.effects.global.additive
                if (upgrade?.effects?.global?.multiplicative) multiplicative *= upgrade.effects.global.multiplicative
            }
            
            if (upgrade.effects.specific?.incrementorId === incrementorId) {
                if (upgrade?.effects?.specific?.additive) additive += upgrade.effects.specific.additive
                if (upgrade?.effects?.specific?.multiplicative) multiplicative *= upgrade.effects.specific.multiplicative
            }
        })

        return (1 + additive) * multiplicative
    }
})

// ---------------------------------------

// Selector to show if the bot is affordable or not
const isAffordableState: (botId: string) => RecoilValueReadOnly<boolean> = selectorFamily({
    key: 'isAffordableState',
    get:
    (botId: string) =>
        ({ get }) => {
            const autoIncrementors: Incrementor[] = get(autoIncrementorsState)
            const bits = get(bitState)
            const config = get(configState)

            const bot = autoIncrementors.find(i => i.id === botId)
            if (!bot) return false // Fallback if bot is not found

            const price = handleRecalculatePricePerUnit(bot, config)

            // Buying Mode
            if (config?.botBulkMode === 1) {
                return bits >= price[0] // Assuming price is an array
            }

            // Selling Mode
            if (config?.botBulkMode === 0) {
                return bot.units > 0
            }

            return false
        },
})

// Selector to check if an upgrade is affordable or not
const isUpgradeAffordableState: (upgradeId: string) => RecoilValueReadOnly<boolean> = selectorFamily({
    key: 'isUpgradeAffordableState',
    get: (upgradeId: string) => ({ get }) => {
        const upgrades: Upgrade[] = get(upgradesState) // Assuming upgrades are stored in a Recoil atom
        const bits = get(bitState) // Current available bits
        const autoIncrementors: Incrementor[] = get(autoIncrementorsState) // Current incrementors

        const upgrade = upgrades.find(upg => upg.id === upgradeId)
        if (!upgrade) return false // Fallback if the upgrade is not found

        const { requirementsToBeListable } = upgrade
        if (!requirementsToBeListable) return true // If no requirements, it's affordable by default

        // Check bit requirement
        if (requirementsToBeListable.bits && bits < requirementsToBeListable.bits) {
            return false
        }

        // Check incrementor unit requirements
        if (requirementsToBeListable.incrementorUnits) {
            const allRequirementsMet = Object.entries(requirementsToBeListable.incrementorUnits).every(
                ([incrementorId, requiredUnits]) => {
                    const incrementor = autoIncrementors.find(inc => inc.id === incrementorId)
                    return incrementor && incrementor.units >= requiredUnits
                }
            )
            if (!allRequirementsMet) return false
        }

        // Check upgrade dependency requirements
        if (requirementsToBeListable.upgrades) {
            const purchasedUpgrades = upgrades.filter(upg => upg.purchased).map(upg => upg.id)
            const allUpgradesMet = requirementsToBeListable.upgrades.every(reqUpgradeId =>
                purchasedUpgrades.includes(reqUpgradeId)
            )
            if (!allUpgradesMet) return false
        }

        // Check the upgrade's cost
        return bits >= upgrade.cost
    },
})

// Selector for current production state using reduce
const currentProductionState = selector({
    key: 'currentProductionState', // unique ID
    get: ({ get }) => {
    // Get the autoIncrementorsState
        const autoIncrementors = get(autoIncrementorsState)

        // Calculate total production using reduce
        const totalProduction = autoIncrementors.reduce(
            (
                total: number,
                incrementor: Incrementor
            ) => {
                const multiplier = get(getIncrementorMultiplier(incrementor.id))
                // return Number(total + incrementor.units * incrementor.productionPerUnit)
                return Number(total + (incrementor.units * incrementor.productionPerUnit * multiplier))
            },
            0
        )

        return totalProduction
    },
})

export {
    enterPressesState,
    bitState,
    autoIncrementorsState,
    configState,
    currentHoveredBotItemState,
    currentHoveredUpgradeItemState,
    mouseYState,
    isAffordableState,
    isUpgradeAffordableState,
    getSpecificIncrementor,
    getIncrementorMultiplier,
    currentProductionState,
    syncedHoveredBotItemState,
    bitIntervalsState,
    calculatedEnterPressBitAmountState,
    listableUpgradesState,
}
