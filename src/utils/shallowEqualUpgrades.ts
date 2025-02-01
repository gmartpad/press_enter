function shallowEqualUpgrades <T extends { id: unknown; purchasable: boolean }>(
    a: T[],
    b: T[]
): boolean {
    if (a.length !== b.length) return false
    return a.every((item, index) => (
        item.purchasable === b[index].purchasable &&
      item.id === b[index].id
    ))
}

export default shallowEqualUpgrades