import { type Upgrade } from "@upgrades"

const chatbotsUpgrades: Upgrade[] = [
    {
        id: 'chatbotsUpgrade001',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality I',
        description: 'Chatbots are twice as efficient',
        cost: 30_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 10 }
        }
    },
    {
        id: 'chatbotsUpgrade002',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality II',
        description: 'Chatbots are twice as efficient',
        cost: 70_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 20 }
        }
    },
    {
        id: 'chatbotsUpgrade003',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality III',
        description: 'Chatbots are twice as efficient',
        cost: 3_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 30 }
        }
    },
    {
        id: 'chatbotsUpgrade004',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality IV',
        description: 'Chatbots are twice as efficient',
        cost: 30_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 40 }
        }
    },
    {
        id: 'chatbotsUpgrade005',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality V',
        description: 'Chatbots are twice as efficient',
        cost: 70_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 50 }
        }
    },
    {
        id: 'chatbotsUpgrade006',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality VI',
        description: 'Chatbots are twice as efficient',
        cost: 3_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 60 }
        }
    },
    {
        id: 'chatbotsUpgrade007',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality VII',
        description: 'Chatbots are twice as efficient',
        cost: 30_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots:70 }
        }
    },
    {
        id: 'chatbotsUpgrade008',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality VIII',
        description: 'Chatbots are twice as efficient',
        cost: 70_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 80 }
        }
    },
    {
        id: 'chatbotsUpgrade009',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality IX',
        description: 'Chatbots are twice as efficient',
        cost: 3_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 90 }
        }
    },
    {
        id: 'chatbotsUpgrade010',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality X',
        description: 'Chatbots are twice as efficient',
        cost: 30_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 100 }
        }
    },
]

export default chatbotsUpgrades