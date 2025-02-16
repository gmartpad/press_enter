import { type Upgrade } from "@upgrades"

const oneToTenUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade001',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More I',
        description: 'Bit production multiplier 1%',
        cost: 999_999,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            bits: 5e4 // 50_000
        }
    },
    {
        id: 'globalBitsUpgrade002',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More II',
        description: 'Bit production multiplier 1%',
        // 5_000_000
        cost: 5e6,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            bits: 25e4 // 250_000
        }
    },
    {
        id: 'globalBitsUpgrade003',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More III',
        description: 'Bit production multiplier 1%',
        // 10_000_000        
        cost: 1e7,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            // 500_000
            bits: 5e5
        }
    },
    {
        id: 'globalBitsUpgrade004',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More IV',
        description: 'Bit production multiplier 2%',
        // 50_000_000
        cost: 5e7,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 2_500_000
            bits: 25e5
        }
    },
    {
        id: 'globalBitsUpgrade005',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More V',
        description: 'Bit production multiplier 2%',
        // 100_000_000
        cost: 1e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000
            bits: 5e6
        }
    },
    {
        id: 'globalBitsUpgrade006',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More VI',
        description: 'Bit production multiplier 2%',
        // 100_000_000
        cost: 1e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000
            bits: 5e6
        }
    },
    {
        id: 'globalBitsUpgrade007',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More VII',
        description: 'Bit production multiplier 2%',
        // 100_000_000
        cost: 1e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000
            bits: 5e6
        }
    },
    {
        id: 'globalBitsUpgrade008',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More VIII',
        description: 'Bit production multiplier 2%',
        // 100_000_000
        cost: 1e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000
            bits: 5e6
        }
    },
    {
        id: 'globalBitsUpgrade009',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More IX',
        description: 'Bit production multiplier 2%',
        // 100_000_000
        cost: 1e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000
            bits: 5e6
        }
    },
    {
        id: 'globalBitsUpgrade010',
        imgSrc: 'globalBits/globalBitsUpgrade001.png',
        incrementorId: 'globalBits',
        name: 'A Bit More X',
        description: 'Bit production multiplier 2%',
        // 100_000_000
        cost: 1e8,
        purchased: false,
        purchasable: false,
        effects: {
            global: {
                additive: 0.02
            }
        },
        requirementsToBeListable: {
            // 5_000_000
            bits: 5e6
        }
    },
]

export default oneToTenUpgrades