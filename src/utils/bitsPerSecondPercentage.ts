import { type Incrementor } from '@state/defaultAutoIncrementors'

function bitsPerSecondPercentage(currentProductionState: number, autoIncrementor: Incrementor) {
    const { units, productionPerUnit } = autoIncrementor

    const totalProduction = Number(currentProductionState)

    const incrementorProduction = Number(units) * Number(productionPerUnit)

    return (((incrementorProduction ?? 0) * 100) / (totalProduction ?? 0)).toFixed(2)
}

export default bitsPerSecondPercentage
