import { ReactNode, useCallback, useRef  } from 'react'
import { TabButton as StyledTabButton, TabButtonText } from './styled'
import { sound1 } from '@assets/sounds/sharedClick'
import { useAtom } from 'jotai'
import { configState } from '@state/atoms'

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
    const audioRef = useRef<HTMLAudioElement>(new Audio(sound1))
    const [config] = useAtom(configState)

    const handleClickSound = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleClick = useCallback(() => {
        onClick()
        handleClickSound()
    }, [onClick, handleClickSound])

    return (
        <StyledTabButton active={active} onClick={handleClick}>
            <TabButtonText>{children}</TabButtonText>
        </StyledTabButton>
    )
}

export default TabButton