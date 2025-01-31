import { Upgrade } from "@upgrades"

const roboMaidsUpgrades: Upgrade[] = [
    {
        id: 'roboMaidsUpgrade001',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick I',
        description: 'Robo-Maids are twice as efficient',
        cost: 60_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 10 }
        }
    },
    {
        id: 'roboMaidsUpgrade002',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick II',
        description: 'Robo-Maids are twice as efficient',
        cost: 2_500_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 20 }
        }
    },
    {
        id: 'roboMaidsUpgrade003',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick III',
        description: 'Robo-Maids are twice as efficient',
        cost: 25_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 30 }
        }
    },
    {
        id: 'roboMaidsUpgrade004',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick IV',
        description: 'Robo-Maids are twice as efficient',
        cost: 60_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 40 }
        }
    },
    {
        id: 'roboMaidsUpgrade005',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick V',
        description: 'Robo-Maids are twice as efficient',
        cost: 2_500_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 50 }
        }
    },
    {
        id: 'roboMaidsUpgrade006',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick VI',
        description: 'Robo-Maids are twice as efficient',
        cost: 25_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 60 }
        }
    },
    {
        id: 'roboMaidsUpgrade007',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick VII',
        description: 'Robo-Maids are twice as efficient',
        cost: 60_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids:70 }
        }
    },
    {
        id: 'roboMaidsUpgrade008',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick VIII',
        description: 'Robo-Maids are twice as efficient',
        cost: 2_500_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 80 }
        }
    },
    {
        id: 'roboMaidsUpgrade009',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick IX',
        description: 'Robo-Maids are twice as efficient',
        cost: 25_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 90 }
        }
    },
    {
        id: 'roboMaidsUpgrade010',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick X',
        description: 'Robo-Maids are twice as efficient',
        cost: 60_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 100 }
        }
    },
]

export default roboMaidsUpgrades