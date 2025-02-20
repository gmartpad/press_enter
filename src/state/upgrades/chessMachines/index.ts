import { type Upgrade } from "@upgrades"

const chessMachinesUpgrades: Upgrade[] = [
    {
        id: 'chessMachinesUpgrade001',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit I',
        description: 'Chess Machines are twice as efficient',
        cost: 2e10,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 10 }
        }
    },
    {
        id: 'chessMachinesUpgrade002',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit II',
        description: 'Chess Machines are twice as efficient',
        cost: 5e10,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 20 }
        }
    },
    {
        id: 'chessMachinesUpgrade003',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit III',
        description: 'Chess Machines are twice as efficient',
        cost: 5e12,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 30 }
        }
    },
    {
        id: 'chessMachinesUpgrade004',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit IV',
        description: 'Chess Machines are twice as efficient',
        cost: 2e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 40 }
        }
    },
    {
        id: 'chessMachinesUpgrade005',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit V',
        description: 'Chess Machines are twice as efficient',
        cost: 5e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 50 }
        }
    },
    {
        id: 'chessMachinesUpgrade006',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit VI',
        description: 'Chess Machines are twice as efficient',
        cost: 5e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 60 }
        }
    },
    {
        id: 'chessMachinesUpgrade007',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit VII',
        description: 'Chess Machines are twice as efficient',
        cost: 2e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines:70 }
        }
    },
    {
        id: 'chessMachinesUpgrade008',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit VIII',
        description: 'Chess Machines are twice as efficient',
        cost: 5e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 80 }
        }
    },
    {
        id: 'chessMachinesUpgrade009',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit IX',
        description: 'Chess Machines are twice as efficient',
        cost: 5e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 90 }
        }
    },
    {
        id: 'chessMachinesUpgrade010',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit X',
        description: 'Chess Machines are twice as efficient',
        cost: 2e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 100 }
        }
    },
    {
        id: 'chessMachinesUpgrade011',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XI',
        description: 'Chess Machines are twice as efficient',
        cost: 5e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 110 }
        }
    },
    {
        id: 'chessMachinesUpgrade012',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XII',
        description: 'Chess Machines are twice as efficient',
        cost: 1e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 120 }
        }
    },
    {
        id: 'chessMachinesUpgrade013',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XIII',
        description: 'Chess Machines are twice as efficient',
        cost: 2e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 130 }
        }
    },
    {
        id: 'chessMachinesUpgrade014',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XIV',
        description: 'Chess Machines are twice as efficient',
        cost: 5e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 140 }
        }
    },
    {
        id: 'chessMachinesUpgrade015',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XV',
        description: 'Chess Machines are twice as efficient',
        cost: 1e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 150 }
        }
    },
    {
        id: 'chessMachinesUpgrade016',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XVI',
        description: 'Chess Machines are twice as efficient',
        cost: 2e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 160 }
        }
    },
    {
        id: 'chessMachinesUpgrade017',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XVII',
        description: 'Chess Machines are twice as efficient',
        cost: 5e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 170 }
        }
    },
    {
        id: 'chessMachinesUpgrade018',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XVIII',
        description: 'Chess Machines are twice as efficient',
        cost: 1e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 180 }
        }
    },
    {
        id: 'chessMachinesUpgrade019',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XIX',
        description: 'Chess Machines are twice as efficient',
        cost: 2e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 190 }
        }
    },
    {
        id: 'chessMachinesUpgrade020',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XX',
        description: 'Chess Machines are twice as efficient',
        cost: 5e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 200 }
        }
    },
    {
        id: 'chessMachinesUpgrade021',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXI',
        description: 'Chess Machines are twice as efficient',
        cost: 1e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 210 }
        }
    },
    {
        id: 'chessMachinesUpgrade022',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXII',
        description: 'Chess Machines are twice as efficient',
        cost: 2e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 220 }
        }
    },
    {
        id: 'chessMachinesUpgrade023',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXIII',
        description: 'Chess Machines are twice as efficient',
        cost: 5e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 230 }
        }
    },
    {
        id: 'chessMachinesUpgrade024',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXIV',
        description: 'Chess Machines are twice as efficient',
        cost: 1e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 240 }
        }
    },
    {
        id: 'chessMachinesUpgrade025',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXV',
        description: 'Chess Machines are twice as efficient',
        cost: 2e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 250 }
        }
    },
    {
        id: 'chessMachinesUpgrade026',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXVI',
        description: 'Chess Machines are twice as efficient',
        cost: 5e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 260 }
        }
    },
    {
        id: 'chessMachinesUpgrade027',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXVII',
        description: 'Chess Machines are twice as efficient',
        cost: 1e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 270 }
        }
    },
    {
        id: 'chessMachinesUpgrade028',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXVIII',
        description: 'Chess Machines are twice as efficient',
        cost: 2e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 280 }
        }
    },
    {
        id: 'chessMachinesUpgrade029',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXIX',
        description: 'Chess Machines are twice as efficient',
        cost: 5e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 290 }
        }
    },
    {
        id: 'chessMachinesUpgrade030',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit XXX',
        description: 'Chess Machines are twice as efficient',
        cost: 1e25,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chessMachines',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chessMachines: 300 }
        }
    }
]

export default chessMachinesUpgrades