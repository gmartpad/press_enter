import { configState } from '@state/atoms'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { useIntl } from 'react-intl'
import { useAtom, useStore } from 'jotai'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import { CentralizeDiv } from '@components/ConfirmDialog/styled'
import { SaveInput, CopyButton, CopyButtonContainer } from './styled'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import { sound1 } from '@assets/sounds/sharedClick'

const ExportSaveFileDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const isClick = useDetectButtonClickBoolean()
    const [config, setConfig] = useAtom(configState)
    const inputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const hasWriteText = useMemo(() => Boolean(navigator.clipboard?.writeText), [navigator.clipboard?.writeText])

    const handleCopy = useCallback(() => {
        handleClickSound()
        if (!inputRef.current) return

        try {
            inputRef.current.select()
            if (hasWriteText) {
                navigator.clipboard.writeText(inputRef.current.value)
            } else {
                // Fallback to execCommand
                document.execCommand('copy')
            }
        } catch (err) {
            console.error(err)
        }
    }, [hasWriteText])

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

    const handleClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

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
            <DialogContainer dialogOpen={Boolean(config.exportSaveFileDialogOpen)}>
                <DialogCloseButton
                    handleToggleDialog={confirmConfigToggle}
                    orientation='left'
                >
                    {'<'}
                </DialogCloseButton>
                <CentralizeDiv>
                    <h2>{intl.formatMessage({ id: 'config.exportSaveFile.title' })}</h2>
                    <SaveInput
                        ref={inputRef}
                        value={localStorage.getItem('gameState') || ''}
                        readOnly
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
