import { configState } from '@state/atoms'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useAtom, useStore } from 'jotai'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { useIntl } from 'react-intl'
import { CentralizeDiv } from '@components/ConfirmDialog/styled'
import useSaveManager from '@hooks/useSaveManager'
import { decodeSaveData } from '@utils/saveEncoder'
import { SaveInput, ImportButton, ButtonContainer, ErrorMessage } from './styled'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import { sound1 } from '@assets/sounds/sharedClick'


const ImportSaveFileDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const [config, setConfig] = useAtom(configState)
    const { loadGame } = useSaveManager()
    const [saveString, setSaveString] = useState('')
    const [error, setError] = useState('')

    const hasReadText = useMemo(() => Boolean(navigator.clipboard?.readText), [navigator.clipboard?.readText])

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleToggleImportSaveFileDialog = useCallback((fixedValue?: boolean) => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            importSaveFileDialogOpen: fixedValue ? fixedValue : !currentConfig.importSaveFileDialogOpen,
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
        handleToggleImportSaveFileDialog()
        handleToggleConfigDialog()
    }, [
        handleToggleImportSaveFileDialog,
        handleToggleConfigDialog
    ])

    const handleLoad = useCallback(() => {
        handleClickSound()
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
    }, [handleClickSound, saveString, loadGame, intl, handleToggleImportSaveFileDialog])

    const handlePasteFromClipboard = useCallback(async () => {
        handleClickSound()
        try {
            if (hasReadText) {
                const clipboardText = await navigator.clipboard.readText()
                setSaveString(clipboardText)
            } else {
                // Fallback to execCommand
                const textarea = document.createElement('textarea')
                document.body.appendChild(textarea)
                textarea.focus()
                document.execCommand('paste')
                const pastedText = textarea.value
                document.body.removeChild(textarea)
                if (pastedText) {
                    setSaveString(pastedText)
                } else {
                    setError(intl.formatMessage({ id: 'config.importSaveFile.clipboardNotSupported' }))
                }
            }
        } catch (err) {
            console.error(err)
            setError(intl.formatMessage({ id: 'config.importSaveFile.clipboardError' }))
        }
    }, [hasReadText, intl])

    const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (e) => {
            const text = e.target?.result
            if (typeof text === 'string') {
                setSaveString(text)
            }
        }
        reader.readAsText(file)
    }, [])

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
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            width: '100%',
                        }}>
                            {hasReadText && (
                                <ImportButton onClick={handlePasteFromClipboard}>
                                    {intl.formatMessage({ id: 'config.importSaveFile.pasteFromClipboard' })}
                                </ImportButton>
                            )}
                            <ImportButton
                                onClick={() => document.getElementById('file-upload')?.click()}
                            >
                                {intl.formatMessage({ id: 'config.importSaveFile.uploadFile' })}
                            </ImportButton>
                        </div>
                        <input
                            id="file-upload"
                            type="file"
                            accept=".txt"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                        />
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