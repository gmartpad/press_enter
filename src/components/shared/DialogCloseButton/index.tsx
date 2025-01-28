import { DialogCloseButton as StyledDialogCloseButton, DialogCloseButtonParagraph } from './styled'

interface DialogCloseButtonProps {
    handleToggleDialog: () => void
}

const DialogCloseButton = ({
    handleToggleDialog
}: DialogCloseButtonProps) => {
    return (
        <StyledDialogCloseButton
            onClick={handleToggleDialog}
            onTouchStart={handleToggleDialog}
        >
            <DialogCloseButtonParagraph>
                X
            </DialogCloseButtonParagraph>
        </StyledDialogCloseButton>
    )
}

export default DialogCloseButton