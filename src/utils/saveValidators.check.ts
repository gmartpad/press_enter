// Run with `yarn test`: plain Node, which strips the types (Node 22.18+).
import assert from 'node:assert/strict'
import { validateArray, validateObject } from './saveValidators.ts'

const defaults = [1, 2, 3]
assert.deepEqual(validateArray(5 as never, defaults), defaults)
assert.deepEqual(validateArray({} as never, defaults), defaults)
assert.deepEqual(validateArray('ab' as never, defaults), defaults) // strings have a length too
assert.deepEqual(validateArray(undefined, defaults), defaults)
assert.deepEqual(validateArray([9], defaults), [9, 2, 3]) // an older save gains the new items
assert.deepEqual(validateArray([9, 9, 9, 9], defaults), [9, 9, 9, 9])

const config = { volume: 0.5, currentLanguageLocale: 'en' }
assert.deepEqual(validateObject({ volume: 1 }, config), { volume: 1, currentLanguageLocale: 'en' })
assert.deepEqual(validateObject([], config), config)
assert.deepEqual(validateObject(null, config), config)
assert.deepEqual(validateObject('x', config), config)

console.log('save validators ok')
