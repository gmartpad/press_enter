import { type Upgrade } from "@upgrades"

const chatbotsUpgrades: Upgrade[] = [
    {
        id: 'chatbotsUpgrade001',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality I',
        description: 'Chatbots are twice as efficient',
        cost: 3e8,
        purchased: false,
        purchasable: false,
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
        cost: 7e8,
        purchased: false,
        purchasable: false,
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
        cost: 3e9,
        purchased: false,
        purchasable: false,
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
        cost: 3e10,
        purchased: false,
        purchasable: false,
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
        cost: 7e10,
        purchased: false,
        purchasable: false,
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
        cost: 3e12,
        purchased: false,
        purchasable: false,
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
        cost: 3e13,
        purchased: false,
        purchasable: false,
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
        cost: 7e13,
        purchased: false,
        purchasable: false,
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
        cost: 3e15,
        purchased: false,
        purchasable: false,
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
        cost: 3e16,
        purchased: false,
        purchasable: false,
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
    {
        id: 'chatbotsUpgrade011',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XI',
        description: 'Chatbots are twice as efficient',
        cost: 3e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 110 }
        }
    },
    {
        id: 'chatbotsUpgrade012',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XII',
        description: 'Chatbots are twice as efficient',
        cost: 7e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 120 }
        }
    },
    {
        id: 'chatbotsUpgrade013',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XIII',
        description: 'Chatbots are twice as efficient',
        cost: 1.5e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 130 }
        }
    },
    {
        id: 'chatbotsUpgrade014',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XIV',
        description: 'Chatbots are twice as efficient',
        cost: 3e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 140 }
        }
    },
    {
        id: 'chatbotsUpgrade015',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XV',
        description: 'Chatbots are twice as efficient',
        cost: 7e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 150 }
        }
    },
    {
        id: 'chatbotsUpgrade016',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XVI',
        description: 'Chatbots are twice as efficient',
        cost: 1.5e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 160 }
        }
    },
    {
        id: 'chatbotsUpgrade017',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XVII',
        description: 'Chatbots are twice as efficient',
        cost: 3e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 170 }
        }
    },
    {
        id: 'chatbotsUpgrade018',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XVIII',
        description: 'Chatbots are twice as efficient',
        cost: 7e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 180 }
        }
    },
    {
        id: 'chatbotsUpgrade019',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XIX',
        description: 'Chatbots are twice as efficient',
        cost: 1.5e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 190 }
        }
    },
    {
        id: 'chatbotsUpgrade020',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XX',
        description: 'Chatbots are twice as efficient',
        cost: 3e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 200 }
        }
    },
    {
        id: 'chatbotsUpgrade021',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXI',
        description: 'Chatbots are twice as efficient',
        cost: 7e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 210 }
        }
    },
    {
        id: 'chatbotsUpgrade022',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXII',
        description: 'Chatbots are twice as efficient',
        cost: 1.5e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 220 }
        }
    },
    {
        id: 'chatbotsUpgrade023',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXIII',
        description: 'Chatbots are twice as efficient',
        cost: 3e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 230 }
        }
    },
    {
        id: 'chatbotsUpgrade024',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXIV',
        description: 'Chatbots are twice as efficient',
        cost: 7e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 240 }
        }
    },
    {
        id: 'chatbotsUpgrade025',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXV',
        description: 'Chatbots are twice as efficient',
        cost: 1.5e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 250 }
        }
    },
    {
        id: 'chatbotsUpgrade026',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXVI',
        description: 'Chatbots are twice as efficient',
        cost: 3e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 260 }
        }
    },
    {
        id: 'chatbotsUpgrade027',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXVII',
        description: 'Chatbots are twice as efficient',
        cost: 7e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 270 }
        }
    },
    {
        id: 'chatbotsUpgrade028',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXVIII',
        description: 'Chatbots are twice as efficient',
        cost: 1.5e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 280 }
        }
    },
    {
        id: 'chatbotsUpgrade029',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXIX',
        description: 'Chatbots are twice as efficient',
        cost: 3e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 290 }
        }
    },
    {
        id: 'chatbotsUpgrade030',
        incrementorId: 'chatbots',
        imgSrc: 'chatbots/chatbotsUpgrade001.png',
        name: 'Friendlier Personality XXX',
        description: 'Chatbots are twice as efficient',
        cost: 7e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'chatbots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { chatbots: 300 }
        }
    }
]

export default chatbotsUpgrades