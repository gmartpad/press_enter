import { Upgrade } from "@upgrades"

const roboTurtlesUpgrades: Upgrade[] = [
    {
        id: 'roboTurtlesUpgrade001',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells I',
        description: 'Robo-Turtles are twice as efficient',
        cost: 9e2,
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
        cost: 4e4,
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
        cost: 1.5e6,
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
        cost: 1.5e7,
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
        cost: 4e7,
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
        cost: 1.5e9,
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
        cost: 1.5e10,
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
        cost: 4e10,
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
        cost: 1.5e12,
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
        cost: 1.5e13,
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
    {
        id: 'roboTurtlesUpgrade011',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XI',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 110 }
        }
    },
    {
        id: 'roboTurtlesUpgrade012',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e14,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 120 }
        }
    },
    {
        id: 'roboTurtlesUpgrade013',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XIII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e14,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 130 }
        }
    },
    {
        id: 'roboTurtlesUpgrade014',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XIV',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 140 }
        }
    },
    {
        id: 'roboTurtlesUpgrade015',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XV',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 150 }
        }
    },
    {
        id: 'roboTurtlesUpgrade016',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XVI',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 160 }
        }
    },
    {
        id: 'roboTurtlesUpgrade017',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XVII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 170 }
        }
    },
    {
        id: 'roboTurtlesUpgrade018',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XVIII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 180 }
        }
    },
    {
        id: 'roboTurtlesUpgrade019',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XIX',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 190 }
        }
    },
    {
        id: 'roboTurtlesUpgrade020',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XX',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 200 }
        }
    },
    {
        id: 'roboTurtlesUpgrade021',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXI',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 210 }
        }
    },
    {
        id: 'roboTurtlesUpgrade022',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 220 }
        }
    },
    {
        id: 'roboTurtlesUpgrade023',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXIII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 230 }
        }
    },
    {
        id: 'roboTurtlesUpgrade024',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXIV',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 240 }
        }
    },
    {
        id: 'roboTurtlesUpgrade025',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXV',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 250 }
        }
    },
    {
        id: 'roboTurtlesUpgrade026',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXVI',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 260 }
        }
    },
    {
        id: 'roboTurtlesUpgrade027',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXVII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 270 }
        }
    },
    {
        id: 'roboTurtlesUpgrade028',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXVIII',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 280 }
        }
    },
    {
        id: 'roboTurtlesUpgrade029',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXIX',
        description: 'Robo-Turtles are twice as efficient',
        cost: 4e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 290 }
        }
    },
    {
        id: 'roboTurtlesUpgrade030',
        incrementorId: 'roboTurtles',
        imgSrc: 'roboTurtles/roboTurtlesUpgrade001.png',
        name: 'Chromed Shells XXX',
        description: 'Robo-Turtles are twice as efficient',
        cost: 1.5e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboTurtles',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboTurtles: 300 }
        }
    }
]

export default roboTurtlesUpgrades