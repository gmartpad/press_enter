import { type IntlShape } from "react-intl"

interface TimeUnit {
    value: number
    key: string
}

function formatTimeNumber(timeInSeconds: number, intl?: IntlShape): string {

    const MINUTE_IN_SECONDS = 60
    const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS
    const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS
    const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS
    const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS
    const YEAR_IN_SECONDS = 12 * MONTH_IN_SECONDS
    const DECADE_IN_SECONDS = 10 * YEAR_IN_SECONDS
    const CENTURY_IN_SECONDS = 10 * DECADE_IN_SECONDS
    const MILLENIA_IN_SECONDS = 10 * CENTURY_IN_SECONDS
    
    const timeUnits: TimeUnit[] = [
        { value: MILLENIA_IN_SECONDS, key: 'millennia' },
        { value: CENTURY_IN_SECONDS, key: 'centuries' },
        { value: DECADE_IN_SECONDS, key: 'decades' },
        { value: YEAR_IN_SECONDS, key: 'years' },
        { value: MONTH_IN_SECONDS, key: 'months' },
        { value: WEEK_IN_SECONDS, key: 'weeks' },
        { value: DAY_IN_SECONDS, key: 'days' },
        { value: HOUR_IN_SECONDS, key: 'hours' },
        { value: MINUTE_IN_SECONDS, key: 'minutes' },
        { value: 1, key: 'seconds' }
    ]

    // Special case for fractions of a second
    if (timeInSeconds < 1) {
        const timeName = intl?.formatMessage({
            id: 'secondsNumber.seconds.singular',
            defaultMessage: 'segundos'
        }) ?? ''

        const worthName = intl?.formatMessage({
            id: 'secondsNumber.worth',
            defaultMessage: 'worth'
        }) ?? ''
        return `${Math.ceil(timeInSeconds)} ${timeName} ${worthName}`
    }

    // Find the largest unit that fits
    for (const unit of timeUnits) {
        if (timeInSeconds >= unit.value) {
            const count = Math.round(timeInSeconds / unit.value)
            if(intl) {
                const form = count === 1 ? `secondsNumber.${unit.key}.singular` : `secondsNumber.${unit.key}.plural`
                const timeName = intl.formatMessage({
                    id: form,
                    defaultMessage: 'segundos'
                })

                const worthName = intl.formatMessage({
                    id: 'secondsNumber.worth',
                    defaultMessage: 'worth'
                })
                return `${count} ${timeName} ${worthName}`
            }
        }
    }

    const timeName = intl?.formatMessage({
        id: 'secondsNumber.seconds.plural',
        defaultMessage: 'segundos'
    }) ?? ''

    const worthName = intl?.formatMessage({
        id: 'secondsNumber.worth',
        defaultMessage: 'worth'
    }) ?? ''

    return `0 ${timeName} ${worthName}`
}

export default formatTimeNumber