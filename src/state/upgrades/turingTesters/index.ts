import { Upgrade } from "@upgrades"

const turingTestersUpgrades: Upgrade[] = [
    {
        id: 'turingTestersUpgrade001',
        incrementorId: 'turingTesters',
        imgSrc: 'turingTesters/turingTestersUpgrade001.png',
        name: 'Caffeinated Testers I',
        description: 'Turing Testers are twice as efficient',
        cost:70,
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
        cost:700,
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
        cost: 30_000,
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
        cost: 1_000_000,
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
        cost: 10_000_000,
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
        cost: 30_000_000,
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
        cost: 1_000_000_000,
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
        cost: 10_000_000_000,
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
        cost: 30_000_000_000,
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
        cost: 1_000_000_000_000,
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
]

export default turingTestersUpgrades