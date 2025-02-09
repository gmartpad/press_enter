import { configState } from '@state/atoms'
import { useCallback, useRef } from 'react'
import { ChangeLanguageButton, Gear, Globe, Nav, SquareNavButton, Stats, LeftNavButtons } from './styled'
import { FormattedMessage } from 'react-intl'
import { sound1 } from '@assets/sounds/sharedClick'
import { useAtom, useStore } from 'jotai'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'

const Navbar = () => {
    const { windowInnerWidth } = useWindowInnerValues()
    const isClick = useDetectButtonClickBoolean()
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
                        if(isClick) {
                            handleToggleConfigDialog()
                        }
                    }}
                    onTouchStart={() => {
                        if(!isClick) {
                            handleToggleConfigDialog()
                        }
                    }}
                >
                    <Gear/>
                </SquareNavButton>
                <SquareNavButton
                    onClick={() => {
                        if(isClick) {
                            handleToggleStatsSection()
                        }
                    }}
                    onTouchStart={() => {
                        if(!isClick) {
                            handleToggleStatsSection() 
                        }
                    }}
                >
                    <Stats/>
                </SquareNavButton>
            </LeftNavButtons>
            <ChangeLanguageButton
                onClick={() => {
                    if(isClick) {
                        handleToggleLanguageDialog()
                    }
                }}
                onTouchStart={() => {
                    if(!isClick) {
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
