// Upgrade Imports

import pressEnterUpgrades from "./pressEnter"
import turingTestersUpgrades from "./turingTesters"
import roboTurtlesUpgrades from "./roboTurtles"
import oldNeuralNetworksUpgrades from "./oldNeuralNetworks"
import chatbotsUpgrades from "./chatbots"
import musicBotsUpgrades from "./musicBots"
import humanoidRobotsUpgrades from "./humanoidRobots"
import chessMachinesUpgrades from "./chessMachines"
import roboDogsUpgrades from "./roboDogs"
import autonomousCarsUpgrades from "./autonomousCars"
import roboMaidsUpgrades from "./roboMaids"
import goBotsUpgrades from "./goBots"
import virtualAssistantsUpgrades from "./virtualAssistants"
import llmsUpgrades from "./llms"
import globalBitsUpgrades from "./globalBits"

import quantumComputersUpgrades from "./quantumComputers"
import timeLoopAIsUpgrades from "./timeLoopAIs"
import digitalGodsUpgrades from "./digitalGods"
import matrixArchitectsUpgrades from "./matrixArchitects"
import multiversalServersUpgrades from "./multiversalServers"
import singularityEnginesUpgrades from "./singularityEngines"
import cosmicComputersUpgrades from "./cosmicComputers"
import digitalEldritchUpgrades from "./digitalEldritch"
import universalVMsUpgrades from "./universalVMs"
import omniscientOraclesUpgrades from "./omniscientOracles"
import realityCompilersUpgrades from "./realityCompilers"
import infinityProcessorsUpgrades from "./infinityProcessors"

export type Upgrade = {
    id: string
    incrementorId?: string
    imgSrc: string
    name: string
    description: string
    cost: number
    purchased: boolean
    purchasable: boolean
    effects: {
        global?: {
            additive?: number
            multiplicative?: number
        }
        specific?: {
            incrementorId: string
            additive?: number
            multiplicative?: number
        }
    }
    requirementsToBeListable?: {
        bits?: number
        incrementorUnits?: Record<string, number>
        upgrades?: string[],
        pressEnterClicks?: number
    }
}

export const defaultUpgrades: Upgrade[] = [
    globalBitsUpgrades,
    // Press Enter Upgrades
    pressEnterUpgrades,
    // Turing Testers Upgrades
    turingTestersUpgrades,
    // Robo-Turtles Upgrades
    roboTurtlesUpgrades,
    // Old Neural Networks Upgrades
    oldNeuralNetworksUpgrades,
    // Chatbot Upgrades
    chatbotsUpgrades,
    // Music Bots Upgrades
    musicBotsUpgrades,
    // Humanoid Robots Upgrades
    humanoidRobotsUpgrades,
    // Chess Machines Upgrades 
    chessMachinesUpgrades,
    // Robo-Dogs Upgrades
    roboDogsUpgrades,
    // Autonomous Cars Upgrades
    autonomousCarsUpgrades,
    // Robo-Maids Upgrades
    roboMaidsUpgrades,
    // Go-Bots Upgrades
    goBotsUpgrades,
    // Virtual Assistants Upgrades
    virtualAssistantsUpgrades,
    // LLMs Upgrades
    llmsUpgrades,
    // Quantum Computers Upgrades
    quantumComputersUpgrades,
    // Time Loop AIs Upgrades
    timeLoopAIsUpgrades,
    // Digital Gods Upgrades
    digitalGodsUpgrades,
    // Matrix Architects Upgrades
    matrixArchitectsUpgrades,
    // Multiversal Servers Upgrades
    multiversalServersUpgrades,
    // Singularity Engines Upgrades
    singularityEnginesUpgrades,
    // Cosmic Computers Upgrades
    cosmicComputersUpgrades,
    // Digital Eldritch Upgrades
    digitalEldritchUpgrades,
    // Universal VMs Upgrades
    universalVMsUpgrades,
    // Omniscient Oracles Upgrades
    omniscientOraclesUpgrades,
    // Reality Compilers Upgrades
    realityCompilersUpgrades,
    // Infinity Processors Upgrades
    infinityProcessorsUpgrades
].flatMap(upgrade => upgrade)