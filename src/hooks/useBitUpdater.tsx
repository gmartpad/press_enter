import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import { autoIncrementorsState, bitState, enterPressesState, upgradesState } from '@state/atoms'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type Upgrade } from '@upgrades'
import { useDebouncedProduction } from './useDebouncedProduction'
import { Incrementor } from '@state/defaultAutoIncrementors'
import checkUpgradeRequirements from '@utils/checkUpgradeRequirements'
import shallowEqual from '@utils/shallowEqual'

const useBitUpdater = () => {
    const [autoIncrementors, setAutoIncrementors] = useRecoilState<Incrementor[]>(autoIncrementorsState)
    const upgrades = useRecoilValue<Upgrade[]>(upgradesState)
    const [bits, setBits] = useRecoilState(bitState)

    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const updateUpgradesIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const lastUpdateRef = useRef<number>(Date.now())
    const [updateInterval, setUpdateInterval] = useState(100)

    const handleUpdateUpgrades = useRecoilCallback(({ snapshot, set }) => async () => {
        // Get fresh state values from snapshot
        const upgrades = await snapshot.getPromise<Upgrade[]>(upgradesState)
        const bits = await snapshot.getPromise(bitState)
        const incrementors = await snapshot.getPromise(autoIncrementorsState)
        const enterPresses = await snapshot.getPromise(enterPressesState)
        
        // Calculate listable upgrades
        const purchasedUpgrades = upgrades.filter(u => u.purchased)
        const listableUpgrades = upgrades.filter(upgrade => 
            checkUpgradeRequirements(
                upgrade,
                bits,
                incrementors,
                purchasedUpgrades,
                enterPresses
            )
        )
    
        // Create updated array with purchasable flags
        const listableIds = new Set(listableUpgrades.map(u => u.id))
        
        const updatedUpgrades = upgrades.map(upgrade => 
            listableIds.has(upgrade.id) 
                ? { ...upgrade, purchasable: true } 
                : upgrade
        )
    
        // Update state only if changes exist
        if (!shallowEqual(upgrades, updatedUpgrades)) {
            set(upgradesState, updatedUpgrades)
        }
    }, [])

    useEffect(() => {
        updateUpgradesIntervalRef.current = setInterval(handleUpdateUpgrades, 1000)

        return () => {
            if(updateUpgradesIntervalRef.current) {
                clearInterval(updateUpgradesIntervalRef.current)
            }
        }
    }, [])

    const handleUpgradesMultiplicator = useCallback((incrementorId: string, upgrades: Upgrade[]) => {
        let additive = 0
        let multiplicative = 1
        
        const selectedUpgrades = upgrades.filter(
            (upgrade) => upgrade.purchased && (!upgrade.effects?.specific || upgrade.effects.specific?.incrementorId === incrementorId)
        )
        
        selectedUpgrades.forEach(upgrade => {
            if (upgrade.effects.global) {
                if (upgrade.effects.global.additive) additive += upgrade.effects.global.additive
                if (upgrade.effects.global.multiplicative) multiplicative *= upgrade.effects.global.multiplicative
            }
            
            if (upgrade.effects.specific?.incrementorId === incrementorId) {
                if (upgrade.effects.specific?.additive) additive += upgrade.effects.specific.additive
                if (upgrade.effects.specific?.multiplicative) multiplicative *= upgrade.effects.specific.multiplicative
            }
        })

        return (1 + additive) * multiplicative
    }, [])

    const setBitsProduced = useRecoilCallback(({ snapshot, set }) => async (multiplier: number) => {
        const currentIncrementors = await snapshot.getPromise(autoIncrementorsState)
        const upgrades = await snapshot.getPromise<Upgrade[]>(upgradesState)

        const updatedIncrementors = currentIncrementors.map(inc => {
            const upgradesMultiplicator = handleUpgradesMultiplicator(inc.id, upgrades)

            return {
                ...inc,
                bitsProducedSoFar: inc.bitsProducedSoFar + (inc.units * inc.productionPerUnit * multiplier * upgradesMultiplicator)
            }
        })
        
        set(autoIncrementorsState, updatedIncrementors)
    })

    const currentProduction = useDebouncedProduction()
    const currentProductionByMS = useMemo(() => currentProduction / 1000, [currentProduction])

    const saveLastUpdateTime = useCallback((time: number) => {
        localStorage.setItem('lastUpdateTime', String(time))
    }, [])

    useEffect(() => {
        const lastUpdateTime = localStorage.getItem('lastUpdateTime')
        if (lastUpdateTime) {
            const elapsedTime = Math.floor((Date.now() - Number(lastUpdateTime)) / 1000)

            setBits(currVal => currVal + elapsedTime * currentProduction)

            const elapsedUpdatedIncrementors = autoIncrementors.map(inc => {
                const upgradesMultiplicator = handleUpgradesMultiplicator(inc.id, upgrades)

                return {
                    ...inc,
                    bitsProducedSoFar: inc.bitsProducedSoFar + (inc.units * inc.productionPerUnit * elapsedTime * upgradesMultiplicator)
                }
            })
            setAutoIncrementors(elapsedUpdatedIncrementors)
        }

        lastUpdateRef.current = Date.now()
        localStorage.setItem('lastUpdateTime', String(lastUpdateRef.current))
    }, [])

    const startBitUpdate = useCallback(() => {
        if (intervalRef.current) return

        intervalRef.current = setInterval(() => {
            const now = Date.now()
            lastUpdateRef.current = now

            setBits(currVal => currVal + (currentProductionByMS * (updateInterval)))
            setBitsProduced(updateInterval / 1000)
            saveLastUpdateTime(now)
        }, updateInterval)
    }, [currentProductionByMS, saveLastUpdateTime, updateInterval])

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setUpdateInterval(3000)
            } else {
                setUpdateInterval(200)
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
    }, [])

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
        startBitUpdate()
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [startBitUpdate])

    return { setBits, bits }
}

export default useBitUpdater