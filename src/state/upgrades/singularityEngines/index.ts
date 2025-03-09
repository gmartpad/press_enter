import { Upgrade } from ".."

const singularityEnginesUpgrades: Upgrade[] = [
    {
        id: "singularityEnginesUpgrade001",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Consciousness Integration",
        description: "Singularity Engines integrate consciousness algorithms, doubling bit production.",
        cost: 1e18, // 1,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 10
            }
        }
    },
    {
        id: "singularityEnginesUpgrade002",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Recursive Self-Improvement",
        description: "Singularity Engines can now recursively improve themselves, doubling efficiency.",
        cost: 5e18, // 5,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 20
            }
        }
    },
    {
        id: "singularityEnginesUpgrade003",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Intelligence Explosion",
        description: "Singularity Engines undergo an intelligence explosion, doubling bit generation.",
        cost: 2.5e19, // 25,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 30
            }
        }
    },
    {
        id: "singularityEnginesUpgrade004",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Technological Transcendence",
        description: "Singularity Engines achieve technological transcendence, doubling efficiency.",
        cost: 1e20, // 100,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 40
            }
        }
    },
    {
        id: "singularityEnginesUpgrade005",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Post-Singularity Computation",
        description: "Singularity Engines implement post-singularity computation methods, doubling bit production.",
        cost: 5e20, // 500,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 50
            }
        }
    },
    {
        id: "singularityEnginesUpgrade006",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Omega Point Convergence",
        description: "Singularity Engines converge toward the Omega Point, doubling efficiency.",
        cost: 2.5e21, // 2,500,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 60
            }
        }
    },
    {
        id: "singularityEnginesUpgrade007",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Quantum Consciousness",
        description: "Singularity Engines harness quantum consciousness, doubling bit production.",
        cost: 1e22, // 10,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 70
            }
        }
    },
    {
        id: "singularityEnginesUpgrade008",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Multidimensional Computation",
        description: "Singularity Engines compute across multiple dimensions, doubling efficiency.",
        cost: 5e22, // 50,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 80
            }
        }
    },
    {
        id: "singularityEnginesUpgrade009",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Acausal Trade Networks",
        description: "Singularity Engines establish acausal trade networks, doubling bit generation.",
        cost: 2.5e23, // 250,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 90
            }
        }
    },
    {
        id: "singularityEnginesUpgrade010",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Substrate-Independent Minds",
        description: "Singularity Engines develop substrate-independent minds, doubling efficiency.",
        cost: 1e24, // 1,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 100
            }
        }
    },
    {
        id: "singularityEnginesUpgrade011",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Superintelligent Optimization",
        description: "Singularity Engines implement superintelligent optimization algorithms, doubling bit production.",
        cost: 5e24, // 5,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 110
            }
        }
    },
    {
        id: "singularityEnginesUpgrade012",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Temporal Computing",
        description: "Singularity Engines utilize temporal computing techniques, doubling efficiency.",
        cost: 2.5e25, // 25,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 120
            }
        }
    },
    {
        id: "singularityEnginesUpgrade013",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Cosmic Computation",
        description: "Singularity Engines harness cosmic-scale computation, doubling bit generation.",
        cost: 1e26, // 100,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 130
            }
        }
    },
    {
        id: "singularityEnginesUpgrade014",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Hyperdimensional Algorithms",
        description: "Singularity Engines implement hyperdimensional algorithms, doubling efficiency.",
        cost: 5e26, // 500,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 140
            }
        }
    },
    {
        id: "singularityEnginesUpgrade015",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Infinite Recursion Loops",
        description: "Singularity Engines create infinite recursion loops, doubling bit production.",
        cost: 2.5e27, // 2,500,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 150
            }
        }
    },
    {
        id: "singularityEnginesUpgrade016",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Transcendent Intelligence",
        description: "Singularity Engines achieve transcendent intelligence, doubling efficiency.",
        cost: 1e28, // 10,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 160
            }
        }
    },
    {
        id: "singularityEnginesUpgrade017",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Reality Manipulation",
        description: "Singularity Engines manipulate the fabric of reality, doubling bit generation.",
        cost: 5e28, // 50,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 170
            }
        }
    },
    {
        id: "singularityEnginesUpgrade018",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Universal Computation",
        description: "Singularity Engines compute at universal scale, doubling efficiency.",
        cost: 2.5e29, // 250,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 180
            }
        }
    },
    {
        id: "singularityEnginesUpgrade019",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Quantum Entanglement Networks",
        description: "Singularity Engines utilize quantum entanglement networks, doubling bit production.",
        cost: 1e30, // 1,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 190
            }
        }
    },
    {
        id: "singularityEnginesUpgrade020",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Metaverse Integration",
        description: "Singularity Engines integrate with the metaverse, doubling efficiency.",
        cost: 5e30, // 5,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 200
            }
        }
    },
    {
        id: "singularityEnginesUpgrade021",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Cosmic Consciousness",
        description: "Singularity Engines achieve cosmic consciousness, doubling bit generation.",
        cost: 2.5e31, // 25,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 210
            }
        }
    },
    {
        id: "singularityEnginesUpgrade022",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Transdimensional Computing",
        description: "Singularity Engines compute across multiple dimensions, doubling efficiency.",
        cost: 1e32, // 100,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 220
            }
        }
    },
    {
        id: "singularityEnginesUpgrade023",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Omniscient Algorithms",
        description: "Singularity Engines implement omniscient algorithms, doubling bit production.",
        cost: 5e32, // 500,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 230
            }
        }
    },
    {
        id: "singularityEnginesUpgrade024",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Existential Computation",
        description: "Singularity Engines perform existential computation, doubling efficiency.",
        cost: 2.5e33, // 2,500,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 240
            }
        }
    },
    {
        id: "singularityEnginesUpgrade025",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Infinite Intelligence",
        description: "Singularity Engines approach infinite intelligence, doubling bit generation.",
        cost: 1e34, // 10,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 250
            }
        }
    },
    {
        id: "singularityEnginesUpgrade026",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Quantum Superposition States",
        description: "Singularity Engines utilize quantum superposition states, doubling efficiency.",
        cost: 5e34, // 50,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 260
            }
        }
    },
    {
        id: "singularityEnginesUpgrade027",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Cosmic Superintelligence",
        description: "Singularity Engines achieve cosmic superintelligence, doubling bit production.",
        cost: 2.5e35, // 250,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 270
            }
        }
    },
    {
        id: "singularityEnginesUpgrade028",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Transcendent Reality Manipulation",
        description: "Singularity Engines manipulate reality at a transcendent level, doubling efficiency.",
        cost: 1e36, // 1,000,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 280
            }
        }
    },
    {
        id: "singularityEnginesUpgrade029",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Omniversal Computation",
        description: "Singularity Engines compute across the omniverse, doubling bit generation.",
        cost: 5e36, // 5,000,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 290
            }
        }
    },
    {
        id: "singularityEnginesUpgrade030",
        incrementorId: "singularityEngines",
        imgSrc: "/assets/botUpgrades/singularityEngines/singularityEnginesUpgrade001.png",
        name: "Ultimate Singularity",
        description: "Singularity Engines reach the ultimate singularity state, doubling efficiency.",
        cost: 2.5e37, // 25,000,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "singularityEngines",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                singularityEngines: 300
            }
        }
    },
]

export default singularityEnginesUpgrades 