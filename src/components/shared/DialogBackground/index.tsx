import { DialogBackground as StyledDialogBackground } from './styled'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'

interface DialogBackgroundProps {
    handleToggleDialog: () => void
}

const DialogBackground = ({
    handleToggleDialog
}: DialogBackgroundProps) => {
    const isClick = useDetectButtonClickBoolean()

    return (
        <StyledDialogBackground
            onClick={() => {
                if(isClick) {
                    handleToggleDialog()
                }
            }}
            onTouchStart={() => {
                if(!isClick) {
                    handleToggleDialog()
                }
            }}
        />
    )
}

export default DialogBackground