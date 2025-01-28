import { type Incrementor } from "@state/defaultAutoIncrementors"
import { type Upgrade } from "@upgrades"

function checkUpgradeRequirements (
    upgrade: Upgrade,
    currentBits: number,
    incrementors: Incrementor[],
    purchasedUpgrades: Upgrade[],
    enterPresses: number
): boolean {
    const { requirementsToBeListable: requirements, purchased } = upgrade

    if (purchased) return false

    if (!requirements) return true

    if (requirements.bits && currentBits < requirements.bits) return false

    if (requirements.incrementorUnits) {
        for (const [id, requiredUnits] of Object.entries(requirements.incrementorUnits)) {
            const incrementor = incrementors.find(inc => inc.id === id)
            if (!incrementor || incrementor.units < requiredUnits) return false
        }
    }

    if (requirements.upgrades) {
        for (const upgradeId of requirements.upgrades) {
            if (!purchasedUpgrades.some(u => u.id === upgradeId)) return false
        }
    }

    if (requirements.pressEnterClicks) {
        if (requirements.pressEnterClicks > enterPresses) return false
    }

    return true
}

export default checkUpgradeRequirements