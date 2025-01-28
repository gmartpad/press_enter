import { type Upgrade } from "@upgrades"

// 1-10
import oneToTenUpgrades from "./oneToTen"
// 11-20
import elevenToTwentyUpgrades from "./elevenToTwenty"
// 21-30
import twentyOneToThirtyUpgrades from "./twentyOneToThirty"
// 31-40
import thirtyOneToFortyUpgrades from "./thirtyOneToForty"
// 41-50
import fortyOneToFiftyUpgrades from "./fortyOneToFifty"
// 51-60
import fiftyOneToSixtyUpgrades from "./fiftyOneToSixty"
// 61-70
import sixtyOneToSeventyUpgrades from "./sixtyOneToSeventy"
// 71-80
import seventyOneToEightyUpgrades from "./seventyOneToEighty"
// 81-90
import eightyOneToNinetyUpgrades from "./eightyOneToNinety"
// 91-100
import ninetyOneToOneHundredUpgrades from "./ninetyOneToOneHundred"

const oneToOneHundredUpgrades: Upgrade[] = [
    oneToTenUpgrades,
    elevenToTwentyUpgrades,
    twentyOneToThirtyUpgrades,
    thirtyOneToFortyUpgrades,
    fortyOneToFiftyUpgrades,
    fiftyOneToSixtyUpgrades,
    sixtyOneToSeventyUpgrades,
    seventyOneToEightyUpgrades,
    eightyOneToNinetyUpgrades,
    ninetyOneToOneHundredUpgrades
].flatMap(upgrade => upgrade)

export default oneToOneHundredUpgrades