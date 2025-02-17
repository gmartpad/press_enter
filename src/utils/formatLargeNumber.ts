import { type IntlShape } from "react-intl"

interface Scale {
    value: number
    key: string
    requiresPlural?: boolean
}

function formatLargeNumber(number: number, intl?: IntlShape, bitsComponent: boolean = false) {
    // Define number scales up to 1e180
    const scales: Scale[] = [
        { value: 1e180, key: 'sexagintillion', requiresPlural: true },
        { value: 1e177, key: 'novemquinquagintillion' },
        { value: 1e174, key: 'octoquinquagintillion' },
        { value: 1e171, key: 'septenquinquagintillion' },
        { value: 1e168, key: 'sesquinquagintillion' },
        { value: 1e165, key: 'quinquinquagintillion' },
        { value: 1e162, key: 'quattuorquinquagintillion' },
        { value: 1e159, key: 'trequinquagintillion' },
        { value: 1e156, key: 'duoquinquagintillion' },
        { value: 1e153, key: 'unquinquagintillion' },
        { value: 1e150, key: 'quinquagintillion' },
        { value: 1e147, key: 'novemquadragintillion' },
        { value: 1e144, key: 'octoquadragintillion' },
        { value: 1e141, key: 'septenquadragintillion' },
        { value: 1e138, key: 'sesquadragintillion' },
        { value: 1e135, key: 'quinquadragintillion' },
        { value: 1e132, key: 'quattuorquadragintillion' },
        { value: 1e129, key: 'trequadragintillion' },
        { value: 1e126, key: 'duoquadragintillion' },
        { value: 1e123, key: 'unquadragintillion' },
        { value: 1e120, key: 'quadragintillion' },
        { value: 1e117, key: 'novemtrigintillion' },
        { value: 1e114, key: 'octotrigintillion' },
        { value: 1e111, key: 'septentrigintillion' },
        { value: 1e108, key: 'sestrigintillion' },
        { value: 1e105, key: 'quintrigintillion' },
        { value: 1e102, key: 'quattuortrigintillion' },
        { value: 1e99, key: 'tretrigintillion' },
        { value: 1e96, key: 'duotrigintillion' },
        { value: 1e93, key: 'untrigintillion' },
        { value: 1e90, key: 'trigintillion' },
        { value: 1e87, key: 'novemvigintillion' },
        { value: 1e84, key: 'octovigintillion' },
        { value: 1e81, key: 'septenvigintillion' },
        { value: 1e78, key: 'sesvigintillion' },
        { value: 1e75, key: 'quinvigintillion' },
        { value: 1e72, key: 'quattuorvigintillion' },
        { value: 1e69, key: 'trevigintillion' },
        { value: 1e66, key: 'duovigintillion' },
        { value: 1e63, key: 'unvigintillion' },
        { value: 1e60, key: 'vigintillion' },
        { value: 1e57, key: 'novemdecillion' },
        { value: 1e54, key: 'octodecillion' },
        { value: 1e51, key: 'septendecillion' },
        { value: 1e48, key: 'sexdecillion' },
        { value: 1e45, key: 'quindecillion' },
        { value: 1e42, key: 'quattuordecillion' },
        { value: 1e39, key: 'tredecillion' },
        { value: 1e36, key: 'duodecillion' },
        { value: 1e33, key: 'undecillion' },
        { value: 1e30, key: 'decillion' },
        { value: 1e27, key: 'nonillion' },
        { value: 1e24, key: 'octillion' },
        { value: 1e21, key: 'septillion' },
        { value: 1e18, key: 'quintillion' },
        { value: 1e15, key: 'quadrillion' },
        { value: 1e12, key: 'trillion' },
        { value: 1e9, key: 'billion' },
        { value: 1e6, key: 'million', requiresPlural: true },
    ]

    // If the number is less than a million, return as is
    if (number < 1e6) {
        return number.toString()
    }

    // Find the appropriate scale
    for (const scale of scales) {
        if (number >= scale.value) {
            // Divide by scale value and round to 3 decimal places
            const scaledNumber = number / scale.value
            // Format with exactly 3 decimal places
            const formattedNumber = Math.floor(scaledNumber * 1000) / 1000
            // Convert to Number with 3 decimal palces
            const trimmedNumber = Number(formattedNumber.toFixed(3))

            // If intl is provided, use it to translate the scale name
            if(intl) {
                // Get the base message ID
                const baseMessageId = `bitNumber.${scale.key}`

                // For languages that need plural forms
                if (scale.requiresPlural && trimmedNumber > 1 && 
                    ['pt-br', 'fr', 'ar', 'ru'].includes(intl.locale)) {
                    // Try to get plural form first, fallback to singular
                    try {
                        const pluralName = intl.formatMessage({
                            id: `${baseMessageId}.plural`,
                            defaultMessage: intl.formatMessage({
                                id: baseMessageId,
                                defaultMessage: scale.key
                            })
                        })
                        return `${trimmedNumber} ${pluralName}${intl.locale !== 'en' && !bitsComponent ? ' de' : ''}`
                    } catch {
                        // If plural form doesn't exist, use singular
                        const singularName = intl.formatMessage({
                            id: baseMessageId,
                            defaultMessage: scale.key
                        })
                        return `${trimmedNumber} ${singularName}${intl.locale !== 'en' && !bitsComponent ? ' de' : ''}`
                    }
                }
                
                // For other cases, use the base message
                const scaleName = intl.formatMessage({
                    id: baseMessageId,
                    defaultMessage: scale.key
                })
                return `${trimmedNumber} ${scaleName}${intl.locale !== 'en' && !bitsComponent ? ' de' : ''}`
            }

            // Fallback if no intl is provided
            return `${trimmedNumber} ${scale.key}`
        }
    }
}

export default formatLargeNumber
