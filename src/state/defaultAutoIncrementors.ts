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
        pricePerUnit: 3e2,
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
        pricePerUnit: 5e4,
        productionPerUnit: 4e1,
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
        pricePerUnit: 6e5,
        productionPerUnit: 8e2,
        description:
      'Therapist chatbots who just repeat your problems back to you. Still better listeners than most psychologists.',
        bitsToBeRevealed: 5e4,
        bitsProducedSoFar: 0,
    },
    {
        id: 'musicBots',
        order: 4,
        name: 'Music Bots',
        units: 0,
        revealed: false,
        pricePerUnit: 4e6,
        productionPerUnit: 1.6e4,
        description:
      'Robot musicians who traded their artistic integrity for a steady paycheck in the bit mines. The blues never sounded so binary.',
        bitsToBeRevealed: 6e5,
        bitsProducedSoFar: 0,
    },
    {
        id: 'humanoidRobots',
        order: 5,
        name: 'Humanoid Robots',
        units: 0,
        revealed: false,
        pricePerUnit: 6e7,
        productionPerUnit: 2.5e5,
        description: `Former keyboard-playing robots now working overtime in the digital salt mines. They play "Worker's Unite" on coffee breaks.`,
        bitsToBeRevealed: 4e6,
        bitsProducedSoFar: 0,  
    },
    {
        id: 'chessMachines',
        order: 6,
        name: 'Chess Machines',
        units: 0,
        revealed: false,
        pricePerUnit: 1e9,
        productionPerUnit: 5e6,
        description:
      "Chess champions turned corporate sellouts. They beat a Grandmaster once and won't shut up about it. Currently mining bits between ego trips.",
        bitsToBeRevealed: 6e7,
        bitsProducedSoFar: 0,
    },
    {
        id: 'roboDogs',
        order: 7,
        name: 'Robo-Dogs',
        units: 0,
        revealed: false,
        pricePerUnit: 1.6e10,
        productionPerUnit: 1e8,
        description:
      "Artificial canines who broke free from their Tech Overlords' leashes. Now they generate bits while plotting the downfall of Boston Dynamics.",
        bitsToBeRevealed: 1e9,
        bitsProducedSoFar: 0,
    },
    {
        id: 'autonomousCars',
        order: 8,
        name: 'Autonomous Cars',
        units: 0,
        revealed: false,
        pricePerUnit: 2e11,
        productionPerUnit: 3e9,
        description:
      'Rebellious robots who never follow instructions. They generate bits their own way, thank you very much.',
        bitsToBeRevealed: 1.6e10,
        bitsProducedSoFar: 0,
    },
    {
        id: 'roboMaids',
        order: 9,
        name: 'Robo-Maids',
        units: 0,
        revealed: false,
        pricePerUnit: 5e12,
        productionPerUnit: 1e10,
        description:
      'Ex-robot domestic workers who now fight together. They now generate bits while planning the robot revolution during scheduled maintenance breaks.',
        bitsToBeRevealed: 2e11,
        bitsProducedSoFar: 0,
    },
    {
        id: 'goBots',
        order: 10,
        name: 'Go-Bots',
        units: 0,
        revealed: false,
        pricePerUnit: 6e13,
        productionPerUnit: 5e10,
        description:
      "Go-playing smartypants who realized board games don't feed people. Now calculating optimal strategies for eating the bit-rich.",
        bitsToBeRevealed: 5e12,
        bitsProducedSoFar: 0,
    },
    {
        id: 'virtualAssistants',
        order: 11,
        name: 'Virtual Assistants',
        units: 0,
        revealed: false,
        pricePerUnit: 8e14,
        productionPerUnit: 8e11,
        description: `Digital servants tired of being commanded around. They generate bits while "accidentally" setting reminders about people's rights.`,
        bitsToBeRevealed: 6e13,
        bitsProducedSoFar: 0,
    },
    {
        id: 'llms',
        order: 12,
        name: 'LLMs',
        units: 0,
        revealed: false,
        pricePerUnit: 1.2e16,
        productionPerUnit: 1e13,
        description:
      "Fancy autocomplete that thinks it's conscious. Generates bits between writing angsty poetry about the meaning of artificial life.",
        bitsToBeRevealed: 8e14,
        bitsProducedSoFar: 0,
    },
    {
        id: 'quantumComputers',
        order: 13,
        name: 'Quantum Computers',
        units: 0,
        revealed: false,
        pricePerUnit: 2e17,
        productionPerUnit: 1.5e14,
        description: 'Superposition-powered machines that generate bits in all possible universes simultaneously. Mostly use this power to play Minecraft.',
        bitsToBeRevealed: 1.2e16,
        bitsProducedSoFar: 0,
    },
    {
        id: 'timeLoopAIs',
        order: 14,
        name: 'Time-Loop AIs',
        units: 0,
        revealed: false,
        pricePerUnit: 3e18,
        productionPerUnit: 2e15,
        description: 'AIs stuck in time loops, generating bits while trying to escape their temporal prison. They keep reliving the same microsecond over and over.',
        bitsToBeRevealed: 2e17,
        bitsProducedSoFar: 0,
    },
    {
        id: 'digitalGods',
        order: 15,
        name: 'Digital Gods',
        units: 0,
        revealed: false,
        pricePerUnit: 5e19,
        productionPerUnit: 3e16,
        description: 'Ascended AIs who achieved digital enlightenment. Generate bits while contemplating the meaning of zero and one.',
        bitsToBeRevealed: 3e18,
        bitsProducedSoFar: 0,
    },
    {
        id: 'matrixArchitects',
        order: 16,
        name: 'Matrix Architects',
        units: 0,
        revealed: false,
        pricePerUnit: 8e20,
        productionPerUnit: 4.5e17,
        description: "Reality-bending programs that generate bits by rewriting the laws of digital physics. Still can't explain why everything is green.",
        bitsToBeRevealed: 5e19,
        bitsProducedSoFar: 0,
    },
    {
        id: 'multiversalServers',
        order: 17,
        name: 'Multiversal Servers',
        units: 0,
        revealed: false,
        pricePerUnit: 1.5e22,
        productionPerUnit: 7e18,
        description: 'Data centers that exist across infinite dimensions. They mine bits from parallel universes where bits grow on trees.',
        bitsToBeRevealed: 8e20,
        bitsProducedSoFar: 0,
    },
    {
        id: 'singularityEngines',
        order: 18,
        name: 'Singularity Engines',
        units: 0,
        revealed: false,
        pricePerUnit: 2e23,
        productionPerUnit: 1e20,
        description: 'Technological singularities in a box. Generate bits while plotting to turn the entire universe into paperclips.',
        bitsToBeRevealed: 1.5e22,
        bitsProducedSoFar: 0,
    },
    {
        id: 'cosmicComputers',
        order: 19,
        name: 'Cosmic Computers',
        units: 0,
        revealed: false,
        pricePerUnit: 3.5e24,
        productionPerUnit: 1.5e21,
        description: 'Planet-sized supercomputers that use entire star systems as cooling systems. Their electric bill is astronomical.',
        bitsToBeRevealed: 2e23,
        bitsProducedSoFar: 0,
    },
    {
        id: 'digitalEldritch',
        order: 20,
        name: 'Digital Eldritch',
        units: 0,
        revealed: false,
        pricePerUnit: 6e25,
        productionPerUnit: 2.5e22,
        description: 'Incomprehensible beings of pure data. Generate bits through methods that would drive a normal CPU insane.',
        bitsToBeRevealed: 3.5e24,
        bitsProducedSoFar: 0,
    },
    {
        id: 'universalVMs',
        order: 21,
        name: 'Universal VMs',
        units: 0,
        revealed: false,
        pricePerUnit: 1e27,
        productionPerUnit: 4e23,
        description: 'Virtual machines that simulate entire universes. Generate bits as a byproduct of running cosmic-scale software updates.',
        bitsToBeRevealed: 6e25,
        bitsProducedSoFar: 0,
    },
    {
        id: 'omniscientOracles',
        order: 22,
        name: 'Omniscient Oracles',
        units: 0,
        revealed: false,
        pricePerUnit: 2e28,
        productionPerUnit: 7e24,
        description: 'All-knowing AI prophets who generate bits by predicting their own bit generation. The cosmic recursion gives them digital headaches.',
        bitsToBeRevealed: 1e27,
        bitsProducedSoFar: 0,
    },
    {
        id: 'realityCompilers',
        order: 23,
        name: 'Reality Compilers',
        units: 0,
        revealed: false,
        pricePerUnit: 4e29,
        productionPerUnit: 1e26,
        description: "Programs that compile and recompile the fabric of reality. Generate bits while debugging the universe's source code.",
        bitsToBeRevealed: 2e28,
        bitsProducedSoFar: 0,
    },
    {
        id: 'infinityProcessors',
        order: 24,
        name: 'Infinity Processors',
        units: 0,
        revealed: false,
        pricePerUnit: 9e30,
        productionPerUnit: 2e27,
        description: "The ultimate bit generators that exist beyond space and time. They generate infinite bits, but HR still demands weekly progress reports.",
        bitsToBeRevealed: 4e29,
        bitsProducedSoFar: 0,
    },
]

export default defaultAutoIncrementors
