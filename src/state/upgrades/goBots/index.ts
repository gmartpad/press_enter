import { type Upgrade } from "@upgrades"

const goBotsUpgrades: Upgrade[] = [
    {
        id: 'goBotsUpgrade001',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons I',
        description: 'Go-Bots are twice as efficient',
        cost: 3_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 10 }
        }
    },
    {
        id: 'goBotsUpgrade002',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons II',
        description: 'Go-Bots are twice as efficient',
        cost: 30_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 20 }
        }
    },
    {
        id: 'goBotsUpgrade003',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons III',
        description: 'Go-Bots are twice as efficient',
        cost:70_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 30 }
        }
    },
    {
        id: 'goBotsUpgrade004',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons IV',
        description: 'Go-Bots are twice as efficient',
        cost: 3_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 40 }
        }
    },
    {
        id: 'goBotsUpgrade005',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons V',
        description: 'Go-Bots are twice as efficient',
        cost: 30_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 50 }
        }
    },
    {
        id: 'goBotsUpgrade006',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons VI',
        description: 'Go-Bots are twice as efficient',
        cost:70_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 60 }
        }
    },
    {
        id: 'goBotsUpgrade007',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons VII',
        description: 'Go-Bots are twice as efficient',
        cost: 3_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots:70 }
        }
    },
    {
        id: 'goBotsUpgrade008',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons VIII',
        description: 'Go-Bots are twice as efficient',
        cost: 30_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 80 }
        }
    },
    {
        id: 'goBotsUpgrade009',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons IX',
        description: 'Go-Bots are twice as efficient',
        cost:70_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 90 }
        }
    },
    {
        id: 'goBotsUpgrade010',
        incrementorId: 'goBots',
        imgSrc: 'goBots/goBotsUpgrade001.png',
        name: 'Private Pro Lessons X',
        description: 'Go-Bots are twice as efficient',
        cost: 3_000_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'goBots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { goBots: 100 }
        }
    },
]

export default goBotsUpgrades