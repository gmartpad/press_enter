import { useRecoilState, useRecoilValue } from 'recoil'
import { configState, type Config } from '@state/atoms'
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

const ConfirmDialog = () => {
    const intl = useIntl()
    const [config, setConfig] = useRecoilState(configState)

    const handleToggleConfirmDialog = useCallback(() => {
        setConfig((currConfig: Config) => ({
            ...currConfig,
            confirmDialogOpen: !currConfig.confirmDialogOpen,
        }))
    }, [setConfig])

    const handleToggleConfigDialog = useCallback(() => {
        setConfig((currConfig: Config) => ({
            ...currConfig,
            configDialogOpen: !currConfig.configDialogOpen,
        }))
    }, [setConfig])

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

    if((config as Config).confirmDialogOpen) return (
        <>
            <DialogBackground 
                handleToggleDialog={confirmConfigToggle} 
            />
            <DialogContainer dialogOpen={Boolean((config as Config).confirmDialogOpen)}>
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
