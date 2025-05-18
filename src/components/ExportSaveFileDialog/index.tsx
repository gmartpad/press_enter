import { configState } from '@state/atoms'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { useIntl } from 'react-intl'
import { useAtom, useStore } from 'jotai'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import { CentralizeDiv } from '@components/ConfirmDialog/styled'
import { SaveInput, CopyButton, CopyButtonContainer, VisuallyHiddenLabel } from './styled'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import { sound1 } from '@assets/sounds/sharedClick'

const ExportSaveFileDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const isClick = useDetectButtonClickBoolean()
    const [config, setConfig] = useAtom(configState)
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const ariaIDs = useMemo(() => ({
        dialogTitleId: 'export-save-dialog-title',
        saveInputLabelId: 'save-input-label'
    }), [])

    useEffect(() => {
        if (config.exportSaveFileDialogOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const hasWriteText = useMemo(() => Boolean(navigator.clipboard?.writeText), [navigator.clipboard?.writeText])

    const handleClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleCopy = useCallback(() => {
        handleClickSound()
        if (!inputRef.current) return

        try {
            inputRef.current.select()
            inputRef.current.focus()
            if (hasWriteText) {
                navigator.clipboard.writeText(inputRef.current.value)
                    .catch((err) => {
                        console.error('Failed to copy text: ', err)
                        document.execCommand('copy')
                    })
            } else {
                // Fallback to execCommand
                document.execCommand('copy')
            }
        } catch (err) {
            console.error('Error during copy operation: ', err)
        }
    }, [hasWriteText, handleClickSound])

    const handleDownloadSave = useCallback(() => {
        try {
            const saveData = localStorage.getItem('gameState') || ''
            const blob = new Blob([saveData], { type: 'text/plain' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'save-file.txt'
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
        } catch (err) {
            console.error(err)
        }
    }, [])

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleToggleExportSaveFileDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            exportSaveFileDialogOpen: !currentConfig.exportSaveFileDialogOpen,
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
        handleToggleExportSaveFileDialog()
        handleToggleConfigDialog()
    }, [
        handleToggleExportSaveFileDialog,
        handleToggleConfigDialog
    ])

    if(!config.exportSaveFileDialogOpen) return null

    return (
        <>
            <DialogBackground 
                handleToggleDialog={confirmConfigToggle} 
            />
            <DialogContainer 
                dialogOpen={Boolean(config.exportSaveFileDialogOpen)}
                aria-labelledby={ariaIDs.dialogTitleId}
                aria-modal="true"
            >
                <DialogCloseButton
                    handleToggleDialog={confirmConfigToggle}
                    orientation='left'
                    aria-label="Go back to settings"
                >
                    {'<'}
                </DialogCloseButton>
                <CentralizeDiv>
                    <h2>{intl.formatMessage({ id: 'config.exportSaveFile.title' })}</h2>
                    <VisuallyHiddenLabel
                        htmlFor="save-game-data"
                        id={ariaIDs.saveInputLabelId}
                    >
                        {'Save game data (read-only)'}
                    </VisuallyHiddenLabel>
                    <SaveInput
                        id="save-game-data"
                        ref={inputRef}
                        value={localStorage.getItem('gameState') || ''}
                        readOnly
                        aria-labelledby={ariaIDs.saveInputLabelId}
                        aria-describedby={ariaIDs.dialogTitleId}
                    />
                    <CopyButtonContainer>
                        {hasWriteText && (
                            <CopyButton
                                onClick={() => {
                                    if(isClick) {
                                        handleCopy()
                                    }
                                }}
                                onTouchStart={() => {
                                    if(!isClick) {
                                        handleCopy()
                                    }
                                }}
                            >
                                {intl.formatMessage({ id: 'config.exportSaveFile.copyButton' })}
                            </CopyButton>
                        )}
                        <CopyButton onClick={handleDownloadSave}>
                            {intl.formatMessage({ id: 'config.exportSaveFile.downloadButton' })}
                        </CopyButton>
                    </CopyButtonContainer>
                </CentralizeDiv>
            </DialogContainer>
        </>
    )
}

export default ExportSaveFileDialog
