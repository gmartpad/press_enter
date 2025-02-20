import { Upgrade } from "@upgrades"

const roboMaidsUpgrades: Upgrade[] = [
    {
        id: 'roboMaidsUpgrade001',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick I',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e13,
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
        cost: 2.5e15,
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
        cost: 2.5e16,
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
        cost: 6e16,
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
        cost: 2.5e18,
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
        cost: 2.5e19,
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
        cost: 6e19,
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
        cost: 2.5e21,
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
        cost: 2.5e22,
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
        cost: 6e22,
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
    {
        id: 'roboMaidsUpgrade011',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XI',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 110 }
        }
    },
    {
        id: 'roboMaidsUpgrade012',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XII',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 120 }
        }
    },
    {
        id: 'roboMaidsUpgrade013',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XIII',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 130 }
        }
    },
    {
        id: 'roboMaidsUpgrade014',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XIV',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 140 }
        }
    },
    {
        id: 'roboMaidsUpgrade015',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XV',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e25,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 150 }
        }
    },
    {
        id: 'roboMaidsUpgrade016',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XVI',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 160 }
        }
    },
    {
        id: 'roboMaidsUpgrade017',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XVII',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids:170 }
        }
    },
    {
        id: 'roboMaidsUpgrade018',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XVIII',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e27,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 180 }
        }
    },
    {
        id: 'roboMaidsUpgrade019',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XIX',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 190 }
        }
    },
    {
        id: 'roboMaidsUpgrade020',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XX',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 200 }
        }
    },
    {
        id: 'roboMaidsUpgrade021',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXI',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 210 }
        }
    },
    {
        id: 'roboMaidsUpgrade022',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXII',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 220 }
        }
    },
    {
        id: 'roboMaidsUpgrade023',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXIII',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 230 }
        }
    },
    {
        id: 'roboMaidsUpgrade024',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXIV',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 240 }
        }
    },
    {
        id: 'roboMaidsUpgrade025',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXV',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 250 }
        }
    },
    {
        id: 'roboMaidsUpgrade026',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXVI',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 260 }
        }
    },
    {
        id: 'roboMaidsUpgrade027',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXVII',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids:270 }
        }
    },
    {
        id: 'roboMaidsUpgrade028',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXVIII',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 280 }
        }
    },
    {
        id: 'roboMaidsUpgrade029',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXIX',
        description: 'Robo-Maids are twice as efficient',
        cost: 6e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 290 }
        }
    },
    {
        id: 'roboMaidsUpgrade030',
        incrementorId: 'roboMaids',
        imgSrc: 'roboMaids/roboMaidsUpgrade001.png',
        name: 'Dish Soap + Hydrogen Peroxide Trick XXX',
        description: 'Robo-Maids are twice as efficient',
        cost: 2.5e34,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'roboMaids',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { roboMaids: 300 }
        }
    }
]

export default roboMaidsUpgrades