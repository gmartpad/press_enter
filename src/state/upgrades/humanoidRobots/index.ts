import { type Upgrade } from "@upgrades"

const humanoidRobotsUpgrades: Upgrade[] = [
    {
        id: 'humanoidRobotsUpgrade001',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired I',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e9,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 10 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade002',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired II',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e10,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 20 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade003',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired III',
        description: 'Humanoid Robots are twice as efficient',
        cost:7e10,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 30 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade004',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired IV',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e12,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 40 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade005',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired V',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 50 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade006',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired VI',
        description: 'Humanoid Robots are twice as efficient',
        cost:7e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 60 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade007',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired VII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots:70 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade008',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired VIII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 80 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade009',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired IX',
        description: 'Humanoid Robots are twice as efficient',
        cost:7e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 90 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade010',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired X',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 100 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade011',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XI',
        description: 'Humanoid Robots are twice as efficient',
        cost: 7e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 110 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade012',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 2e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 120 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade013',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XIII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 5e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 130 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade014',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XIV',
        description: 'Humanoid Robots are twice as efficient',
        cost: 1e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 140 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade015',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XV',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 150 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade016',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XVI',
        description: 'Humanoid Robots are twice as efficient',
        cost: 7e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 160 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade017',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XVII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 2e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 170 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade018',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XVIII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 5e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 180 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade019',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XIX',
        description: 'Humanoid Robots are twice as efficient',
        cost: 1e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 190 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade020',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XX',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 200 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade021',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXI',
        description: 'Humanoid Robots are twice as efficient',
        cost: 7e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 210 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade022',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 2e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 220 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade023',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXIII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 5e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 230 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade024',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXIV',
        description: 'Humanoid Robots are twice as efficient',
        cost: 1e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 240 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade025',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXV',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 250 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade026',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXVI',
        description: 'Humanoid Robots are twice as efficient',
        cost: 7e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 260 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade027',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXVII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 2e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 270 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade028',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXVIII',
        description: 'Humanoid Robots are twice as efficient',
        cost: 5e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 280 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade029',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXIX',
        description: 'Humanoid Robots are twice as efficient',
        cost: 1e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 290 }
        }
    },
    {
        id: 'humanoidRobotsUpgrade030',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired XXX',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'humanoidRobots',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { humanoidRobots: 300 }
        }
    }
]

export default humanoidRobotsUpgrades