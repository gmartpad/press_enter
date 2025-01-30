import { getIncrementorMultiplier } from '@state/atoms'
import { Incrementor } from '@state/defaultAutoIncrementors'
import formatLargeNumber from '@utils/formatLargeNumber'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useRecoilValue } from 'recoil'
import { Stat } from '../Stat.model'
import SingleStat from '../SingleStat'
import { DescriptionH3, GenericStatsContainer, NameH2 } from '../styled'

const BotStats = ({
    incrementor
}: {
    incrementor: Incrementor
}) => {
    const intl = useIntl()

    const { id, units, pricePerUnit, productionPerUnit, bitsProducedSoFar } = incrementor

    const incrementorMultiplier = useRecoilValue(getIncrementorMultiplier(String(incrementor.id)))

    const currentPrice = formatLargeNumber(pricePerUnit, intl)

    const currentUnitProduction = formatLargeNumber(Number((productionPerUnit * incrementorMultiplier).toFixed(2)), intl)

    const currentBitsProducedSoFar = formatLargeNumber(Number(bitsProducedSoFar.toFixed(0)), intl)

    const stats = useMemo<Stat[]>(() => [
        {
            label: intl.formatMessage({ id: 'statsSection.botStats.units.label' }),
            value: `${units}`
        },
        {
            label: intl.formatMessage({ id: 'statsSection.botStats.unitPrice.label' }),
            value: `${currentPrice} bits`
        },
        {
            label: intl.formatMessage({ id: 'statsSection.botStats.unitProduction.label' }),
            value: `${currentUnitProduction} bits`
        },
        {
            label: intl.formatMessage({ id: 'statsSection.botStats.bitsProducedSoFar.label' }),
            value: `${currentBitsProducedSoFar} bits`
        }
    ], [intl, units, currentPrice, currentUnitProduction, currentBitsProducedSoFar])

    return (
        <GenericStatsContainer>
            <span><NameH2>{intl.formatMessage({ id: `botBuyList.${id}.name` })}</NameH2></span>
            <span><DescriptionH3>{intl.formatMessage({ id: `botBuyList.${id}.description` })}</DescriptionH3></span>
            {stats.map((stat, key) => (
                <SingleStat stat={stat} key={key}/>
            ))}
        </GenericStatsContainer>
    )
}

export default BotStats