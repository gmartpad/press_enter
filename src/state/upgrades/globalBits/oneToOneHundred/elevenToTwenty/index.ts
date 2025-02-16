import { type Upgrade } from "@upgrades"

const elevenToTwentyUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade011',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XI',
        description: 'Bit production multiplier 2%',
        // 500_000_000
        cost: 5e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 25_000_000
            bits: 25e6
        }
    },
    {
        id: 'globalBitsUpgrade012',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XII',
        description: 'Bit production multiplier 2%',
        // 500_000_000
        cost: 5e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 25_000_000
            bits: 25e6
        }
    },
    {
        id: 'globalBitsUpgrade013',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XIII',
        description: 'Bit production multiplier 2%',
        // 5_000_000_000
        cost: 5e9,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 250_000_000
            bits: 25e7
        }
    },
    {
        id: 'globalBitsUpgrade014',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XIV',
        description: 'Bit production multiplier 2%',
        // 10_000_000_000
        cost: 1e10,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 500_000_000
            bits: 5e8
        }
    },
    {
        id: 'globalBitsUpgrade015',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XV',
        description: 'Bit production multiplier 2%',
        // 50_000_000_000
        cost: 5e10,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 2_500_000_000
            bits: 25e8
        }
    },
    {
        id: 'globalBitsUpgrade016',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XVI',
        description: 'Bit production multiplier 5%',
        // 100_000_000_000
        cost: 1e11,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.05
            }
        },
        requirementsToBeListable: {
            // 5_000_000_000
            bits: 5e9
        }
    },
    {
        id: 'globalBitsUpgrade017',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XVII',
        description: 'Bit production multiplier 5%',
        // 100_000_000_000
        cost: 1e11,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.05
            }
        },
        requirementsToBeListable: {
            // 5_000_000_000
            bits: 5e9
        }
    },
    {
        id: 'globalBitsUpgrade018',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XVIII',
        description: 'Bit production multiplier 2%',
        // 500_000_000_000
        cost: 5e11,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000
            bits: 25e9
        }
    },
    {
        id: 'globalBitsUpgrade019',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XIX',
        description: 'Bit production multiplier 2%',
        // 1_000_000_000_000
        cost: 1e12,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000
            bits: 5e10
        }
    },
    {
        id: 'globalBitsUpgrade020',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XX',
        description: 'Bit production multiplier 2%',
        // 5_000_000_000_000
        cost: 5e12,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 250_000_000_000
            bits: 25e10
        }
    },
]

export default elevenToTwentyUpgrades