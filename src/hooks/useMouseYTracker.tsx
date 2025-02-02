import { mouseYState } from '@state/atoms'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'

const useMouseYTracker = () => {
    const [mouseY, setMouseY] = useAtom(mouseYState)

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            setMouseY(event.clientY)
        },
        [setMouseY]
    )

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [setMouseY, handleMouseMove])

    return mouseY
}

export default useMouseYTracker
