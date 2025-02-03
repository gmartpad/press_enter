import { Incrementor } from '@state/defaultAutoIncrementors'
import { Upgrade } from '@state/upgrades'
import checkUpgradeRequirements from './checkUpgradeRequirements'

function updateUpgrades(
    currentUpgrades: Upgrade[],
    currentBits: number,
    currentIncrementors: Incrementor[],
    currentEnterPresses: number
): Upgrade[] {
    const purchasedUpgrades = currentUpgrades.filter(u => u.purchased)
    
    const listableUpgrades = currentUpgrades.filter(upgrade =>
        checkUpgradeRequirements(
            upgrade,
            currentBits,
            currentIncrementors,
            purchasedUpgrades,
            currentEnterPresses
        )
    )

    const listableIds = new Set(listableUpgrades.map(u => u.id))

    return currentUpgrades.map(upgrade => listableIds.has(upgrade.id)
        ? { ...upgrade, purchasable: true }
        : upgrade
    )
}

export default updateUpgrades