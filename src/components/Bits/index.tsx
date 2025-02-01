import { useRecoilState, useRecoilValue } from 'recoil'
import { bitState, calculatedEnterPressBitAmountState, configState, currentProductionState, enterPressesState } from '@state/atoms'
import { sound1, sound2, sound3 } from '@assets/sounds/enter'
import { FloatText, Aside, EnterIcon, EnterKeyButton } from './styled'
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import formatLargeNumber from '@utils/formatLargeNumber'
import { debounce } from 'lodash'
import { useIntl, FormattedMessage } from 'react-intl'

const sounds = [sound1, sound2, sound3]

const Bits = () => {
    const intl = useIntl()
    const [enterPresses, setEnterPressesState] = useRecoilState(enterPressesState)
    const [bits, setBits] = useRecoilState(bitState)
    const currentProduction = useRecoilValue(currentProductionState)
    const calculatedEnterPressBitAmount = useRecoilValue<number>(calculatedEnterPressBitAmountState)
    const config = useRecoilValue(configState)

    const [floatTexts, setFloatTexts] = useState<
        { id: number; x: number; y: number, value: string }[]
    >([])

    // Optimized memo with locale-specific dependency
    const formattedCurrentProduction = useMemo(
        () => formatLargeNumber(Number(currentProduction.toFixed(1)), intl, true),
        [currentProduction, intl]
    )

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const timeoutRef = useRef<Set<NodeJS.Timeout>>(new Set())

    // Audio cleanup effect
    useEffect(() => {
        audioRef.current = new Audio()
        
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.src = ''
                audioRef.current = null
            }
        }
    }, [])

    // Sound handlers with proper cleanup
    const handleEnterBitClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)]
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play().catch(() => {
                // Handle audio play restrictions
            })
        }
    }, [config.volume])

    const debouncedHandleEnterBitClickSound = useMemo(
        () => debounce(handleEnterBitClickSound, 80),
        [handleEnterBitClickSound]
    )

    // Floating text handler with timeout tracking
    const handleFloatingClickedTextValue = useCallback((e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
        const id = Date.now()
        const x = 'touches' in e 
            ? e.touches[0].clientX 
            : e.clientX
        const y = ('touches' in e 
            ? e.touches[0].clientY 
            : e.clientY) - 60

        const isAmountBelowOneMillion = calculatedEnterPressBitAmount < 1_000_000
        const displayValue = isAmountBelowOneMillion
            ? Number(calculatedEnterPressBitAmount.toFixed(2)).toLocaleString(config.currentLanguageLocale)
            : formatLargeNumber(Number(calculatedEnterPressBitAmount.toFixed(0)), intl) ?? ''

        setFloatTexts((prev) => [...prev, { id, x, y, value: displayValue }])

        const timeoutId = setTimeout(() => {
            setFloatTexts((prev) => prev.filter((text) => text.id !== id))
            timeoutRef.current.delete(timeoutId)
        }, 3000)

        timeoutRef.current.add(timeoutId)
    }, [setFloatTexts, calculatedEnterPressBitAmount, config.currentLanguageLocale, intl.locale])

    // Click handler with proper dependencies
    const handleEnterBitClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
            setEnterPressesState(prev => prev + 1)
            handleFloatingClickedTextValue(e)
            setBits(curr => curr + calculatedEnterPressBitAmount)
            debouncedHandleEnterBitClickSound()
        },
        [setEnterPressesState, handleFloatingClickedTextValue, setBits, calculatedEnterPressBitAmount, debouncedHandleEnterBitClickSound]
    )

    // Cleanup effect for timers and debounce
    useEffect(() => {
        return () => {
            debouncedHandleEnterBitClickSound.cancel()
            timeoutRef.current.forEach(clearTimeout)
            timeoutRef.current.clear()
        }
    }, [debouncedHandleEnterBitClickSound])

    return (
        <Aside>
            <h3><FormattedMessage id="bits.bitsPerSecond" /> {formattedCurrentProduction}</h3>
            <h3>{formatLargeNumber(Number(bits.toFixed(0)), intl)} bits</h3>
            <h3>{enterPresses} enterPresses</h3>
            <EnterKeyButton
                onClick={handleEnterBitClick}
                onTouchStart={handleEnterBitClick}
            >
                <EnterIcon/>
            </EnterKeyButton>

            {floatTexts.map((text) => (
                <FloatText
                    key={text.id}
                    $textX={text.x}
                    $textY={text.y}
                >
                    +{text.value} bits
                </FloatText>
            ))}
        </Aside>
    )
}

export default Bits