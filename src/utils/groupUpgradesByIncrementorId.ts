import { type Upgrade } from "@state/upgrades"

function groupUpgradesByIncrementorId(purchasedUpgrades: Upgrade[]): Upgrade[][] {
    const groups = purchasedUpgrades.reduce((map, upgrade) => {
        // Get the incrementorId string, or if there is none, return 'undefined'
        const key = String(upgrade?.incrementorId)

        // Get the array of upgrades of the same incrementorId
        const currentGroup = map.get(key) || []

        // Push the upgrade onto that array
        currentGroup.push(upgrade)

        // Re-set the updated upgrades array of that incrementorId
        // onto that key position
        map.set(key, currentGroup)

        // Return the Map of upgrades grouped by their incrementorId's
        return map
    }, new Map<string, Upgrade[]>())

    // Return Upgrade[][]
    return Array.from(groups.values())
}

export default groupUpgradesByIncrementorId