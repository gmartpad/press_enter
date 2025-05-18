import { configState } from '@state/atoms'
import { useCallback, useMemo, useRef } from 'react'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import ResetButton from '@components/ResetButton'
import { 
    CentralizeDiv, 
    ConfirmButtonsContainer, 
    ConfirmH2, 
    ConfirmH3, 
    DeclineButton,
    DeclineButtonH2
} from './styled'
import { useIntl } from 'react-intl'
import { useAtom, useStore } from 'jotai'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import { sound1 } from '@assets/sounds/sharedClick'

const ConfirmDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const isClick = useDetectButtonClickBoolean()
    const [config, setConfig] = useAtom(configState)

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleToggleConfirmDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            confirmDialogOpen: !currentConfig.confirmDialogOpen,
        })
    }, [handleClickSound, setConfig, store])

    const handleToggleConfigDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            configDialogOpen: !currentConfig.configDialogOpen,
        })
    }, [handleClickSound, setConfig, store])

    const confirmConfigToggle = useCallback(() => {
        handleToggleConfirmDialog()
        handleToggleConfigDialog()
    }, [
        handleToggleConfirmDialog,
        handleToggleConfigDialog
    ])

    const additionalCallback = useCallback(() => {
        handleToggleConfirmDialog()
    }, [handleToggleConfirmDialog])

    const ariaIDs = useMemo(() => ({
        dialogTitleId: 'confirm-dialog-title',
        dialogDescriptionId: 'confirm-dialog-description',
    }), [])

    if(config.confirmDialogOpen) return (
        <>
            <DialogBackground 
                handleToggleDialog={confirmConfigToggle} 
            />
            <DialogContainer 
                dialogOpen={Boolean(config.confirmDialogOpen)}
                aria-labelledby={ariaIDs.dialogTitleId}
                aria-describedby={ariaIDs.dialogDescriptionId}
                aria-modal="true"
            >
                <CentralizeDiv>
                    <DialogCloseButton
                        handleToggleDialog={confirmConfigToggle}
                        orientation='left'
                        aria-label="Go back"
                    >
                        {'<'}
                    </DialogCloseButton>
                    <ConfirmH2 id={ariaIDs.dialogTitleId}>{intl.formatMessage({ id: 'confirm.primary.title' })}</ConfirmH2>
                    <ConfirmH3 id={ariaIDs.dialogDescriptionId}>{intl.formatMessage({ id: 'confirm.secondary.title' })}</ConfirmH3>
                    <ConfirmButtonsContainer>
                        <ResetButton
                            labelText={intl.formatMessage({ id: 'confirm.resetButton.label' })}
                            additionalCallback={additionalCallback}
                        />
                        <DeclineButton 
                            onClick={() => {
                                if(isClick) {
                                    confirmConfigToggle()
                                }
                            }}
                            onTouchStart={() => {
                                if(!isClick) {
                                    confirmConfigToggle()
                                }
                            }}
                        >
                            <DeclineButtonH2>{intl.formatMessage({ id: 'confirm.declineButton.label' })}</DeclineButtonH2>
                        </DeclineButton>
                    </ConfirmButtonsContainer>
                </CentralizeDiv>
            </DialogContainer>
        </>
    )
}

export default ConfirmDialog
