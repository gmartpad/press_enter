import { type Upgrade } from "@upgrades"

const hundredFortyOneToHundredFiftyUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade141',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More CXLI',
        description: 'Bit production multiplier 5%',
        // 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000
        cost: 1e69,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.05
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000
            bits: 5e67
        }
    },
    {
        id: 'globalBitsUpgrade142',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More CXLII',
        description: 'Bit production multiplier 5%',
        // 3_162_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000
        cost: 3162e66,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.05
            }
        },
        requirementsToBeListable: {
            // 158_114_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000
            bits: 158114e63
        }
    }
]

export default hundredFortyOneToHundredFiftyUpgrades