import { configState } from '@state/atoms'
import { useCallback, useEffect, useRef } from 'react'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { useIntl } from 'react-intl'
import { useAtom, useStore } from 'jotai'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import { CentralizeDiv } from '@components/ConfirmDialog/styled'
import { SaveInput, CopyButton } from './styled'
import DialogCloseButton from '@components/shared/DialogCloseButton'

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

    const handleCopy = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.select()
            navigator.clipboard.writeText(inputRef.current.value)
        }
    }, [])

    const handleToggleExportSaveFileDialog = useCallback(() => {
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            exportSaveFileDialogOpen: !currentConfig.exportSaveFileDialogOpen,
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
                </CentralizeDiv>
            </DialogContainer>
        </>
    )
}

export default ExportSaveFileDialog
