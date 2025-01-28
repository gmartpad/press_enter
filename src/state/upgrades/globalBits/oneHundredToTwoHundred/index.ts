import { type Upgrade } from "@upgrades"

// 101-110
import hundredAndOneToHundredTenUpgrades from "./hundredAndOneToHundredTen"
// 111-120
import hundredElevenToHundredTwentyUpgrades from "./hundredElevenToHundredTwenty"
// 121-130
import hundredTwentyOneToHundredThirtyUpgrades from "./hundredTwentyOneToHundredThirty"
// 131-140
import hundredThirtyOneToHundredFortyUpgrades from "./hundredThirtyOneToHundredForty"
// 141-150
import hundredFortyOneToHundredFiftyUpgrades from "./hundredFortyOneToHundredFifty"

const oneHundredToTwoHundredUpgrades: Upgrade[] = [
    hundredAndOneToHundredTenUpgrades,
    hundredElevenToHundredTwentyUpgrades,
    hundredTwentyOneToHundredThirtyUpgrades,
    hundredThirtyOneToHundredFortyUpgrades,
    hundredFortyOneToHundredFiftyUpgrades
].flatMap(upgrade => upgrade)

export default oneHundredToTwoHundredUpgrades