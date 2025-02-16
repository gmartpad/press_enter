import { type Upgrade } from "@upgrades"

const thirtyOneToFortyUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade031',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXI',
        description: 'Bit production multiplier 5%',
        // 50_000_000_000_000_000
        cost: 5e16,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.05
            }
        },
        requirementsToBeListable: {
            // 2_500_000_000_000_000
            bits: 25e14
        }
    },
    {
        id: 'globalBitsUpgrade032',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXII',
        description: 'Bit production multiplier 3%',
        // 100_000_000_000_000_000
        cost: 1e17,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.03
            }
        },
        requirementsToBeListable: {
            // 5_000_000_000_000_000
            bits: 5e15
        }
    },
    {
        id: 'globalBitsUpgrade033',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXIII',
        description: 'Bit production multiplier 3%',
        // 500_000_000_000_000_000
        cost: 5e17,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.03
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000_000_000
            bits: 25e15
        }
    },
    {
        id: 'globalBitsUpgrade034',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXIV',
        description: 'Bit production multiplier 3%',
        // 1_000_000_000_000_000_000
        cost: 1e18,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.03
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000_000
            bits: 5e16
        }
    },
    {
        id: 'globalBitsUpgrade035',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXV',
        description: 'Bit production multiplier 3%',
        // 5_000_000_000_000_000_000
        cost: 5e18,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.03
            }
        },
        requirementsToBeListable: {
            // 250_000_000_000_000_000
            bits: 25e16
        }
    },
    {
        id: 'globalBitsUpgrade036',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXVI',
        description: 'Bit production multiplier 3%',
        // 10_000_000_000_000_000_000
        cost: 1e19,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.03
            }
        },
        requirementsToBeListable: {
            // 500_000_000_000_000_000
            bits: 5e17
        }
    },
    {
        id: 'globalBitsUpgrade037',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXVII',
        description: 'Bit production multiplier 3%',
        // 50_000_000_000_000_000_000
        cost: 5e19,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.03
            }
        },
        requirementsToBeListable: {
            // 2_500_000_000_000_000_000
            bits: 25e17
        }
    },
    {
        id: 'globalBitsUpgrade038',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXVIII',
        description: 'Bit production multiplier 4%',
        // 100_000_000_000_000_000_000
        cost: 1e20,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 5_000_000_000_000_000_000
            bits: 5e18
        }
    },
    {
        id: 'globalBitsUpgrade039',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXXIX',
        description: 'Bit production multiplier 4%',
        // 500_000_000_000_000_000_000
        cost: 5e20,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000_000_000_000
            bits: 25e18
        }
    },
    {
        id: 'globalBitsUpgrade040',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XL',
        description: 'Bit production multiplier 4%',
        // 1_000_000_000_000_000_000_000
        cost: 1e21,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.04
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000_000_000
            bits: 5e19
        }
    },
]

export default thirtyOneToFortyUpgrades