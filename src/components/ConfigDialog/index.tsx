import { configState } from '@state/atoms'
import { useCallback, useRef } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import DialogCloseButton from '@components/shared/DialogCloseButton'
import DialogBackground from '@components/shared/DialogBackground'
import DialogContainer from '@components/shared/DialogContainer'
import { ConfigRow } from './styled'
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
        [setConfig]
    )

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleCloseClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config.volume])

    const handleToggleConfigDialog = useCallback(() => {
        handleCloseClickSound()
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            configDialogOpen: !currentConfig.configDialogOpen,
        })
    }, [handleCloseClickSound, setConfig, config])

    const handleToggleConfirmDialog = useCallback(() => {
        const currentConfig = store.get(configState)
        setConfig({
            ...currentConfig,
            confirmDialogOpen: !currentConfig.confirmDialogOpen,
        })
    }, [setConfig])


    if(config.configDialogOpen) return (
        <>
            <DialogBackground handleToggleDialog={handleToggleConfigDialog} />
            <DialogContainer dialogOpen={Boolean(config.configDialogOpen)}>
                <DialogCloseButton handleToggleDialog={handleToggleConfigDialog} />
                <hr />
                <ConfigRow>
                    <FormattedMessage id="config.volume.title" values={{ volumeValue: (config.volume * 100).toFixed(0) }} tagName="p" />
                    <input
                        type="range"
                        max={100}
                        min={0}
                        value={config.volume * 100}
                        onChange={handleVolumeChange}
                    />
                </ConfigRow>
                <hr />
                <ConfigRow>
                    <button
                        style={{
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            handleToggleConfigDialog()
                            handleToggleConfirmDialog()
                        }}
                    >
                        {intl.formatMessage({ id: 'config.reset' })}
                    </button>
                </ConfigRow>
            </DialogContainer>
        </>
    )
}

export default ConfigDialog
