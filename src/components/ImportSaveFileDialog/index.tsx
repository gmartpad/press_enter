import { configState } from '@state/atoms'
import { useCallback, useState } from 'react'
import { useAtom, useStore } from 'jotai'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { useIntl } from 'react-intl'
import { CentralizeDiv } from '@components/ConfirmDialog/styled'
import useSaveManager from '@hooks/useSaveManager'
import { decodeSaveData } from '@utils/saveEncoder'
import { SaveInput, ImportButton, ButtonContainer, ErrorMessage } from './styled'
import DialogCloseButton from '@components/shared/DialogCloseButton'


const ImportSaveFileDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const [config, setConfig] = useAtom(configState)
    const { loadGame } = useSaveManager()
    const [saveString, setSaveString] = useState('')
    const [error, setError] = useState('')

    const handleToggleImportSaveFileDialog = useCallback((fixedValue?: boolean) => {
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            importSaveFileDialogOpen: fixedValue ? fixedValue : !currentConfig.importSaveFileDialogOpen,
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
        handleToggleImportSaveFileDialog()
        handleToggleConfigDialog()
    }, [
        handleToggleImportSaveFileDialog,
        handleToggleConfigDialog
    ])

    const handleLoad = useCallback(() => {
        try {
            // First validate if it can be decoded
            const decoded = decodeSaveData(saveString)
            if (!decoded) {
                setError(intl.formatMessage({ id: 'config.importSaveFile.invalidSave' }))
                return
            }

            // Store the save string and attempt to load it
            const success = loadGame(saveString)

            if (!success) {
                setError(intl.formatMessage({ id: 'config.importSaveFile.loadError' }))
                localStorage.removeItem('gameState')
            } else {
                setSaveString('')
                setError('')
            }
        } catch (err) {
            console.error(err)
            setError(intl.formatMessage({ id: 'config.importSaveFile.invalidSave' }))
        }
    }, [saveString, loadGame, intl, handleToggleImportSaveFileDialog])

    const handlePasteFromClipboard = useCallback(async () => {
        try {
            const clipboardText = await navigator.clipboard.readText()
            setSaveString(clipboardText)
        } catch (err) {
            console.error(err)
            setError(intl.formatMessage({ id: 'config.importSaveFile.clipboardError' }))
        }
    }, [intl])

    if (!config.importSaveFileDialogOpen) return null

    return (
        <>
            <DialogBackground handleToggleDialog={confirmConfigToggle} />
            <DialogContainer dialogOpen={Boolean(config.importSaveFileDialogOpen)}>
                <DialogCloseButton
                    handleToggleDialog={confirmConfigToggle}
                    orientation='left'
                >
                    {'<'}
                </DialogCloseButton>
                <CentralizeDiv>
                    <h2>{intl.formatMessage({ id: 'config.importSaveFile.title' })}</h2>
                    <SaveInput
                        value={saveString}
                        onChange={(e) => setSaveString(e.target.value)}
                        placeholder={intl.formatMessage({ id: 'config.importSaveFile.placeholder' })}
                    />
                    <ButtonContainer>
                        <ImportButton
                            onClick={handlePasteFromClipboard}
                        >
                            {intl.formatMessage({ id: 'config.importSaveFile.pasteFromClipboard' })}
                        </ImportButton>
                        <ImportButton
                            onClick={handleLoad}
                            disabled={!saveString}
                        >
                            {intl.formatMessage({ id: 'config.importSaveFile.loadButton' })}
                        </ImportButton>
                    </ButtonContainer>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </CentralizeDiv>
            </DialogContainer>
        </>
    )
}

export default ImportSaveFileDialog 