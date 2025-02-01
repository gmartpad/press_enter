function shallowEqualIncrementors <T extends { id: unknown; revealed: boolean }>(
    a: T[],
    b: T[]
): boolean {
    if (a.length !== b.length) return false
    return a.every((item, index) => (
        item.revealed === b[index].revealed &&
      item.id === b[index].id
    ))
}

export default shallowEqualIncrementors