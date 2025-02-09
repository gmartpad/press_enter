import { useEffect, useState } from 'react'
const useDetectTouch = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    useEffect(() => {
        const isTouch = navigator.maxTouchPoints > 0
        setIsTouchDevice(isTouch)
    }, [window.innerWidth, window.innerHeight])

    return isTouchDevice
}

export default useDetectTouch