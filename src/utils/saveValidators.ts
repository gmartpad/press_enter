// Validation helpers for save data. Saves can be imported from anywhere
// (players share save strings), so every field is checked before it is used.
export const validateNumber = (value: unknown, defaultValue: number): number => {
    return typeof value === 'number' && !isNaN(value) ? value : defaultValue
}

export function validateArray<T>(saved: T[] | undefined, defaults: T[]): T[] {
    // ponytail: checks the container, not the items; a hand-edited [null] can still crash. Validate items if that shows up.
    if (!Array.isArray(saved)) return defaults

    // If the saved array is shorter than defaults, append the new items
    if (saved.length < defaults.length) {
        return [...saved, ...defaults.slice(saved.length)]
    }

    return saved
}

export const validateObject = <T extends object>(value: unknown, defaultValue: T): T => {
    // Merged over the default, so a save missing fields keeps the current ones
    return value && typeof value === 'object' && !Array.isArray(value)
        ? { ...defaultValue, ...value } as T
        : defaultValue
}
