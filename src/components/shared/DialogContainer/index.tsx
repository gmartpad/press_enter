import { ReactNode } from 'react'
import { Dialog } from './styled'

interface DialogContainerProps {
    dialogOpen: boolean
    children: ReactNode
}

const DialogContainer = ({
    dialogOpen,
    children
}: DialogContainerProps) => {
    return (
        <Dialog open={dialogOpen}>
            {children}
        </Dialog>
    )
}

export default DialogContainer