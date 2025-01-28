import { type Incrementor } from '@state/defaultAutoIncrementors'

function updateSingleIncrementorValue(
    items: Incrementor[],
    itemName: string,
    newValue: Partial<Incrementor>
) {
    return items.map(item => {
        if (item.name === itemName) {
            // Return a new object with the updated value
            return { ...item, ...newValue }
        }
        return item // Return the original item if it doesn't match
    })
}

export default updateSingleIncrementorValue
