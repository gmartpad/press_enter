import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import { DialogCloseButton as StyledDialogCloseButton, DialogCloseButtonParagraph } from './styled'

interface DialogCloseButtonProps {
    handleToggleDialog: () => void
    orientation: 'left' | 'right'
    children: React.ReactNode
}

const DialogCloseButton = ({
    handleToggleDialog,
    orientation,
    children
}: DialogCloseButtonProps) => {
    const isClick = useDetectButtonClickBoolean()

    return (
        <StyledDialogCloseButton
            $orientation={orientation}
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
            <DialogCloseButtonParagraph
                $orientation={orientation}
            >
                {children}
            </DialogCloseButtonParagraph>
        </StyledDialogCloseButton>
    )
}

export default DialogCloseButton