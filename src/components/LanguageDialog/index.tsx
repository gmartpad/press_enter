import { useCallback, useRef } from 'react'
import { 
    ChangeLanguageButton, 
    LanguageDialogTitleDiv, 
    LanguageList 
} from './styled'
import { configState } from '@state/atoms'
import { FormattedMessage } from 'react-intl'
import { languages, LanguageValues } from './languages'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import DialogContainer from '@components/shared/DialogContainer'
import DialogBackground from '@components/shared/DialogBackground'
import { sound1 } from '@assets/sounds/sharedClick'
import { useAtom, useStore } from 'jotai'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'

const LanguageDialog = () => {
    const store = useStore()
    const isClick = useDetectButtonClickBoolean()
    const [config, setConfig] = useAtom(configState)

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleCloseClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleToggleLanguageDialog = useCallback(() => {
        handleCloseClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            languageDialogOpen: !currentConfig.languageDialogOpen
        })
    }, [handleCloseClickSound, setConfig, store])

    const handleChangeLanguageLocale = useCallback((newLanguageLocale: LanguageValues) => {
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            currentLanguageLocale: newLanguageLocale
        })
    }, [setConfig, store])

    if(config?.languageDialogOpen) return (
        <>
            <DialogBackground handleToggleDialog={handleToggleLanguageDialog}/>
            <DialogContainer dialogOpen={!!config?.languageDialogOpen}>
                <DialogCloseButton
                    handleToggleDialog={handleToggleLanguageDialog}
                />
                <LanguageDialogTitleDiv>
                    <FormattedMessage 
                        tagName='h2' 
                        id='languageDialog.chooseYourLanguage.title'
                    />
                </LanguageDialogTitleDiv>
                <LanguageList>
                    {languages.map((language) => (
                        <ChangeLanguageButton
                            active={config.currentLanguageLocale === language.value} 
                            onClick={() => {
                                if(isClick) {
                                    handleChangeLanguageLocale(language.value)
                                }
                            }}
                            onTouchStart={() => {
                                if(!isClick) {
                                    handleChangeLanguageLocale(language.value)
                                }
                            }}
                        >
                            {language.Flag && (<language.Flag style={{ width: 24, height: 16 }}/>)}
                            <p style={{ textTransform: 'uppercase' }}>{language.label}</p>
                        </ChangeLanguageButton>
                    ))}
                </LanguageList>
            </DialogContainer>
        </>
    )
}

export default LanguageDialog