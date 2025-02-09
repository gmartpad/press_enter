import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import { DialogCloseButton as StyledDialogCloseButton, DialogCloseButtonParagraph } from './styled'

interface DialogCloseButtonProps {
    handleToggleDialog: () => void
}

const DialogCloseButton = ({
    handleToggleDialog
}: DialogCloseButtonProps) => {
    const isClick = useDetectButtonClickBoolean()

    return (
        <StyledDialogCloseButton
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
        >
            <DialogCloseButtonParagraph>
                X
            </DialogCloseButtonParagraph>
        </StyledDialogCloseButton>
    )
}

export default DialogCloseButton