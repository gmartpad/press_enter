import { currentProductionState } from '@state/atoms'
import { useState, useEffect } from 'react'
import { useAtomValue } from 'jotai'

const useDebouncedProduction = (delay = 250) => {
    const currentProduction = useAtomValue(currentProductionState)
    const [debouncedProduction, setDebouncedProduction] = useState(currentProduction)

    useEffect(() => {
    // Create a timer that will update the debounced value after the specified delay
        const timer = setTimeout(() => {
            setDebouncedProduction(currentProduction)
        }, delay)

        // Clean up the timer if currentProduction changes before the delay has passed
        return () => clearTimeout(timer)
    }, [currentProduction, delay])

    return debouncedProduction
}

export default useDebouncedProduction