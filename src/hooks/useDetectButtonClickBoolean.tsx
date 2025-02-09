import { useState, useEffect } from "react"
import useDetectTouch from "./useDetectTouch"
import useDetectDeviceToolbarToggle from "./useDetectDeviceToolbarToggle"

const useDetectButtonClickBoolean = () => {
    const isTouchDevice = useDetectTouch()
    const isDeviceToolbarActive = useDetectDeviceToolbarToggle()

    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        if(!isTouchDevice && !isDeviceToolbarActive) {
            setIsClick(true)
        }

        if(isTouchDevice || isDeviceToolbarActive) {
            setIsClick(false)
        }
    }, [isTouchDevice, isDeviceToolbarActive])

    return isClick
}

export default useDetectButtonClickBoolean