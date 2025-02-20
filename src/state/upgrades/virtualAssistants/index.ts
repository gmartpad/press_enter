import { Upgrade } from "@upgrades"

const virtualAssistantsUpgrades: Upgrade[] = [
    {
        id: 'virtualAssistantsUpgrade001',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling I',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e15,
        purchased: false,
        purchasable: false,
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
        cost: 4e16,
        purchased: false,
        purchasable: false,
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
        cost: 9e16,
        purchased: false,
        purchasable: false,
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
        cost: 4e18,
        purchased: false,
        purchasable: false,
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
        cost: 4e19,
        purchased: false,
        purchasable: false,
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
        cost: 9e19,
        purchased: false,
        purchasable: false,
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
        cost: 4e21,
        purchased: false,
        purchasable: false,
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
        cost: 4e22,
        purchased: false,
        purchasable: false,
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
        cost: 9e22,
        purchased: false,
        purchasable: false,
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
        name: 'Automatic Meeting Scheduling X',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e23,
        purchased: false,
        purchasable: false,
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
    {
        id: 'virtualAssistantsUpgrade011',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XI',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 110 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade012',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 120 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade013',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XIII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 130 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade014',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XIV',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e25,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 140 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade015',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XV',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 150 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade016',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XVI',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 160 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade017',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XVII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e27,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants:170 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade018',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XVIII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 180 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade019',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XIX',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 190 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade020',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XX',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 200 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade021',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXI',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 210 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade022',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 220 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade023',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXIII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 230 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade024',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXIV',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 240 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade025',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXV',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 250 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade026',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXVI',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 260 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade027',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXVII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 270 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade028',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXVIII',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e34,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 280 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade029',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXIX',
        description: 'Virtual Assistants are twice as efficient',
        cost: 9e34,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 290 }
        }
    },
    {
        id: 'virtualAssistantsUpgrade030',
        incrementorId: 'virtualAssistants',
        imgSrc: 'virtualAssistants/virtualAssistantsUpgrade001.png',
        name: 'Automatic Meeting Scheduling XXX',
        description: 'Virtual Assistants are twice as efficient',
        cost: 4e35,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'virtualAssistants',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { virtualAssistants: 300 }
        }
    }
]

export default virtualAssistantsUpgrades