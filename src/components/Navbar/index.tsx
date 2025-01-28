import { configState, type Config } from '@state/atoms'
import { useCallback, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { ChangeLanguageButton, Gear, Globe, Nav, SquareNavButton, Stats } from './styled'
import { FormattedMessage } from 'react-intl'
import { sound1 } from '@assets/sounds/sharedClick'

const Navbar = () => {
    const [config, setConfig] = useRecoilState(configState)

    const handleNavClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const toggleHandler = useCallback((key: keyof Config) => {
        handleNavClickSound()
        setConfig((currConfig: Config) => ({
            ...currConfig,
            [key]: !currConfig[key]
        }))
    }, [handleNavClickSound, setConfig])

    const handleToggleConfigDialog = useCallback(
        () => toggleHandler('configDialogOpen'),
        [toggleHandler]
    )

    const handleToggleStatsSection = useCallback(
        () => toggleHandler('statsSectionOpen'),
        [toggleHandler]
    )

    const handleToggleLanguageDialog = useCallback(
        () => toggleHandler('languageDialogOpen'),
        [toggleHandler]
    )

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    return (
        <Nav>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2
                }}
            >
                <SquareNavButton
                    onClick={handleToggleConfigDialog}
                    onTouchStart={handleToggleConfigDialog}
                >
                    <Gear/>
                </SquareNavButton>
                <SquareNavButton
                    onClick={handleToggleStatsSection}
                    onTouchStart={handleToggleStatsSection}
                >
                    <Stats/>
                </SquareNavButton>
            </div>
            <ChangeLanguageButton
                onClick={handleToggleLanguageDialog}
                onTouchStart={handleToggleLanguageDialog}
            >
                <Globe/>
                <FormattedMessage tagName="p" id="navbar.changeLanguage.title"/>
            </ChangeLanguageButton>
        </Nav>
    )
}

export default Navbar
