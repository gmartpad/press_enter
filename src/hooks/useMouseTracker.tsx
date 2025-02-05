import { mouseXState, mouseYState } from '@state/atoms'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'

const useMouseTracker = () => {
    const [mouseX, setMouseX] = useAtom(mouseXState)
    const [mouseY, setMouseY] = useAtom(mouseYState)

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            setMouseX(event.clientX)
            setMouseY(event.clientY)
        },
        [setMouseY]
    )

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [setMouseY, handleMouseMove])

    return { mouseX, mouseY }
}

export default useMouseTracker
