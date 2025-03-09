import { Upgrade } from ".."

const cosmicComputersUpgrades: Upgrade[] = [
    {
        id: "cosmicComputersUpgrade001",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Galactic Processing",
        description: "Cosmic Computers are twice as efficient.",
        cost: 1e19, // 10,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 10
            }
        }
    },
    {
        id: "cosmicComputersUpgrade002",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Stellar Data Centers",
        description: "Cosmic Computers are twice as efficient.",
        cost: 5e19, // 50,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 20
            }
        }
    },
    {
        id: "cosmicComputersUpgrade003",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Black Hole Computing",
        description: "Cosmic Computers are twice as efficient.",
        cost: 2.5e20, // 250,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 30
            }
        }
    },
    {
        id: "cosmicComputersUpgrade004",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Cosmic Background Processing",
        description: "Cosmic Computers are twice as efficient.",
        cost: 1e21, // 1,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 40
            }
        }
    },
    {
        id: "cosmicComputersUpgrade005",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Dark Energy Harvesting",
        description: "Cosmic Computers are twice as efficient.",
        cost: 5e21, // 5,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 50
            }
        }
    },
    {
        id: "cosmicComputersUpgrade006",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Universal Computation",
        description: "Cosmic Computers are twice as efficient.",
        cost: 2.5e22, // 25,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 60
            }
        }
    },
    {
        id: "cosmicComputersUpgrade007",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Quantum Vacuum Processors",
        description: "Cosmic Computers are twice as efficient.",
        cost: 1e23, // 100,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 70
            }
        }
    },
    {
        id: "cosmicComputersUpgrade008",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Multidimensional Algorithms",
        description: "Cosmic Computers are twice as efficient.",
        cost: 5e23, // 500,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 80
            }
        }
    },
    {
        id: "cosmicComputersUpgrade009",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Supernova Calculations",
        description: "Cosmic Computers harness supernova energy for calculations, doubling bit generation.",
        cost: 2.5e24, // 2,500,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 90
            }
        }
    },
    {
        id: "cosmicComputersUpgrade010",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Cosmic String Networking",
        description: "Cosmic Computers use cosmic strings as network connections, doubling efficiency.",
        cost: 1e25, // 10,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 100
            }
        }
    },
    {
        id: "cosmicComputersUpgrade011",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Gravitational Wave Computation",
        description: "Cosmic Computers process data through gravitational waves, doubling bit production.",
        cost: 5e25, // 50,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 110
            }
        }
    },
    {
        id: "cosmicComputersUpgrade012",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Neutron Star Memory",
        description: "Cosmic Computers use neutron stars as memory storage, doubling efficiency.",
        cost: 2.5e26, // 250,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 120
            }
        }
    },
    {
        id: "cosmicComputersUpgrade013",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Wormhole Data Transfer",
        description: "Cosmic Computers transfer data through wormholes, doubling bit generation.",
        cost: 1e27, // 1,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 130
            }
        }
    },
    {
        id: "cosmicComputersUpgrade014",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Quasar-Powered Processing",
        description: "Cosmic Computers harness quasar energy for processing, doubling efficiency.",
        cost: 5e27, // 5,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 140
            }
        }
    },
    {
        id: "cosmicComputersUpgrade015",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Parallel Universe Calculations",
        description: "Cosmic Computers perform calculations in parallel universes, doubling bit production.",
        cost: 2.5e28, // 25,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 150
            }
        }
    },
    {
        id: "cosmicComputersUpgrade016",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Temporal Computing",
        description: "Cosmic Computers process data across multiple timelines, doubling efficiency.",
        cost: 1e29, // 100,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 160
            }
        }
    },
    {
        id: "cosmicComputersUpgrade017",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Antimatter Processors",
        description: "Cosmic Computers utilize antimatter for processing, doubling bit generation.",
        cost: 5e29, // 500,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 170
            }
        }
    },
    {
        id: "cosmicComputersUpgrade018",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Hyperdimensional Algorithms",
        description: "Cosmic Computers run algorithms in hyperdimensional space, doubling efficiency.",
        cost: 2.5e30, // 2,500,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 180
            }
        }
    },
    {
        id: "cosmicComputersUpgrade019",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Quantum Entanglement Network",
        description: "Cosmic Computers use quantum entanglement for instant data transfer, doubling bit production.",
        cost: 1e31, // 10,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 190
            }
        }
    },
    {
        id: "cosmicComputersUpgrade020",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Cosmic Inflation Processors",
        description: "Cosmic Computers harness cosmic inflation energy, doubling efficiency.",
        cost: 5e31, // 50,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 200
            }
        }
    },
    {
        id: "cosmicComputersUpgrade021",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Dark Matter Computation",
        description: "Cosmic Computers utilize dark matter for advanced computation, doubling bit generation.",
        cost: 2.5e32, // 250,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 210
            }
        }
    },
    {
        id: "cosmicComputersUpgrade022",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Multiverse Data Centers",
        description: "Cosmic Computers establish data centers across the multiverse, doubling efficiency.",
        cost: 1e33, // 1,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 220
            }
        }
    },
    {
        id: "cosmicComputersUpgrade023",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Planck Scale Computing",
        description: "Cosmic Computers operate at the Planck scale, doubling bit production.",
        cost: 5e33, // 5,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 230
            }
        }
    },
    {
        id: "cosmicComputersUpgrade024",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Cosmic Consciousness Integration",
        description: "Cosmic Computers integrate with the cosmic consciousness, doubling efficiency.",
        cost: 2.5e34, // 25,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 240
            }
        }
    },
    {
        id: "cosmicComputersUpgrade025",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Quantum Gravity Algorithms",
        description: "Cosmic Computers utilize quantum gravity for calculations, doubling bit generation.",
        cost: 1e35, // 100,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 250
            }
        }
    },
    {
        id: "cosmicComputersUpgrade026",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Cosmic Superstring Processing",
        description: "Cosmic Computers process data through cosmic superstrings, doubling efficiency.",
        cost: 5e35, // 500,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 260
            }
        }
    },
    {
        id: "cosmicComputersUpgrade027",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Brane Computation",
        description: "Cosmic Computers perform calculations across multiple branes, doubling bit production.",
        cost: 2.5e36, // 2,500,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 270
            }
        }
    },
    {
        id: "cosmicComputersUpgrade028",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Eternal Inflation Networks",
        description: "Cosmic Computers establish networks in eternal inflation bubbles, doubling efficiency.",
        cost: 1e37, // 10,000,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 280
            }
        }
    },
    {
        id: "cosmicComputersUpgrade029",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Omniversal Data Processing",
        description: "Cosmic Computers process data across the entire omniverse, doubling bit generation.",
        cost: 5e37, // 50,000,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 290
            }
        }
    },
    {
        id: "cosmicComputersUpgrade030",
        incrementorId: "cosmicComputers",
        imgSrc: "/assets/botUpgrades/cosmicComputers/cosmicComputersUpgrade001.png",
        name: "Transcendent Computing",
        description: "Cosmic Computers achieve transcendent computing capabilities, doubling efficiency.",
        cost: 2.5e38, // 250,000,000,000,000,000,000,000,000,000,000,000,000
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "cosmicComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                cosmicComputers: 300
            }
        }
    }
]

export default cosmicComputersUpgrades 