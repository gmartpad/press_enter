import { Upgrade } from "@upgrades"

const llmsUpgrades: Upgrade[] = [
    {
        id: 'llmsUpgrade001',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding I',
        description: 'LLMs are twice as efficient',
        cost: 1.2e17,
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
        cost: 1.2e18,
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
        cost: 1.2e19,
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
        cost: 1.2e20,
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
        cost: 1.2e21,
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
        cost: 1.2e22,
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
        cost: 1.2e23,
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
        cost: 1.2e24,
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
        cost: 1.2e25,
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
        cost: 1.2e26,
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
    {
        id: 'llmsUpgrade011',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XI',
        description: 'LLMs are twice as efficient',
        cost: 1.2e27,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 110 }
        }
    },
    {
        id: 'llmsUpgrade012',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 120 }
        }
    },
    {
        id: 'llmsUpgrade013',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XIII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 130 }
        }
    },
    {
        id: 'llmsUpgrade014',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XIV',
        description: 'LLMs are twice as efficient',
        cost: 1.2e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 140 }
        }
    },
    {
        id: 'llmsUpgrade015',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XV',
        description: 'LLMs are twice as efficient',
        cost: 1.2e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 150 }
        }
    },
    {
        id: 'llmsUpgrade016',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XVI',
        description: 'LLMs are twice as efficient',
        cost: 1.2e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 160 }
        }
    },
    {
        id: 'llmsUpgrade017',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XVII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 170 }
        }
    },
    {
        id: 'llmsUpgrade018',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XVIII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e34,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 180 }
        }
    },
    {
        id: 'llmsUpgrade019',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XIX',
        description: 'LLMs are twice as efficient',
        cost: 1.2e35,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 190 }
        }
    },
    {
        id: 'llmsUpgrade020',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XX',
        description: 'LLMs are twice as efficient',
        cost: 1.2e36,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 200 }
        }
    },
    {
        id: 'llmsUpgrade021',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXI',
        description: 'LLMs are twice as efficient',
        cost: 1.2e37,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 210 }
        }
    },
    {
        id: 'llmsUpgrade022',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e38,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 220 }
        }
    },
    {
        id: 'llmsUpgrade023',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXIII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e39,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 230 }
        }
    },
    {
        id: 'llmsUpgrade024',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXIV',
        description: 'LLMs are twice as efficient',
        cost: 1.2e40,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 240 }
        }
    },
    {
        id: 'llmsUpgrade025',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXV',
        description: 'LLMs are twice as efficient',
        cost: 1.2e41,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 250 }
        }
    },
    {
        id: 'llmsUpgrade026',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXVI',
        description: 'LLMs are twice as efficient',
        cost: 1.2e42,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 260 }
        }
    },
    {
        id: 'llmsUpgrade027',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXVII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e43,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 270 }
        }
    },
    {
        id: 'llmsUpgrade028',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXVIII',
        description: 'LLMs are twice as efficient',
        cost: 1.2e44,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 280 }
        }
    },
    {
        id: 'llmsUpgrade029',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXIX',
        description: 'LLMs are twice as efficient',
        cost: 1.2e45,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 290 }
        }
    },
    {
        id: 'llmsUpgrade030',
        incrementorId: 'llms',
        imgSrc: 'llms/llmsUpgrade001.png',
        name: 'File Grounding XXX',
        description: 'LLMs are twice as efficient',
        cost: 1.2e46,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: 'llms',
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: { llms: 300 }
        }
    }
]

export default llmsUpgrades