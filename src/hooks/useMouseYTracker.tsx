import { mouseYState } from '@state/atoms'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'

const useMouseYTracker = () => {
    const [mouseY, setMouseY] = useRecoilState(mouseYState)

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
