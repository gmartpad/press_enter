import { Upgrade } from "@upgrades"

const pressEnterUpgrades: Upgrade[] = [
    {
        id: 'pressEnterUpgrade001',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers I',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 100,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 100
        }
    },
    {
        id: 'pressEnterUpgrade002',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers II',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 1000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 1000
        }
    },
    {
        id: 'pressEnterUpgrade003',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers III',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 10_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 10_000
        }
    },
    {
        id: 'pressEnterUpgrade004',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers IV',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 100_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 100_000
        }
    },
    {
        id: 'pressEnterUpgrade005',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers V',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 1_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 1_000_000
        }
    },
    {
        id: 'pressEnterUpgrade006',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers VI',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 10_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 10_000_000
        }
    },
    {
        id: 'pressEnterUpgrade007',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers VII',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 100_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 100_000_000
        }
    },
    {
        id: 'pressEnterUpgrade008',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers VIII',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 1_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 1_000_000_000
        }
    },
    {
        id: 'pressEnterUpgrade009',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers IX',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 10_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 10_000_000_000
        }
    },
    {
        id: 'pressEnterUpgrade010',
        incrementorId: 'pressEnter',
        imgSrc: 'pressEnter/pressEnterUpgrade001.png',
        name: 'Quick Fingers X',
        description: 'Pressing Enter produces an additional 1% of the current BpS',
        cost: 100_000_000_000,
        purchased: false,
        effects: {
            specific: {
                incrementorId: 'pressEnter',
                additive: 0.01
            }
        },
        requirementsToBeListable: {
            pressEnterClicks: 100_000_000_000
        }
    },
]

export default pressEnterUpgrades