import { type Upgrade } from "@upgrades"

const autonomousCarsUpgrades: Upgrade[] = [
    {
        id: 'autonomousCarsUpgrade001',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking I',
        description: 'Autonomous Cars are twice as efficient',
        cost: 10_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 10 }
        }
    },
    {
        id: 'autonomousCarsUpgrade002',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking II',
        description: 'Autonomous Cars are twice as efficient',
        cost: 30_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 20 }
        }
    },
    {
        id: 'autonomousCarsUpgrade003',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking III',
        description: 'Autonomous Cars are twice as efficient',
        cost: 1_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 30 }
        }
    },
    {
        id: 'autonomousCarsUpgrade004',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking IV',
        description: 'Autonomous Cars are twice as efficient',
        cost: 10_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 40 }
        }
    },
    {
        id: 'autonomousCarsUpgrade005',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking V',
        description: 'Autonomous Cars are twice as efficient',
        cost: 30_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 50 }
        }
    },
    {
        id: 'autonomousCarsUpgrade006',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking VI',
        description: 'Autonomous Cars are twice as efficient',
        cost: 1_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 60 }
        }
    },
    {
        id: 'autonomousCarsUpgrade007',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking VII',
        description: 'Autonomous Cars are twice as efficient',
        cost: 10_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars:70 }
        }
    },
    {
        id: 'autonomousCarsUpgrade008',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking VIII',
        description: 'Autonomous Cars are twice as efficient',
        cost: 30_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 80 }
        }
    },
    {
        id: 'autonomousCarsUpgrade009',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking IX',
        description: 'Autonomous Cars are twice as efficient',
        cost: 1_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 90 }
        }
    },
    {
        id: 'autonomousCarsUpgrade010',
        incrementorId: 'autonomousCars',
        imgSrc: 'autonomousCars/autonomousCarsUpgrade001.png',
        name: 'Middle-Finger Inducing Overtaking X',
        description: 'Autonomous Cars are twice as efficient',
        cost: 10_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'autonomousCars',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { autonomousCars: 100 }
        }
    },
]

export default autonomousCarsUpgrades