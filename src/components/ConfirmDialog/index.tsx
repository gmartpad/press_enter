import { configState } from '@state/atoms'
import { useCallback } from 'react'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import ResetButton from '@components/ResetButton'
import { 
    CentralizeDiv, 
    ConfirmButtonsContainer, 
    ConfirmH2, 
    ConfirmH3, 
    DeclineButton 
} from './styled'
import { useIntl } from 'react-intl'
import { useAtom, useStore } from 'jotai'

const ConfirmDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const [config, setConfig] = useAtom(configState)

    const handleToggleConfirmDialog = useCallback(() => {
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            confirmDialogOpen: !currentConfig.confirmDialogOpen,
        })
    }, [setConfig, store])

    const handleToggleConfigDialog = useCallback(() => {
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            configDialogOpen: !currentConfig.configDialogOpen,
        })
    }, [setConfig, store])

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

    if(config.confirmDialogOpen) return (
        <>
            <DialogBackground 
                handleToggleDialog={confirmConfigToggle} 
            />
            <DialogContainer dialogOpen={Boolean(config.confirmDialogOpen)}>
                <CentralizeDiv>
                    <ConfirmH2>{intl.formatMessage({ id: 'confirm.primary.title' })}</ConfirmH2>
                    <ConfirmH3>{intl.formatMessage({ id: 'confirm.secondary.title' })}</ConfirmH3>
                    <ConfirmButtonsContainer>
                        <ResetButton
                            labelText={intl.formatMessage({ id: 'confirm.resetButton.label' })}
                            additionalCallback={additionalCallback}
                        />
                        <DeclineButton onClick={confirmConfigToggle}>
                            {intl.formatMessage({ id: 'confirm.declineButton.label' })}
                        </DeclineButton>
                    </ConfirmButtonsContainer>
                </CentralizeDiv>
            </DialogContainer>
        </>
    )
}

export default ConfirmDialog
