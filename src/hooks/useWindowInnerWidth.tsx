import { useCallback, useEffect, useState } from 'react'

const useWindowInnerWidth = () => {
    const [windowInnerWidth, setWindowInnerWidth] = useState<number>(window.innerWidth)

    const handleResize = useCallback(() => {
        setWindowInnerWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { windowInnerWidth }
}

export default useWindowInnerWidth