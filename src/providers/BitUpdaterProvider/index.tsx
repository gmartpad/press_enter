import useBitUpdater from '@hooks/useBitUpdater'
import { ReactNode } from 'react'

const BitUpdaterProvider = ({
    children
}: {
    children: ReactNode
}) => {
    useBitUpdater()

    return (
        <>{children}</>
    )
}

export default BitUpdaterProvider