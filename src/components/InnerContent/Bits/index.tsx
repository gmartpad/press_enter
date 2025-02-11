import { useAtom, useAtomValue, useStore } from 'jotai'
import { 
    bitState, 
    calculatedEnterPressBitAmountState, 
    configState, 
    currentProductionState, 
    enterPressesState 
} from '@state/atoms'
import { sound1, sound2, sound3 } from '@assets/sounds/enter'
import { FloatText, Aside, EnterIcon, EnterKeyButton, BitsH3, BitsInfo, BitsSpan, MobileSpacer } from './styled'
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import formatLargeNumber from '@utils/formatLargeNumber'
import { debounce } from 'lodash'
import { useIntl, FormattedMessage } from 'react-intl'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'

const sounds = [sound1, sound2, sound3]

const Bits = () => {
    const store = useStore()
    const intl = useIntl()
    const { windowInnerWidth, windowInnerHeight } = useWindowInnerValues()
    const isClick = useDetectButtonClickBoolean()
    const [enterPresses, setEnterPressesState] = useAtom(enterPressesState)
    const [bits, setBits] = useAtom(bitState)
    const currentProduction = useAtomValue(currentProductionState)
    const calculatedEnterPressBitAmount = useAtomValue(calculatedEnterPressBitAmountState)
    const config = useAtomValue(configState)

    const bitsInfoRef = useRef<HTMLDivElement | null>(null)
    const enterButtonRef = useRef<HTMLButtonElement | null>(null)

    const [floatTexts, setFloatTexts] = useState<
        { id: number; x: number; y: number, value: string }[]
    >([])

    const formattedCurrentProduction = useMemo(
        () => formatLargeNumber(Number(currentProduction.toFixed(1)), intl),
        [currentProduction, intl]
    )

    const asideDisplayValue = useMemo(() => {
        if((Number(bitsInfoRef.current?.offsetHeight) + Number(enterButtonRef.current?.offsetHeight)) > window.innerHeight) {
            return 'block'
        }

        return 'flex'
    }, [window.innerHeight])

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const timeoutRef = useRef<Set<NodeJS.Timeout>>(new Set())

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

    const handleFloatingClickedTextValue = useCallback((
        e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
    ) => {
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
    }, [setFloatTexts, calculatedEnterPressBitAmount, config.currentLanguageLocale, intl])

    const handleEnterBitClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
            const currentBits = store.get(bitState)
            const currentEnterPresses = store.get(enterPressesState)
            setEnterPressesState(currentEnterPresses + 1)
            handleFloatingClickedTextValue(e)
            setBits(currentBits + calculatedEnterPressBitAmount)
            debouncedHandleEnterBitClickSound()
        },
        [setEnterPressesState, handleFloatingClickedTextValue, setBits, calculatedEnterPressBitAmount, debouncedHandleEnterBitClickSound, store]
    )

    useEffect(() => {
        return () => {
            debouncedHandleEnterBitClickSound.cancel()
            timeoutRef.current.forEach(clearTimeout)
            timeoutRef.current.clear()
        }
    }, [debouncedHandleEnterBitClickSound])

    return (
        <Aside $displayValue={asideDisplayValue} $windowInnerWidth={windowInnerWidth}>
            <MobileSpacer $top={true} $windowInnerWidth={windowInnerWidth} $windowInnerHeight={windowInnerHeight}    />
            <BitsInfo $windowInnerWidth={windowInnerWidth} ref={bitsInfoRef} >
                <BitsSpan>
                    <BitsH3><FormattedMessage id="bits.bitsPerSecond" /></BitsH3>
                    <BitsH3 style={{ color: '#0f0' }}>{" " + formattedCurrentProduction} bits</BitsH3>
                </BitsSpan>
                <BitsSpan>
                    <BitsH3><FormattedMessage id="bits.totalAmountOfBits"/></BitsH3>
                    <BitsH3 style={{ color: '#0f0' }}>{formatLargeNumber(Number(bits.toFixed(0)), intl)} bits</BitsH3>
                </BitsSpan>
                <BitsSpan>
                    <BitsH3><FormattedMessage id="bits.enterPressesAmount"/></BitsH3>
                    <BitsH3 style={{ color: '#0f0' }}>{enterPresses}</BitsH3>
                </BitsSpan>
            </BitsInfo>
            <EnterKeyButton
                $windowInnerWidth={windowInnerWidth}
                ref={enterButtonRef}
                onClick={(e) => {
                    if(isClick) {
                        handleEnterBitClick(e)
                    }
                }}
                onTouchStart={(e) => {  
                    if(!isClick) {
                        handleEnterBitClick(e)
                    }
                }}
            >
                <EnterIcon/>
            </EnterKeyButton>
            <MobileSpacer $top={false} $windowInnerWidth={windowInnerWidth} $windowInnerHeight={windowInnerHeight}    />

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