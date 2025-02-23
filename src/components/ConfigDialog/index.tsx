import { configState, saveGameState } from '@state/atoms'
import { useCallback, useRef } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { ConfigResetButton, ConfigResetButtonH2, ConfigRow, SaveFileButton, SaveFileButtonH2, VolumeSlider } from './styled'
import { sound1 } from '@assets/sounds/sharedClick'
import { useAtom, useStore } from 'jotai'

const ConfigDialog = () => {
    const store = useStore()
    const intl = useIntl()
    const [config, setConfig] = useAtom(configState)

    const handleVolumeChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentConfig = store.get(configState)
            setConfig({
                ...currentConfig,
                volume: Number(e.target.value) / 100,
            })
        },
        [setConfig, store]
    )

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleToggleConfigDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            configDialogOpen: !currentConfig.configDialogOpen,
        })
    }, [handleClickSound, setConfig, store])

    const handleToggleConfirmDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            confirmDialogOpen: !currentConfig.confirmDialogOpen,
        })
    }, [handleClickSound, setConfig, store])

    const handleToggleExportSaveFileDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            exportSaveFileDialogOpen: !currentConfig.exportSaveFileDialogOpen,
        })
    }, [handleClickSound, setConfig, store])

    const handleToggleImportSaveFileDialog = useCallback(() => {
        handleClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            importSaveFileDialogOpen: !currentConfig.importSaveFileDialogOpen,
        })
    }, [handleClickSound, setConfig, store])

    if(config.configDialogOpen) return (
        <>
            <DialogBackground handleToggleDialog={handleToggleConfigDialog} />
            <DialogContainer dialogOpen={Boolean(config.configDialogOpen)}>
                <DialogCloseButton 
                    handleToggleDialog={handleToggleConfigDialog}
                    orientation='right'
                >
                    X
                </DialogCloseButton>
                <hr />
                <ConfigRow>
                    <FormattedMessage id="config.volume.title" values={{ volumeValue: (config.volume * 100).toFixed(0) }} tagName="p" />
                    <VolumeSlider
                        type="range"
                        max={100}
                        min={0}
                        value={config.volume * 100}
                        onChange={handleVolumeChange}
                    />
                </ConfigRow>
                <hr />
                <ConfigRow>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            gap: '10px',
                        }}
                    >
                        <SaveFileButton 
                            onClick={() => {
                                saveGameState(store.get)
                                handleToggleConfigDialog()
                                handleToggleExportSaveFileDialog()
                            }}
                        >
                            <SaveFileButtonH2>
                                <FormattedMessage id="config.exportSaveFile.title" />
                            </SaveFileButtonH2>
                        </SaveFileButton>
                        <SaveFileButton 
                            onClick={() => {
                                handleToggleConfigDialog()
                                handleToggleImportSaveFileDialog()
                            }}
                        >
                            <SaveFileButtonH2>
                                <FormattedMessage id="config.importSaveFile.title" />
                            </SaveFileButtonH2>
                        </SaveFileButton>
                    </div>
                </ConfigRow>
                <hr />
                <ConfigRow>
                    <ConfigResetButton
                        onClick={() => {
                            handleToggleConfigDialog()
                            handleToggleConfirmDialog()
                        }}
                    >
                        <ConfigResetButtonH2>
                            {intl.formatMessage({ id: 'config.reset' })}
                        </ConfigResetButtonH2>
                    </ConfigResetButton>
                </ConfigRow>
            </DialogContainer>
        </>
    )
}

export default ConfigDialog
