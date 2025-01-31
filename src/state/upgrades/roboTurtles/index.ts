import { Upgrade } from "@upgrades"

const roboTurtlesUpgrades: Upgrade[] = [
    {
        id: 'roboTurtlesUpgrade001',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells I',
        description: 'Robo-Turtles are twice as efficient',
        cost: 900,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 10 }
        }
    },
    {
        id: 'roboTurtlesUpgrade002',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells II',
        description: 'Robo-Turtles are twice as efficient',
        cost: 40_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 20 }
        }
    },
    {
        id: 'roboTurtlesUpgrade003',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells III',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1_500_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 30 }
        }
    },
    {
        id: 'roboTurtlesUpgrade004',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells IV',
        description: 'Robo-Turtles are twice as efficient',
        cost: 15_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 40 }
        }
    },
    {
        id: 'roboTurtlesUpgrade005',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells V',
        description: 'Robo-Turtles are twice as efficient',
        cost: 40_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 50 }
        }
    },
    {
        id: 'roboTurtlesUpgrade006',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells VI',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1_500_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 60 }
        }
    },
    {
        id: 'roboTurtlesUpgrade007',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells VII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 15_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles:70 }
        }
    },
    {
        id: 'roboTurtlesUpgrade008',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells VIII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 40_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 80 }
        }
    },
    {
        id: 'roboTurtlesUpgrade009',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells IX',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1_500_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 90 }
        }
    },
    {
        id: 'roboTurtlesUpgrade010',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells X',
        description: 'Robo-Turtles are twice as efficient',
        cost: 15_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 100 }
        }
    },
]

export default roboTurtlesUpgrades