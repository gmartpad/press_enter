import useIsDesktop from '@hooks/useIsDesktop'
import { DialogCloseButton as StyledDialogCloseButton, DialogCloseButtonParagraph } from './styled'

interface DialogCloseButtonProps {
    handleToggleDialog: () => void
}

const DialogCloseButton = ({
    handleToggleDialog
}: DialogCloseButtonProps) => {
    const isDesktop = useIsDesktop()
    return (
        <StyledDialogCloseButton
            onClick={() => {
                if(isDesktop) {
                    handleToggleDialog()
                }
            }}
            onTouchStart={() => {
                if(!isDesktop) {
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