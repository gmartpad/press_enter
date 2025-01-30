import { useRecoilState, useRecoilValue } from 'recoil'
import { calculatedEnterPressBitAmountState, configState, currentProductionState, enterPressesState } from '@state/atoms'

import { sound1, sound2, sound3 } from '@assets/sounds/enter'
import { FloatText, Aside, EnterIcon, EnterKeyButton } from './styled'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import formatLargeNumber from '@utils/formatLargeNumber'
import useBitUpdater from '@hooks/useBitUpdater'
import { debounce } from 'lodash'
import { useIntl, FormattedMessage } from 'react-intl'

const sounds = [sound1, sound2, sound3]

const Bits = () => {
    const intl = useIntl()
    const [enterPresses, setEnterPressesState] = useRecoilState(enterPressesState)
    const currentProduction = useRecoilValue(currentProductionState)
    const calculatedEnterPressBitAmount = useRecoilValue<number>(calculatedEnterPressBitAmountState)
    const { setBits, bits } = useBitUpdater()
    const config = useRecoilValue(configState)

    const [floatTexts, setFloatTexts] = useState<
        { id: number; x: number; y: number, value: string }[]
    >([])

    const formattedCurrentProduction = useMemo(
        () => formatLargeNumber(Number(currentProduction.toFixed(1)), intl, true),
        [currentProduction, intl]
    )

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleEnterBitClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)]
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config])

    const debouncedHandleEnterBitClickSound = useCallback(
        debounce(handleEnterBitClickSound, 80),
        [handleEnterBitClickSound]
    )

    const handleFloatingClickedTextValue = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
        const id = Date.now()
        const x = 'touches' in e 
            ? e.touches[0].clientX 
            : e.clientX
        const y = 'touches' in e 
            ? e.touches[0].clientY - 60
            : e.clientY - 60

        const value = Number(calculatedEnterPressBitAmount.toFixed(2)).toLocaleString(config.currentLanguageLocale)

        setFloatTexts((prev) => [...prev, { id, x, y, value }])

        setTimeout(() => {
            setFloatTexts((prev) => prev.filter((text) => text.id !== id))
        }, 3000)
    }, [setFloatTexts, calculatedEnterPressBitAmount, config])

    const handleEnterBitClick = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
            setEnterPressesState((prevValue) => prevValue + 1)
            handleFloatingClickedTextValue(e)
            setBits((currVal) => currVal + calculatedEnterPressBitAmount)
            debouncedHandleEnterBitClickSound()
        },
        [
            setEnterPressesState, 
            setBits, 
            debouncedHandleEnterBitClickSound, 
            handleFloatingClickedTextValue, 
            calculatedEnterPressBitAmount
        ]
    )

    return (
        <Aside>
            <h3><FormattedMessage id="bits.bitsPerSecond" /> {formattedCurrentProduction}</h3>
            <h3>{formatLargeNumber(Number(bits.toFixed(0)), intl)} bits</h3>
            <h3>{enterPresses} enterPresses</h3>
            <EnterKeyButton
                onClick={(e) => handleEnterBitClick(e)}
                onTouchStart={(e) => handleEnterBitClick(e)}
            >
                <EnterIcon/>
            </EnterKeyButton>

            {floatTexts.map((text) => (
                <FloatText
                    key={text.id}
                    $textX={text.x}
                    $textY={text.y}
                >
                    +{formatLargeNumber(Number(Number(text.value).toFixed(0)), intl)} bits
                </FloatText>
            ))}
        </Aside>
    )
}

export default Bits
