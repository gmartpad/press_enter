import { Upgrade } from '@state/upgrades'
import formatLargeNumber from '@utils/formatLargeNumber'
import { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { StatLabelH3, StatSpan, StatValueH3 } from '../SingleStat/styled'
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
        return formatLargeNumber(cost, intl) + ' bits'
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
                <StatLabelH3>
                    <FormattedMessage 
                        id="statsSection.upgradeStats.upgradesBought.label"
                    />
                </StatLabelH3>
                <StatValueH3>{upgrades.length}</StatValueH3>
            </StatSpan>

            <StatSpan>
                <StatLabelH3>
                    <FormattedMessage 
                        id="statsSection.upgradeStats.upgradesBitCost.label" 
                    />
                </StatLabelH3>
                <StatValueH3>{costOfUpgrades}</StatValueH3>
            </StatSpan>

            {hasAdditiveEffects && isGlobalBits && (
                <StatSpan>
                    <StatLabelH3>
                        <FormattedMessage
                            id="statsSection.upgradeStats.globalProduction.label"
                            values={{
                                percentage: currentAdditiveEffects,
                                green: (chunks) => <StatValueH3>{chunks}</StatValueH3>
                            }}
                        />
                    </StatLabelH3>
                </StatSpan>
            )}

            {hasAdditiveEffects && isPressEnter && (
                <StatSpan>
                    <StatLabelH3>
                        <FormattedMessage
                            id="statsSection.upgradeStats.enterProduction.label"
                            values={{
                                percentage: currentAdditiveEffects,
                                green: (chunks) => <StatValueH3>{chunks}</StatValueH3>
                            }}
                        />
                    </StatLabelH3>
                </StatSpan>
            )}

            {hasMultiplicativeEffects && (
                <StatSpan>
                    <StatLabelH3>
                        <FormattedMessage
                            id="statsSection.upgradeStats.multiplicativeEfficiency.label"
                            values={{
                                upgradeName: intl.formatMessage({ 
                                    id: `botBuyList.${upgrades[0].incrementorId}.name` 
                                }),
                                multiplier: currentMultiplicativeEffects,
                                green: (chunks) => <StatValueH3>{chunks}</StatValueH3>
                            }}
                        />
                    </StatLabelH3>
                </StatSpan>
            )}
        </GenericStatsContainer>
    )
}

export default UpgradeStats