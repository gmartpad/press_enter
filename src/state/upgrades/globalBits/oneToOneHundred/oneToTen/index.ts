import { type Upgrade } from "@upgrades"

const oneToTenUpgrades: Upgrade[] = [
    {
        id: 'globalBitsUpgrade001',
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit I',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit II',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit III',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit IV',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit V',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit VI',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit VII',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit VIII',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit IX',
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
        imgSrc: '',
        incrementorId: 'globalBits',
        name: 'The First Bit X',
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