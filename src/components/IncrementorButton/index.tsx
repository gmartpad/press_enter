import { ReactNode, useCallback } from 'react'
import { IncrementorButton as StyledIncrementorButton } from './styled'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
    configState,
    type Config,
    currentHoveredBotItemState,
    isAffordableState,
} from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { debounce } from 'lodash'

import useUpdateAutoIncrementors from '@hooks/useUpdateAutoIncrementors'

import { wrong, buyBot, sellBot } from '@assets/sounds/botClick'

const buySounds = [buyBot]
const sellSounds = [sellBot]
const wrongSounds = [wrong]

function IncrementorButton({ item, children }: { item: Incrementor; children: ReactNode }) {
    const isAffordable = useRecoilValue(isAffordableState(item.id))
    const [, setCurrentHoveredBotItem] = useRecoilState(currentHoveredBotItemState)
    const config = useRecoilValue<Config>(configState)

    const updateAutoIncrementors = useUpdateAutoIncrementors()

    const handleEnterBotClick = useCallback(
        debounce(async () => {
            let selectedSound: string | undefined
            if(isAffordable) {
                if(config.botBulkMode === 1) {
                    selectedSound = buySounds[Math.floor(Math.random() * buySounds.length)]
                }

                if(config.botBulkMode === 0) {
                    selectedSound = sellSounds[Math.floor(Math.random() * sellSounds.length)]
                }
            } else {
                selectedSound = wrongSounds[0]
            }
            const audio = new Audio(selectedSound)
            audio.volume = config.volume
            await audio.play()
        }, 40),
        [config, isAffordable]
    )

    return (
        <StyledIncrementorButton
            className="botBuy"
            onClick={async () => {
                updateAutoIncrementors(item)
                handleEnterBotClick()
            }}
            onMouseEnter={() => setCurrentHoveredBotItem(item)}
            onMouseLeave={() => setCurrentHoveredBotItem({} as Incrementor)}
            $affordable={isAffordable}
            $revealed={item.revealed}
        >
            {children}
        </StyledIncrementorButton>
    )
}

export default IncrementorButton
