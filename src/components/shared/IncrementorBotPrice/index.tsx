import { IncrementorPrice, QuestionMarkParagraph } from './styled'
import { GiArtificialIntelligence } from 'react-icons/gi'
import formatLargeNumber from '@utils/formatLargeNumber'
import { Config, isAffordableState } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useAtomValue } from 'jotai'

interface IncrementorBotPriceProps {
  price: number[]
  item: Incrementor
  config: Config
}

const IncrementorBotPrice = ({ price, item, config }: IncrementorBotPriceProps) => {
    const intl = useIntl()
    const memoizedAtom = useMemo(() => {
        return isAffordableState(item.id)
    }, [item.id])
    const isAffordable = useAtomValue(memoizedAtom)
    const memoedBitAmount = useMemo(() => {
    // Buying Mode
        if (config?.botBulkMode === 1) {
            return formatLargeNumber(price[0], intl)
        }
        if (item?.units) {
            // Selling Mode
            if (config?.botBulkMode === 0 && config?.botBulkAmount === 1) {
                return formatLargeNumber(price[0] * 0.4, intl)
            }

            if (config?.botBulkMode === 0 && config?.botBulkAmount > 1) {
                return formatLargeNumber(price[1] * 0.4, intl)
            }
        }

        return 0
    }, [item, config, price, intl])
    
    if(!item?.revealed) return <QuestionMarkParagraph>?????????</QuestionMarkParagraph>

    return (
        <IncrementorPrice $affordable={isAffordable}>
            <GiArtificialIntelligence size={16} />
            {isNaN(Number(memoedBitAmount)) ? memoedBitAmount : Number(memoedBitAmount).toFixed(0)} {intl.formatMessage({ id: 'bits.bits' })}
        </IncrementorPrice>
    )
}

export default IncrementorBotPrice
