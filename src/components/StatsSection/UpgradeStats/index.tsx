import { Upgrade } from '@state/upgrades'
import formatLargeNumber from '@utils/formatLargeNumber'
import { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { StatLabel, StatSpan, StatValue } from '../SingleStat/styled'
import { GenericStatsContainer, NameH2 } from '../styled'


const UpgradeStats = ({
    upgrades
}: {
    upgrades: Upgrade[]
}) => {
    const intl = useIntl()

    const currentIncrementorId = useMemo(() => upgrades[0].incrementorId, [upgrades])

    const isGlobalBits = useMemo(() => currentIncrementorId === 'globalBits', [currentIncrementorId])

    const isPressEnter = useMemo(() => currentIncrementorId === 'pressEnter', [currentIncrementorId])

    const costOfUpgrades = useMemo(() => {
        const cost = upgrades.reduce((acc, value) => acc + value.cost, 0)
        return `${formatLargeNumber(cost, intl)} ${intl.formatMessage({ id: 'bits.bits' })}`
    }, [upgrades, intl])  

    const hasAdditiveEffects = useMemo(() => {
        if(isGlobalBits) {
            return !!upgrades[0].effects.global?.additive
        }

        if(!isGlobalBits) {
            return !!upgrades[0].effects.specific?.additive
        }

        return false
    }, [upgrades, isGlobalBits])

    const hasMultiplicativeEffects = useMemo(() => {
        if(isGlobalBits) {
            return !!upgrades[0].effects.global?.multiplicative
        }

        if(!isGlobalBits) {
            return !!upgrades[0].effects.specific?.multiplicative
        }

        return false
    }, [upgrades, isGlobalBits])

    const currentAdditiveEffects = useMemo(() => {
        let additiveEffects: number = 0
        if(isGlobalBits) {
            additiveEffects = upgrades.reduce((acc, value) => {
                const percentageValue = (100 * (value?.effects?.global?.additive ?? 0)) 
                return acc + percentageValue
            }, 0)
        }
        if(!isGlobalBits) {
            additiveEffects = upgrades.reduce((acc, value) => {
                const percentageValue = (100 * (value?.effects?.specific?.additive ?? 0)) 
                return acc + percentageValue
            }, 0)
        }
        return additiveEffects
    }, [upgrades, isGlobalBits])

    const currentMultiplicativeEffects = useMemo(() => {
        let multiplicativeEffects: number = 0
        if(isGlobalBits) {
            multiplicativeEffects = upgrades.reduce((acc, value) => {
                const multiplicativeValue = value?.effects?.global?.multiplicative ?? 0
                return acc * multiplicativeValue
            }, 1)
        }
        if(!isGlobalBits) {
            multiplicativeEffects = upgrades.reduce((acc, value) => {
                const multiplicativeValue = value?.effects?.specific?.multiplicative ?? 0
                return acc * multiplicativeValue
            }, 1)
        }
        return multiplicativeEffects
    }, [upgrades, isGlobalBits])

    return (
        <GenericStatsContainer>
            <NameH2>{intl.formatMessage({ id: `botBuyList.${upgrades[0].incrementorId}.name` })}</NameH2>
            <StatSpan>
                <StatLabel>
                    <FormattedMessage 
                        id="statsSection.upgradeStats.upgradesBought.label"
                    />
                </StatLabel>
                <StatValue>{upgrades.length}</StatValue>
            </StatSpan>

            <StatSpan>
                <StatLabel>
                    <FormattedMessage 
                        id="statsSection.upgradeStats.upgradesBitCost.label" 
                    />
                </StatLabel>
                <StatValue>{costOfUpgrades}</StatValue>
            </StatSpan>

            {hasAdditiveEffects && isGlobalBits && (
                <StatSpan>
                    <StatLabel>
                        <FormattedMessage
                            id="statsSection.upgradeStats.globalProduction.label"
                            values={{
                                percentage: currentAdditiveEffects,
                                green: (chunks) => <StatValue>{chunks}</StatValue>
                            }}
                        />
                    </StatLabel>
                </StatSpan>
            )}

            {hasAdditiveEffects && isPressEnter && (
                <StatSpan>
                    <StatLabel>
                        <FormattedMessage
                            id="statsSection.upgradeStats.enterProduction.label"
                            values={{
                                percentage: currentAdditiveEffects,
                                green: (chunks) => <StatValue>{chunks}</StatValue>
                            }}
                        />
                    </StatLabel>
                </StatSpan>
            )}

            {hasMultiplicativeEffects && (
                <StatSpan>
                    <StatLabel>
                        <FormattedMessage
                            id="statsSection.upgradeStats.multiplicativeEfficiency.label"
                            values={{
                                upgradeName: intl.formatMessage({ 
                                    id: `botBuyList.${upgrades[0].incrementorId}.name` 
                                }),
                                multiplier: currentMultiplicativeEffects,
                                green: (chunks) => <StatValue>{chunks}</StatValue>
                            }}
                        />
                    </StatLabel>
                </StatSpan>
            )}
        </GenericStatsContainer>
    )
}

export default UpgradeStats