import { Upgrade } from "@upgrades"

const roboDogsUpgrades: Upgrade[] = [
    {
        id: 'roboDogsUpgrade001',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding I',
        description: 'Robo-Dogs are twice as efficient',
        cost: 1_500_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 10 }
        }
    },
    {
        id: 'roboDogsUpgrade002',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding II',
        description: 'Robo-Dogs are twice as efficient',
        cost: 1_500_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 20 }
        }
    },
    {
        id: 'roboDogsUpgrade003',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding III',
        description: 'Robo-Dogs are twice as efficient',
        cost: 15_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 30 }
        }
    },
    {
        id: 'roboDogsUpgrade004',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding IV',
        description: 'Robo-Dogs are twice as efficient',
        cost: 40_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 40 }
        }
    },
    {
        id: 'roboDogsUpgrade005',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding V',
        description: 'Robo-Dogs are twice as efficient',
        cost: 1_500_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 50 }
        }
    },
    {
        id: 'roboDogsUpgrade006',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding VI',
        description: 'Robo-Dogs are twice as efficient',
        cost: 15_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 60 }
        }
    },
    {
        id: 'roboDogsUpgrade007',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding VII',
        description: 'Robo-Dogs are twice as efficient',
        cost: 40_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs:70 }
        }
    },
    {
        id: 'roboDogsUpgrade008',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding VIII',
        description: 'Robo-Dogs are twice as efficient',
        cost: 1_500_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 80 }
        }
    },
    {
        id: 'roboDogsUpgrade009',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding IX',
        description: 'Robo-Dogs are twice as efficient',
        cost: 15_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 90 }
        }
    },
    {
        id: 'roboDogsUpgrade010',
        incrementorId: 'roboDogs',
        imgSrc: 'roboDogs/roboDogsUpgrade001.png',
        name: 'Government Funding X',
        description: 'Robo-Dogs are twice as efficient',
        cost: 40_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboDogs',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboDogs: 100 }
        }
    },
]

export default roboDogsUpgrades