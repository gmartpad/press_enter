import { Stat } from '../Stat.model'
import { StatLabelH3, StatSpan, StatValueH3 } from '../SingleStat/styled'

const SingleStat = ({
    stat
}: {
    stat: Stat
}) => {
    return (
        <StatSpan>
            <StatLabelH3>{stat.label}</StatLabelH3>
            <StatValueH3>{stat.value}</StatValueH3>
        </StatSpan>
    )
}

export default SingleStat