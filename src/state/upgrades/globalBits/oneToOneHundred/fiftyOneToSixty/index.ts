import { type Upgrade } from "@upgrades"

const fiftyOneToSixtyUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade051',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LI',
        description: 'Bit production multiplier 4%',
        // 500_000_000_000_000_000_000_000_000
        cost: 5e26,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000_000_000_000_000_000
            bits: 25e24
        }
    },
    {
        id: 'globalBitsUpgrade052',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LII',
        description: 'Bit production multiplier 4%',
        // 1_000_000_000_000_000_000_000_000_000
        cost: 1e27,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000_000_000_000_000
            bits: 5e25
        }
    },
    {
        id: 'globalBitsUpgrade053',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LIII',
        description: 'Bit production multiplier 4%',
        // 5_000_000_000_000_000_000_000_000_000
        cost: 5e27,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 250_000_000_000_000_000_000_000_000
            bits: 25e25
        }
    },
    {
        id: 'globalBitsUpgrade054',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LIV',
        description: 'Bit production multiplier 4%',
        // 10_000_000_000_000_000_000_000_000_000
        cost: 1e28,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 500_000_000_000_000_000_000_000_000
            bits: 5e26
        }
    },
    {
        id: 'globalBitsUpgrade055',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LV',
        description: 'Bit production multiplier 4%',
        // 50_000_000_000_000_000_000_000_000_000
        cost: 5e28,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 2_500_000_000_000_000_000_000_000_000
            bits: 25e26
        }
    },
    {
        id: 'globalBitsUpgrade056',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LVI',
        description: 'Bit production multiplier 1%',
        // 100_000_000_000_000_000_000_000_000_000
        cost: 1e29,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            // 5_000_000_000_000_000_000_000_000_000
            bits: 5e27
        }
    },
    {
        id: 'globalBitsUpgrade057',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LVII',
        description: 'Bit production multiplier 4%',
        // 500_000_000_000_000_000_000_000_000_000
        cost: 5e29,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000_000_000_000_000_000_000
            bits: 25e27
        }
    },
    {
        id: 'globalBitsUpgrade058',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LVIII',
        description: 'Bit production multiplier 4%',
        // 1_000_000_000_000_000_000_000_000_000_000
        cost: 1e30,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000_000_000_000_000_000
            bits: 5e28
        }
    },
    {
        id: 'globalBitsUpgrade059',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LIX',
        description: 'Bit production multiplier 4%',
        // 5_000_000_000_000_000_000_000_000_000_000
        cost: 5e30,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 250_000_000_000_000_000_000_000_000_000
            bits: 25e28
        }
    },
    {
        id: 'globalBitsUpgrade060',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More LX',
        description: 'Bit production multiplier 4%',
        // 10_000_000_000_000_000_000_000_000_000_000
        cost: 1e31,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 500_000_000_000_000_000_000_000_000_000
            bits: 5e29
        }
    },
]

export default fiftyOneToSixtyUpgrades