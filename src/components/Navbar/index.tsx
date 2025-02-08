import { configState } from '@state/atoms'
import { useCallback, useRef } from 'react'
import { ChangeLanguageButton, Gear, Globe, Nav, SquareNavButton, Stats, LeftNavButtons } from './styled'
import { FormattedMessage } from 'react-intl'
import { sound1 } from '@assets/sounds/sharedClick'
import { useAtom, useStore } from 'jotai'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
import useIsDesktop from '@hooks/useIsDesktop'

const Navbar = () => {
    const { windowInnerWidth } = useWindowInnerValues()
    const isDesktop = useIsDesktop()
    const store = useStore()
    const [config, setConfig] = useAtom(configState)

    const handleNavClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const toggleHandler = useCallback((key: keyof typeof config) => {
        handleNavClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            [key]: !currentConfig[key]
        })
    }, [handleNavClickSound, setConfig, store])

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
        <Nav $windowInnerWidth={windowInnerWidth}>
            <LeftNavButtons>
                <SquareNavButton
                    onClick={() => {
                        if(isDesktop) {
                            handleToggleConfigDialog()
                        }
                    }}
                    onTouchStart={() => {
                        if(!isDesktop) {
                            handleToggleConfigDialog()
                        }
                    }}
                >
                    <Gear/>
                </SquareNavButton>
                <SquareNavButton
                    onClick={() => {
                        if(isDesktop) {
                            handleToggleStatsSection()
                        }
                    }}
                    onTouchStart={() => {
                        if(!isDesktop) {
                            handleToggleStatsSection() 
                        }
                    }}
                >
                    <Stats/>
                </SquareNavButton>
            </LeftNavButtons>
            <ChangeLanguageButton
                onClick={() => {
                    if(isDesktop) {
                        handleToggleLanguageDialog()
                    }
                }}
                onTouchStart={() => {
                    if(!isDesktop) {
                        handleToggleLanguageDialog()
                    }
                }}
            >
                <Globe/>
                <FormattedMessage tagName="p" id="navbar.changeLanguage.title"/>
            </ChangeLanguageButton>
        </Nav>
    )
}

export default Navbar
