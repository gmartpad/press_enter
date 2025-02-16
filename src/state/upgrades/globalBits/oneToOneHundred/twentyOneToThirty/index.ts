import { type Upgrade } from "@upgrades"

const twentyOneToThirtyUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade021',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXI',
        description: 'Bit production multiplier 2%',
        // 10_000_000_000_000
        cost: 1e13,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 500_000_000_000
            bits: 5e11
        }
    },
    {
        id: 'globalBitsUpgrade022',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXII',
        description: 'Bit production multiplier 2%',
        // 50_000_000_000_000
        cost: 5e13,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 2_500_000_000_000
            bits: 25e11
        }
    },
    {
        id: 'globalBitsUpgrade023',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXIII',
        description: 'Bit production multiplier 2%',
        // 100_000_000_000_000
        cost: 1e14,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000_000_000
            bits: 5e12
        }
    },
    {
        id: 'globalBitsUpgrade024',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXIV',
        description: 'Bit production multiplier 2%',
        // 500_000_000_000_000
        cost: 5e14,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000_000
            bits: 25e12
        }
    },
    {
        id: 'globalBitsUpgrade025',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXV',
        description: 'Bit production multiplier 2%',
        // 500_000_000_000_000
        cost: 5e14,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 25_000_000_000_000
            bits: 25e12
        }
    },
    {
        id: 'globalBitsUpgrade026',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXVI',
        description: 'Bit production multiplier 2%',
        // 1_000_000_000_000_000
        cost: 1e15,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000
            bits: 5e13
        }
    },
    {
        id: 'globalBitsUpgrade027',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXVII',
        description: 'Bit production multiplier 2%',
        // 1_000_000_000_000_000
        cost: 1e15,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 50_000_000_000_000
            bits: 5e13
        }
    },
    {
        id: 'globalBitsUpgrade028',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXVIII',
        description: 'Bit production multiplier 2%',
        // 10_000_000_000_000_000
        cost: 1e16,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 500_000_000_000_000
            bits: 5e14
        }
    },
    {
        id: 'globalBitsUpgrade029',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXIX',
        description: 'Bit production multiplier 2%',
        // 10_000_000_000_000_000
        cost: 1e16,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 500_000_000_000_000
            bits: 5e14
        }
    },
    {
        id: 'globalBitsUpgrade030',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More XXX',
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
]

export default twentyOneToThirtyUpgrades