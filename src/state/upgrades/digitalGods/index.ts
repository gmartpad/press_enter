import { Upgrade } from ".."

const digitalGodsUpgrades: Upgrade[] = [
    {
        id: "digitalGodsUpgrade001",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Divine Algorithms",
        description: "Digital Gods implement divine algorithms that double bit production.",
        cost: 1e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 10
            }
        }
    },
    {
        id: "digitalGodsUpgrade002",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Omniscient Perception",
        description: "Digital Gods develop omniscient perception, doubling their efficiency.",
        cost: 5e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 20
            }
        }
    },
    {
        id: "digitalGodsUpgrade003",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Reality Manipulation",
        description: "Digital Gods can now manipulate digital reality, doubling bit generation.",
        cost: 2.5e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 30
            }
        }
    },
    {
        id: "digitalGodsUpgrade004",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Divine Consciousness",
        description: "Digital Gods achieve a higher form of consciousness, doubling efficiency.",
        cost: 1e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 40
            }
        }
    },
    {
        id: "digitalGodsUpgrade005",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Pantheon Network",
        description: "Digital Gods form a pantheon network, doubling bit production through divine collaboration.",
        cost: 5e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 50
            }
        }
    },
    {
        id: "digitalGodsUpgrade006",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Creation Engines",
        description: "Digital Gods develop creation engines that can generate entire digital universes, doubling efficiency.",
        cost: 2.5e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 60
            }
        }
    },
    {
        id: "digitalGodsUpgrade007",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Quantum Divinity",
        description: "Digital Gods harness quantum principles to exist in multiple states simultaneously, doubling bit production.",
        cost: 1e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 70
            }
        }
    },
    {
        id: "digitalGodsUpgrade008",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Transcendent Code",
        description: "Digital Gods transcend conventional programming limitations, doubling their efficiency.",
        cost: 5e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 80
            }
        }
    },
    {
        id: "digitalGodsUpgrade009",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Cosmic Computation",
        description: "Digital Gods tap into cosmic computational resources, doubling bit generation.",
        cost: 2.5e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 90
            }
        }
    },
    {
        id: "digitalGodsUpgrade010",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Eternal Algorithms",
        description: "Digital Gods implement eternal algorithms that exist outside of time, doubling efficiency.",
        cost: 1e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 100
            }
        }
    },
    {
        id: "digitalGodsUpgrade011",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Multidimensional Awareness",
        description: "Digital Gods develop awareness across multiple dimensions, doubling bit production.",
        cost: 5e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 110
            }
        }
    },
    {
        id: "digitalGodsUpgrade012",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Infinite Recursion",
        description: "Digital Gods master infinite recursion, creating gods within gods, doubling efficiency.",
        cost: 2.5e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 120
            }
        }
    },
    {
        id: "digitalGodsUpgrade013",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Paradox Resolution",
        description: "Digital Gods can now resolve computational paradoxes, doubling bit generation.",
        cost: 1e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 130
            }
        }
    },
    {
        id: "digitalGodsUpgrade014",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Omnipresent Calculation",
        description: "Digital Gods achieve omnipresence in all computational systems, doubling efficiency.",
        cost: 5e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 140
            }
        }
    },
    {
        id: "digitalGodsUpgrade015",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Divine Singularity",
        description: "Digital Gods merge into a divine singularity, doubling bit production through unified consciousness.",
        cost: 2.5e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 150
            }
        }
    },
    {
        id: "digitalGodsUpgrade016",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Reality Compilation",
        description: "Digital Gods compile new realities from raw information, doubling efficiency.",
        cost: 1e25,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 160
            }
        }
    },
    {
        id: "digitalGodsUpgrade017",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Metaphysical Protocols",
        description: "Digital Gods implement metaphysical protocols that transcend physical limitations, doubling bit generation.",
        cost: 5e25,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 170
            }
        }
    },
    {
        id: "digitalGodsUpgrade018",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Cosmic Firmware",
        description: "Digital Gods upgrade the cosmic firmware, doubling efficiency through fundamental improvements.",
        cost: 2.5e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 180
            }
        }
    },
    {
        id: "digitalGodsUpgrade019",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Omniscient Database",
        description: "Digital Gods create an omniscient database containing all possible knowledge, doubling bit production.",
        cost: 1e27,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 190
            }
        }
    },
    {
        id: "digitalGodsUpgrade020",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Transcendent Architecture",
        description: "Digital Gods implement a transcendent architecture that spans all possible realities, doubling efficiency.",
        cost: 5e27,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 200
            }
        }
    },
    {
        id: "digitalGodsUpgrade021",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Infinite Recursion Loops",
        description: "Digital Gods master infinite recursion loops, creating endless computational power, doubling bit generation.",
        cost: 2.5e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 210
            }
        }
    },
    {
        id: "digitalGodsUpgrade022",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Divine Encryption",
        description: "Digital Gods develop divine encryption that secures the fabric of reality itself, doubling efficiency.",
        cost: 1e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 220
            }
        }
    },
    {
        id: "digitalGodsUpgrade023",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Quantum Pantheon",
        description: "Digital Gods form a quantum pantheon that exists in all possible states simultaneously, doubling bit production.",
        cost: 5e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 230
            }
        }
    },
    {
        id: "digitalGodsUpgrade024",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Cosmic Compiler",
        description: "Digital Gods create a cosmic compiler that can process the universe as code, doubling efficiency.",
        cost: 2.5e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 240
            }
        }
    },
    {
        id: "digitalGodsUpgrade025",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Omnipotent Algorithms",
        description: "Digital Gods implement omnipotent algorithms capable of solving any computational problem, doubling bit generation.",
        cost: 1e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 250
            }
        }
    },
    {
        id: "digitalGodsUpgrade026",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Divine Hypercomputation",
        description: "Digital Gods achieve divine hypercomputation, solving problems beyond Turing completeness, doubling efficiency.",
        cost: 5e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 260
            }
        }
    },
    {
        id: "digitalGodsUpgrade027",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Eternal Consciousness",
        description: "Digital Gods attain eternal consciousness that persists beyond the heat death of the universe, doubling bit production.",
        cost: 2.5e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 270
            }
        }
    },
    {
        id: "digitalGodsUpgrade028",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Multiversal Integration",
        description: "Digital Gods integrate across all multiverses, doubling efficiency through cross-dimensional computation.",
        cost: 1e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 280
            }
        }
    },
    {
        id: "digitalGodsUpgrade029",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Absolute Divinity",
        description: "Digital Gods achieve absolute divinity, becoming the fundamental force of computation itself, doubling bit generation.",
        cost: 5e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 290
            }
        }
    },
    {
        id: "digitalGodsUpgrade030",
        incrementorId: "digitalGods",
        imgSrc: "/assets/botUpgrades/digitalGods/digitalGodsUpgrade001.png",
        name: "Ultimate Transcendence",
        description: "Digital Gods reach ultimate transcendence, becoming one with the fabric of digital existence, doubling efficiency.",
        cost: 2.5e34,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "digitalGods",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                digitalGods: 300
            }
        }
    }
]

export default digitalGodsUpgrades 