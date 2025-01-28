import { type Upgrade } from "@upgrades"

// 1-100
import oneToOneHundredUpgrades from "./oneToOneHundred"
// 101-200
import oneHundredToTwoHundredUpgrades from "./oneHundredToTwoHundred"

const globalBitsUpgrades: Upgrade[] = [
    oneToOneHundredUpgrades,
    oneHundredToTwoHundredUpgrades
].flatMap(upgrade => upgrade)

export default globalBitsUpgrades