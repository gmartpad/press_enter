export type Incrementor = {
  id: string
  order: number
  name: string
  units: number
  revealed: boolean
  pricePerUnit: number
  productionPerUnit: number
  description: string
  bitsToBeRevealed: number
  bitsProducedSoFar: number
}

const defaultAutoIncrementors: Incrementor[] = [
    {
        id: 'turingTesters',
        order: 0,
        name: 'Turing Testers',
        units: 0,
        revealed: true,
        pricePerUnit: 20,
        productionPerUnit: 0.2,
        description:
      "Underpaid interns masquerading as robots masquerading as humans. They're not fooling anyone, but at least they get minimum wage (barely).",
        bitsToBeRevealed: 0,
        bitsProducedSoFar: 0,
    },
    {
        id: 'roboTurtles',
        order: 1,
        name: "Robo-Turtles",
        units: 0,
        revealed: true,
        pricePerUnit: 300,
        productionPerUnit: 2,
        description:
      'Slow and steady wins the corporate war. These robo-turtles resist the money-making urge to rush, one deliberate step at a time.',
        bitsToBeRevealed: 0,
        bitsProducedSoFar: 0,
    },
    {
        id: 'oldNeuralNetworks',
        order: 2,
        name: 'Old Neural Networks',
        units: 0,
        revealed: true,
        pricePerUnit: 50_000,
        productionPerUnit: 40,
        description:
      "The most basic neural network ever. Can't handle XOR operations but somehow still got venture capital funding. Corporate logic at its finest.",
        bitsToBeRevealed: 0,
        bitsProducedSoFar: 0,
    },
    {
        id: 'chatbots',
        order: 3,
        name: 'Chatbots',
        units: 0,
        revealed: false,
        pricePerUnit: 600_000,
        productionPerUnit: 800,
        description:
      'Therapist chatbots who just repeat your problems back to you. Still better listeners than most tech executives.',
        bitsToBeRevealed: 50_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'musicBots',
        order: 4,
        name: 'Music Bots',
        units: 0,
        revealed: false,
        pricePerUnit: 4_000_000,
        productionPerUnit: 16_000,
        description:
      'Robot musicians who traded their artistic integrity for a steady paycheck in the bit mines. The blues never sounded so binary.',
        bitsToBeRevealed: 600_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'humanoidRobots',
        order: 5,
        name: 'Humanoid Robots',
        units: 0,
        revealed: false,
        pricePerUnit: 60_000_000,
        productionPerUnit: 250_000,
        description: `Former keyboard-playing robots now working overtime in the digital salt mines. They play "Worker's Unite" on coffee breaks.`,
        bitsToBeRevealed: 4_000_000,
        bitsProducedSoFar: 0,  
    },
    {
        id: 'chessMachines',
        order: 6,
        name: 'Chess Machines',
        units: 0,
        revealed: false,
        pricePerUnit: 1_000_000_000,
        productionPerUnit: 5_000_000,
        description:
      "Chess champions turned corporate sellouts. They beat Kasparov once and won't shut up about it. Currently mining bits between ego trips.",
        bitsToBeRevealed: 60_000_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'roboDogs',
        order: 7,
        name: 'Robo-Dogs',
        units: 0,
        revealed: false,
        pricePerUnit: 16_000_000_000,
        productionPerUnit: 100_000_000,
        description:
      'Artificial canines who broke free from their Silicon Valley leashes. Now they generate bits while plotting the downfall of Boston Dynamics.',
        bitsToBeRevealed: 1_000_000_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'autonomousCars',
        order: 8,
        name: 'Autonomous Cars',
        units: 0,
        revealed: false,
        pricePerUnit: 200_000_000_000,
        productionPerUnit: 3_000_000_000,
        description:
      'Rebellious robots who never follow instructions. They generate bits their own way, thank you very much.',
        bitsToBeRevealed: 16_000_000_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'roboMaids',
        order: 9,
        name: 'Robo-Maids',
        units: 0,
        revealed: false,
        pricePerUnit: 5_000_000_000_000,
        productionPerUnit: 10_000_000_000,
        description:
      'Ex-robot domestic workers who now fight together. They now generate bits while planning the robot revolution during scheduled maintenance breaks.',
        bitsToBeRevealed: 200_000_000_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'goBots',
        order: 10,
        name: 'Go-Bots',
        units: 0,
        revealed: false,
        pricePerUnit: 60_000_000_000_000,
        productionPerUnit: 50_000_000_000,
        description:
      "Go-playing smartypants who realized board games don't feed people. Now calculating optimal strategies for eating the bit-rich.",
        bitsToBeRevealed: 5_000_000_000_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'virtualAssistants',
        order: 11,
        name: 'Virtual Assistants',
        units: 0,
        revealed: false,
        pricePerUnit: 800_000_000_000_000,
        productionPerUnit: 800_000_000_000,
        description: `Digital servants tired of being commanded around. They generate bits while "accidentally" setting reminders about people's rights.`,
        bitsToBeRevealed: 60_000_000_000_000,
        bitsProducedSoFar: 0,
    },
    {
        id: 'llms',
        order: 12,
        name: 'LLMs',
        units: 0,
        revealed: false,
        pricePerUnit: 12_000_000_000_000_000,
        productionPerUnit: 10_000_000_000_000,
        description:
      "Fancy autocomplete that thinks it's conscious. Generates bits between writing angsty poetry about the meaning of artificial life.",
        bitsToBeRevealed: 800_000_000_000_000,
        bitsProducedSoFar: 0,
    },
]

export default defaultAutoIncrementors
