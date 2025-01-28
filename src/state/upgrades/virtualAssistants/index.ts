import { Upgrade } from "@upgrades"

const virtualAssistantsUpgrades: Upgrade[] = [
    {
        id: 'virtualAssistantsUpgrade001',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling I',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 10 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade002',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling II',
        description: 'Virtual Assistants are twice as efficient',
        cost: 40_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 20 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade003',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling III',
        description: 'Virtual Assistants are twice as efficient',
        cost: 90_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 30 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade004',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling IV',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 40 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade005',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling V',
        description: 'Virtual Assistants are twice as efficient',
        cost: 40_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 50 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade006',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling VI',
        description: 'Virtual Assistants are twice as efficient',
        cost: 90_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 60 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade007',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling VII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants:70 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade008',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling VIII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 40_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 80 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade009',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling IX',
        description: 'Virtual Assistants are twice as efficient',
        cost: 90_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 90 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade010',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling IX',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4_000_000_000_000_000_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 100 }
        }
    },
]

export default virtualAssistantsUpgrades