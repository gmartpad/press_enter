import { Upgrade } from "@upgrades"

const musicBotsUpgrades: Upgrade[] = [
    {
        id: 'musicBotsUpgrade001',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire I',
        description: 'Music Bots are twice as efficient',
        cost: 50_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 10 }
        }
    },
    {
        id: 'musicBotsUpgrade002',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire II',
        description: 'Music Bots are twice as efficient',
        cost: 2_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 20 }
        }
    },
    {
        id: 'musicBotsUpgrade003',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire III',
        description: 'Music Bots are twice as efficient',
        cost: 20_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 30 }
        }
    },
    {
        id: 'musicBotsUpgrade004',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire IV',
        description: 'Music Bots are twice as efficient',
        cost: 50_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 40 }
        }
    },
    {
        id: 'musicBotsUpgrade005',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire V',
        description: 'Music Bots are twice as efficient',
        cost: 2_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 50 }
        }
    },
    {
        id: 'musicBotsUpgrade006',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire VI',
        description: 'Music Bots are twice as efficient',
        cost: 20_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 60 }
        }
    },
    {
        id: 'musicBotsUpgrade007',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire VII',
        description: 'Music Bots are twice as efficient',
        cost: 50_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots:70 }
        }
    },
    {
        id: 'musicBotsUpgrade008',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire VIII',
        description: 'Music Bots are twice as efficient',
        cost: 2_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 80 }
        }
    },
    {
        id: 'musicBotsUpgrade009',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire IX',
        description: 'Music Bots are twice as efficient',
        cost: 20_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 90 }
        }
    },
    {
        id: 'musicBotsUpgrade010',
        incrementorId: 'musicBots',
        imgSrc: 'musicBots/musicBotsUpgrade001.png',
        name: 'Dubstep Repertoire X',
        description: 'Music Bots are twice as efficient',
        cost: 50_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'musicBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { musicBots: 100 }
        }
    },
]

export default musicBotsUpgrades