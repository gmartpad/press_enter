import { useCallback, useEffect, useState } from 'react'

const useWindowInnerValues = () => {
    const [windowInnerHeight, setWindowInnerHeight] = useState<number>(window.innerHeight)
    const [windowInnerWidth, setWindowInnerWidth] = useState<number>(window.innerWidth)

    const handleResize = useCallback(() => {
        setWindowInnerWidth(window.innerWidth)
        setWindowInnerHeight(window.innerHeight)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { windowInnerHeight, windowInnerWidth }
}

export default useWindowInnerValues