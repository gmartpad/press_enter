import { ReactNode } from 'react'
import { TabButton as StyledTabButton, TabButtonText } from './styled'

interface TabButtonProps {
    children: ReactNode,
    active: boolean,
    onClick: () => void
}

const TabButton = ({
    children,
    active,
    onClick
}: TabButtonProps) => {

    return (
        <StyledTabButton active={active} onClick={onClick}>
            <TabButtonText>{children}</TabButtonText>
        </StyledTabButton>
    )
}

export default TabButton