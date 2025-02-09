import { useEffect, useState } from 'react'

const useDetectDeviceToolbarToggle = () => {
    const [isDeviceToolbarActive, setIsDeviceToolbarActive] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            // Check if the device toolbar is toggled on or off
            const isActive = !(window.innerWidth !== window.outerWidth || window.innerHeight !== window.outerHeight)
            setIsDeviceToolbarActive(isActive)
        }

        // Add the resize event listener
        window.addEventListener('resize', handleResize)

        // Initial check
        handleResize()

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isDeviceToolbarActive
}

export default useDetectDeviceToolbarToggle