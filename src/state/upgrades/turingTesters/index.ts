import { Upgrade } from "@upgrades"

const turingTestersUpgrades: Upgrade[] = [
    {
        id: 'turingTestersUpgrade001',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers I',
        description: 'Turing Testers are twice as efficient',
        cost: 7e1,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 10 }
        }
    },
    {
        id: 'turingTestersUpgrade002',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers II',
        description: 'Turing Testers are twice as efficient',
        cost: 7e2,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 20 }
        }
    },
    {
        id: 'turingTestersUpgrade003',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers III',
        description: 'Turing Testers are twice as efficient',
        cost: 3e4,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 30 }
        }
    },
    {
        id: 'turingTestersUpgrade004',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers IV',
        description: 'Turing Testers are twice as efficient',
        cost: 1e6,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 40 }
        }
    },
    {
        id: 'turingTestersUpgrade005',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers V',
        description: 'Turing Testers are twice as efficient',
        cost: 1e7,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 50 }
        }
    },
    {
        id: 'turingTestersUpgrade006',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers VI',
        description: 'Turing Testers are twice as efficient',
        cost: 3e7,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 60 }
        }
    },
    {
        id: 'turingTestersUpgrade007',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers VII',
        description: 'Turing Testers are twice as efficient',
        cost: 1e9,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters:70 }
        }
    },
    {
        id: 'turingTestersUpgrade008',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers VIII',
        description: 'Turing Testers are twice as efficient',
        cost: 1e10,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 80 }
        }
    },
    {
        id: 'turingTestersUpgrade009',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers IX',
        description: 'Turing Testers are twice as efficient',
        cost: 3e10,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 90 }
        }
    },
    {
        id: 'turingTestersUpgrade010',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers X',
        description: 'Turing Testers are twice as efficient',
        cost: 1e11,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 100 }
        }
    },
    {
        id: 'turingTestersUpgrade011',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XI',
        description: 'Turing Testers are twice as efficient',
        cost: 3e11,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 110 }
        }
    },
    {
        id: 'turingTestersUpgrade012',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XII',
        description: 'Turing Testers are twice as efficient',
        cost: 1e12,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 120 }
        }
    },
    {
        id: 'turingTestersUpgrade013',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XIII',
        description: 'Turing Testers are twice as efficient',
        cost: 3e12,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 130 }
        }
    },
    {
        id: 'turingTestersUpgrade014',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XIV',
        description: 'Turing Testers are twice as efficient',
        cost: 1e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 140 }
        }
    },
    {
        id: 'turingTestersUpgrade015',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XV',
        description: 'Turing Testers are twice as efficient',
        cost: 3e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 150 }
        }
    },
    {
        id: 'turingTestersUpgrade016',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XVI',
        description: 'Turing Testers are twice as efficient',
        cost: 1e14,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 160 }
        }
    },
    {
        id: 'turingTestersUpgrade017',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XVII',
        description: 'Turing Testers are twice as efficient',
        cost: 3e14,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 170 }
        }
    },
    {
        id: 'turingTestersUpgrade018',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XVIII',
        description: 'Turing Testers are twice as efficient',
        cost: 1e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 180 }
        }
    },
    {
        id: 'turingTestersUpgrade019',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XIX',
        description: 'Turing Testers are twice as efficient',
        cost: 3e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 190 }
        }
    },
    {
        id: 'turingTestersUpgrade020',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XX',
        description: 'Turing Testers are twice as efficient',
        cost: 1e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 200 }
        }
    },
    {
        id: 'turingTestersUpgrade021',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXI',
        description: 'Turing Testers are twice as efficient',
        cost: 3e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 210 }
        }
    },
    {
        id: 'turingTestersUpgrade022',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXII',
        description: 'Turing Testers are twice as efficient',
        cost: 1e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 220 }
        }
    },
    {
        id: 'turingTestersUpgrade023',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXIII',
        description: 'Turing Testers are twice as efficient',
        cost: 3e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 230 }
        }
    },
    {
        id: 'turingTestersUpgrade024',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXIV',
        description: 'Turing Testers are twice as efficient',
        cost: 1e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 240 }
        }
    },
    {
        id: 'turingTestersUpgrade025',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXV',
        description: 'Turing Testers are twice as efficient',
        cost: 3e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 250 }
        }
    },
    {
        id: 'turingTestersUpgrade026',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXVI',
        description: 'Turing Testers are twice as efficient',
        cost: 1e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 260 }
        }
    },
    {
        id: 'turingTestersUpgrade027',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXVII',
        description: 'Turing Testers are twice as efficient',
        cost: 3e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 270 }
        }
    },
    {
        id: 'turingTestersUpgrade028',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXVIII',
        description: 'Turing Testers are twice as efficient',
        cost: 1e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 280 }
        }
    },
    {
        id: 'turingTestersUpgrade029',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXIX',
        description: 'Turing Testers are twice as efficient',
        cost: 3e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 290 }
        }
    },
    {
        id: 'turingTestersUpgrade030',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers XXX',
        description: 'Turing Testers are twice as efficient',
        cost: 1e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'turingTesters',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { turingTesters: 300 }
        }
    }
]

export default turingTestersUpgrades