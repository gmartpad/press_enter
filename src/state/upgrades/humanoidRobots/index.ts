import { type Upgrade } from "@upgrades"

const humanoidRobotsUpgrades: Upgrade[] = [
    {
        id: 'humanoidRobotsUpgrade001',
        incrementorId: 'humanoidRobots',
        imgSrc: 'humanoidRobots/humanoidRobotsUpgrade001.png',
        name: 'Small Talk Acquired I',
        description: 'Humanoid Robots are twice as efficient',
        cost: 3_000_000_000,
        purchased: false,
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
        cost: 30_000_000_000,
        purchased: false,
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
        cost:70_000_000_000,
        purchased: false,
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
        cost: 3_000_000_000_000,
        purchased: false,
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
        cost: 30_000_000_000_000,
        purchased: false,
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
        cost:70_000_000_000_000,
        purchased: false,
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
        cost: 3_000_000_000_000_000,
        purchased: false,
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
        cost: 30_000_000_000_000_000,
        purchased: false,
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
        cost:70_000_000_000_000_000,
        purchased: false,
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
        cost: 3_000_000_000_000_000_000,
        purchased: false,
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
]

export default humanoidRobotsUpgrades