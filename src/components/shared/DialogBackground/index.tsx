import useIsDesktop from '@hooks/useIsDesktop'
import { DialogBackground as StyledDialogBackground } from './styled'

interface DialogBackgroundProps {
    handleToggleDialog: () => void
}

const DialogBackground = ({
    handleToggleDialog
}: DialogBackgroundProps) => {
    const isDesktop = useIsDesktop()
    return (
        <StyledDialogBackground
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
        />
    )
}

export default DialogBackground