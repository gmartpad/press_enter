import { Upgrade } from "@upgrades"

const llmsUpgrades: Upgrade[] = [
    {
        id: 'llmsUpgrade001',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding I',
        description: 'LLMs are twice as efficient',
        cost: 120_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 10 }
        }
    },
    {
        id: 'llmsUpgrade002',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding II',
        description: 'LLMs are twice as efficient',
        cost: 1_200_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 20 }
        }
    },
    {
        id: 'llmsUpgrade003',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding III',
        description: 'LLMs are twice as efficient',
        cost: 12_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 30 }
        }
    },
    {
        id: 'llmsUpgrade004',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding IV',
        description: 'LLMs are twice as efficient',
        cost: 120_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 40 }
        }
    },
    {
        id: 'llmsUpgrade005',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding V',
        description: 'LLMs are twice as efficient',
        cost: 1_200_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 50 }
        }
    },
    {
        id: 'llmsUpgrade006',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding VI',
        description: 'LLMs are twice as efficient',
        cost: 12_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 60 }
        }
    },
    {
        id: 'llmsUpgrade007',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding VII',
        description: 'LLMs are twice as efficient',
        cost: 120_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms:70 }
        }
    },
    {
        id: 'llmsUpgrade008',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding VIII',
        description: 'LLMs are twice as efficient',
        cost: 1_200_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 80 }
        }
    },
    {
        id: 'llmsUpgrade009',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding IX',
        description: 'LLMs are twice as efficient',
        cost: 12_000_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 90 }
        }
    },
    {
        id: 'llmsUpgrade010',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding X',
        description: 'LLMs are twice as efficient',
        cost: 120_000_000_000_000_000_000_000_000,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 100 }
        }
    },
]

export default llmsUpgrades