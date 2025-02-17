import { Stat } from '../Stat.model'
import { StatLabel, StatSpan, StatValue } from '../SingleStat/styled'

const SingleStat = ({
    stat
}: {
    stat: Stat
}) => {
    return (
        <StatSpan>
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>{stat.value}</StatValue>
        </StatSpan>
    )
}

export default SingleStat