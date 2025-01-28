import { DialogBackground as StyledDialogBackground } from './styled'

interface DialogBackgroundProps {
    handleToggleDialog: () => void
}

const DialogBackground = ({
    handleToggleDialog
}: DialogBackgroundProps) => {
    return (
        <StyledDialogBackground
            onClick={handleToggleDialog}
            onTouchStart={handleToggleDialog}
        />
    )
}

export default DialogBackground