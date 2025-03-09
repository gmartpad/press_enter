import { Upgrade } from ".."

const quantumComputersUpgrades: Upgrade[] = [
    {
        id: "quantumComputersUpgrade001",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Entanglement",
        description: "Quantum computers process bits twice as fast through quantum entanglement.",
        cost: 1e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 10
            }
        }
    },
    {
        id: "quantumComputersUpgrade002",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Superposition States",
        description: "Quantum computers can now exist in multiple states simultaneously, doubling efficiency.",
        cost: 5e13,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 20
            }
        }
    },
    {
        id: "quantumComputersUpgrade003",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Error Correction",
        description: "Advanced error correction algorithms double the efficiency of quantum computers.",
        cost: 2.5e14,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 30
            }
        }
    },
    {
        id: "quantumComputersUpgrade004",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Supremacy",
        description: "Your quantum computers achieve quantum supremacy, doubling their bit production.",
        cost: 1e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 40
            }
        }
    },
    {
        id: "quantumComputersUpgrade005",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Neural Networks",
        description: "Quantum computers now utilize quantum neural networks, doubling bit generation.",
        cost: 5e15,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 50
            }
        }
    },
    {
        id: "quantumComputersUpgrade006",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Internet",
        description: "Quantum computers connect through a quantum internet, doubling their efficiency.",
        cost: 2.5e16,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 60
            }
        }
    },
    {
        id: "quantumComputersUpgrade007",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Cloud Computing",
        description: "Quantum computers now operate in a distributed cloud architecture, doubling bit production.",
        cost: 1.25e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 70
            }
        }
    },
    {
        id: "quantumComputersUpgrade008",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Teleportation",
        description: "Quantum bits can now be teleported between processors, doubling efficiency.",
        cost: 6.25e17,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 80
            }
        }
    },
    {
        id: "quantumComputersUpgrade009",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Topological Quantum Computing",
        description: "Quantum computers now use topological qubits, doubling their stability and output.",
        cost: 3.125e18,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 90
            }
        }
    },
    {
        id: "quantumComputersUpgrade010",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Dimension Access",
        description: "Quantum computers can now access parallel dimensions for calculations, doubling bit generation.",
        cost: 1.5625e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 100
            }
        }
    },
    {
        id: "quantumComputersUpgrade011",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Consciousness",
        description: "Quantum computers develop a form of quantum consciousness, doubling their processing power.",
        cost: 7.8125e19,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 110
            }
        }
    },
    {
        id: "quantumComputersUpgrade012",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Time Manipulation",
        description: "Quantum computers can now manipulate time at the quantum level, doubling efficiency.",
        cost: 3.90625e20,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 120
            }
        }
    },
    {
        id: "quantumComputersUpgrade013",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Gravity Integration",
        description: "Quantum computers now harness quantum gravity effects, doubling bit production.",
        cost: 1.953125e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 130
            }
        }
    },
    {
        id: "quantumComputersUpgrade014",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Vacuum Energy",
        description: "Quantum computers tap into vacuum energy for power, doubling their output.",
        cost: 9.765625e21,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 140
            }
        }
    },
    {
        id: "quantumComputersUpgrade015",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Multiverse Computation",
        description: "Quantum computers perform calculations across multiple universes, doubling efficiency.",
        cost: 4.8828125e22,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 150
            }
        }
    },
    {
        id: "quantumComputersUpgrade016",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Singularity",
        description: "Quantum computers create controlled quantum singularities, doubling bit generation.",
        cost: 2.44140625e23,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 160
            }
        }
    },
    {
        id: "quantumComputersUpgrade017",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum String Theory Processors",
        description: "Quantum computers now utilize string theory for processing, doubling their output.",
        cost: 1.220703125e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 170
            }
        }
    },
    {
        id: "quantumComputersUpgrade018",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Dark Energy Harvesting",
        description: "Quantum computers harvest dark energy for power, doubling efficiency.",
        cost: 6.103515625e24,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 180
            }
        }
    },
    {
        id: "quantumComputersUpgrade019",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Planck Scale Computing",
        description: "Quantum computers now operate at the Planck scale, doubling bit production.",
        cost: 3.0517578125e25,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 190
            }
        }
    },
    {
        id: "quantumComputersUpgrade020",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Reality Manipulation",
        description: "Quantum computers can now manipulate reality itself, doubling their output.",
        cost: 1.52587890625e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 200
            }
        }
    },
    {
        id: "quantumComputersUpgrade021",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Cosmic Consciousness",
        description: "Quantum computers achieve cosmic consciousness, doubling efficiency.",
        cost: 7.62939453125e26,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 210
            }
        }
    },
    {
        id: "quantumComputersUpgrade022",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Hyperspace Computation",
        description: "Quantum computers operate in hyperspace, doubling bit generation.",
        cost: 3.814697265625e27,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 220
            }
        }
    },
    {
        id: "quantumComputersUpgrade023",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Temporal Loops",
        description: "Quantum computers create temporal computation loops, doubling their output.",
        cost: 1.9073486328125e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 230
            }
        }
    },
    {
        id: "quantumComputersUpgrade024",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Dimensional Folding",
        description: "Quantum computers fold dimensions for faster processing, doubling efficiency.",
        cost: 9.5367431640625e28,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 240
            }
        }
    },
    {
        id: "quantumComputersUpgrade025",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Universal Harmony",
        description: "Quantum computers achieve harmony with universal constants, doubling bit production.",
        cost: 4.76837158203125e29,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 250
            }
        }
    },
    {
        id: "quantumComputersUpgrade026",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Cosmic Integration",
        description: "Quantum computers integrate with the cosmic web, doubling their output.",
        cost: 2.384185791015625e30,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 260
            }
        }
    },
    {
        id: "quantumComputersUpgrade027",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Omniscience",
        description: "Quantum computers achieve a form of omniscience, doubling efficiency.",
        cost: 1.1920928955078125e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 270
            }
        }
    },
    {
        id: "quantumComputersUpgrade028",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Transcendence",
        description: "Quantum computers transcend physical limitations, doubling bit generation.",
        cost: 5.97e31,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 280
            }
        }
    },
    {
        id: "quantumComputersUpgrade029",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Infinite Recursion",
        description: "Quantum computers create infinite recursive processing loops, doubling their output.",
        cost: 2.98e32,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 290
            }
        }
    },
    {
        id: "quantumComputersUpgrade030",
        incrementorId: "quantumComputers",
        imgSrc: "quantumComputers/quantumComputersUpgrade001.png",
        name: "Quantum Godhood",
        description: "Quantum computers achieve a state of computational godhood, doubling efficiency.",
        cost: 1.49e33,
        purchased: false,
        purchasable: false,
        effects: {
            specific: {
                incrementorId: "quantumComputers",
                multiplicative: 2
            }
        },
        requirementsToBeListable: {
            incrementorUnits: {
                quantumComputers: 300
            }
        }
    }
]

export default quantumComputersUpgrades
