import { useAtom, useAtomValue, useSetAtom, useStore } from 'jotai'
import { 
    autoIncrementorsState,
    bitState, 
    calculatedEnterPressBitAmountState, 
    clearIntervalsState, 
    configState, 
    currentProductionState, 
    enterPressesState 
} from '@state/atoms'
import { sound1, sound2, sound3 } from '@assets/sounds/enter'
import { FloatText, Aside, EnterIcon, EnterKeyButton, BitsH3, BitsInfo, BitsSpan, MobileSpacer } from './styled'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import formatLargeNumber from '@utils/formatLargeNumber'
import { useIntl, FormattedMessage } from 'react-intl'
import useWindowInnerValues from '@hooks/useWindowInnerValues'

// At the top of the file, outside the component
const audioFiles = [
    new Audio(sound1),
    new Audio(sound2),
    new Audio(sound3)
]

const Bits = () => {
    const store = useStore()
    const intl = useIntl()
    const { windowInnerWidth, windowInnerHeight } = useWindowInnerValues()
    const touchEventFired = useRef<boolean>(false)
    const [enterPresses, setEnterPressesState] = useAtom(enterPressesState)
    const setClearIntervals = useSetAtom(clearIntervalsState)
    const [bits, setBits] = useAtom(bitState)
    const currentProduction = useAtomValue(currentProductionState)
    const calculatedEnterPressBitAmount = useAtomValue(calculatedEnterPressBitAmountState)
    const config = useAtomValue(configState)

    const asideRef = useRef<HTMLDivElement | null>(null)
    const bitsInfoRef = useRef<HTMLDivElement | null>(null)
    const enterButtonRef = useRef<HTMLButtonElement | null>(null)

    const [floatTexts, setFloatTexts] = useState<
        { id: number; x: number; y: number, value: string }[]
    >([])

    const audioRefs = useRef(audioFiles)
    
    const currentAudioIndex = useRef(0)
    
    const handleEnterBitClickSound = useCallback(() => {
        const audioElements = audioRefs.current
        const currentAudio = audioElements[currentAudioIndex.current]
        
        if (currentAudio) {
            currentAudio.volume = config.volume
            currentAudio.currentTime = 0
            currentAudio.play()
            currentAudioIndex.current = (currentAudioIndex.current + 1) % audioElements.length
        }
    }, [config.volume])

    const handleFloatingClickedTextValue = useCallback((
        e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement> | globalThis.KeyboardEvent
    ) => {
        const id = Date.now()

        const x = (() => {
            if('touches' in e) {
                return e.touches[0].clientX 
            }

            if('clientX' in e) {
                return e.clientX
            }

            const rect = enterButtonRef.current?.getBoundingClientRect()
            
            return ((rect?.right ?? 0) + (rect?.left ?? 0)) / 2
        })()

        const y = (() => {
            if('touches' in e) {
                return e.touches[0].clientY 
            }

            if('clientX' in e) {
                return e.clientY - 60
            }

            const rect = enterButtonRef.current?.getBoundingClientRect()

            return (rect?.y ?? 0) - 60
        })()

        const isAmountBelowOneMillion = calculatedEnterPressBitAmount < 1_000_000
        const displayValue = isAmountBelowOneMillion
            ? Number(calculatedEnterPressBitAmount.toFixed(2)).toLocaleString(config.currentLanguageLocale)
            : formatLargeNumber(Number(calculatedEnterPressBitAmount.toFixed(0)), intl) ?? ''

        setFloatTexts((prev) => [...prev, { id, x, y, value: displayValue }])

        setTimeout(() => {
            setFloatTexts((prev) => prev.filter((text) => text.id !== id))
        }, 2000)
    }, [setFloatTexts, calculatedEnterPressBitAmount, config.currentLanguageLocale, intl])

    const handleEnterBitClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement> | globalThis.KeyboardEvent) => {
            const trueUserInteraction = e.isTrusted && 
            (!('key' in e) || ((e as globalThis.KeyboardEvent).key === 'Enter') && config.physicalEnter) && 
            (
                e.type !== 'keydown' && 
              e.type !== 'keypress' && 
              e.type !== 'keyup' || 
              ((e as globalThis.KeyboardEvent).key === 'Enter' && config.physicalEnter)
            )
            if(trueUserInteraction) {
                const currentBits = store.get(bitState)
                const currentEnterPresses = store.get(enterPressesState)
                
                if(currentBits === 0 && currentEnterPresses === 0) {
                    setClearIntervals(false)
                }

                setEnterPressesState(currentEnterPresses + 1)
                handleFloatingClickedTextValue(e)
                setBits(currentBits + calculatedEnterPressBitAmount)
                handleEnterBitClickSound()
            }
        },
        [setEnterPressesState, handleFloatingClickedTextValue, setBits, calculatedEnterPressBitAmount, store, config]
    )

    const formattedCurrentProduction = useMemo(
        () => formatLargeNumber(Number(currentProduction.toFixed(1)), intl),
        [currentProduction, intl, autoIncrementorsState]
    )

    const asideDisplayValue = useMemo(() => {
        if((Number(bitsInfoRef.current?.offsetHeight) + Number(enterButtonRef.current?.offsetHeight)) > window.innerHeight) {
            return 'block'
        }

        return 'flex'
    }, [window.innerHeight])

    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === 'Enter' && !e.repeat) {
                handleEnterBitClick(e)
            }
        }
      
        window.addEventListener('keydown', handleKeyDown)
      
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleEnterBitClick])

    return (
        <Aside 
            ref={asideRef}
            $displayValue={asideDisplayValue} 
            $windowInnerWidth={windowInnerWidth}
        >
            <MobileSpacer $top={true} $windowInnerWidth={windowInnerWidth} $windowInnerHeight={windowInnerHeight}    />
            <BitsInfo $windowInnerWidth={windowInnerWidth} ref={bitsInfoRef} >
                <BitsSpan>
                    <BitsH3><FormattedMessage id="bits.bitsPerSecond" /></BitsH3>
                    <BitsH3 $color='#0f0'>
                        <FormattedMessage id="bits.currentProduction" values={{ production: formattedCurrentProduction }} />
                    </BitsH3>
                </BitsSpan>
                <BitsSpan>
                    <BitsH3><FormattedMessage id="bits.totalAmountOfBits"/></BitsH3>
                    <BitsH3 $color='#0f0'>
                        {formatLargeNumber(Number(bits.toFixed(0)), intl)} <FormattedMessage id="bits.bits" />
                    </BitsH3>
                </BitsSpan>
                <BitsSpan>
                    <BitsH3><FormattedMessage id="bits.enterPressesAmount"/></BitsH3>
                    <BitsH3 $color='#0f0'>{enterPresses}</BitsH3>
                </BitsSpan>
            </BitsInfo>
            <EnterKeyButton
                $windowInnerWidth={windowInnerWidth}
                ref={enterButtonRef}
                onClick={(e) => {
                    if (!touchEventFired.current) {
                        const trueClick = e.isTrusted && e.detail > 0
                        if(trueClick) {
                            handleEnterBitClick(e)
                        }
                    }
                    // Reset the flag for next interaction
                    touchEventFired.current = false
                }}
                onTouchStart={(e) => { 
                    touchEventFired.current = true
                    const trueTouch = e.isTrusted && e.touches.length > 0
                    if(trueTouch) {
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
                    +{text.value} <FormattedMessage id="bits.bits" />
                </FloatText>
            ))}
        </Aside>
    )
}

export default Bits