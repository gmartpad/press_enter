import { type Upgrade } from "@upgrades"

const chessMachinesUpgrades: Upgrade[] = [
    {
        id: 'chessMachinesUpgrade001',
        incrementorId: 'chessMachines',
        imgSrc: 'chessMachines/chessMachinesUpgrade001.png',
        name: 'Blitz Knight Gambit I',
        description: 'Chess Machines are twice as efficient',
        cost: 20_000_000_000,
        purchased: false,
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
        cost: 50_000_000_000,
        purchased: false,
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
        cost: 5_000_000_000_000,
        purchased: false,
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
        cost: 20_000_000_000_000,
        purchased: false,
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
        cost: 50_000_000_000_000,
        purchased: false,
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
        cost: 5_000_000_000_000_000,
        purchased: false,
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
        cost: 20_000_000_000_000_000,
        purchased: false,
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
        cost: 50_000_000_000_000_000,
        purchased: false,
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
        cost: 5_000_000_000_000_000_000,
        purchased: false,
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
        cost: 20_000_000_000_000_000_000,
        purchased: false,
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
]

export default chessMachinesUpgrades