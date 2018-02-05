'use strict'

const assert = require('assert')
const addCounter = require('.')

describe('addCounter()', function () {
  it('should iterate two-element arrays with the counter and the value', function () {
    const i = addCounter(['a', 'b'])

    const a = i.next().value
    assert(Array.isArray(a))
    assert.strictEqual(a.length, 2)
    assert.strictEqual(a[0], 0)
    assert.strictEqual(a[1], 'a')

    const b = i.next().value
    assert(Array.isArray(b))
    assert.strictEqual(b.length, 2)
    assert.strictEqual(b[0], 1)
    assert.strictEqual(b[1], 'b')

    assert.strictEqual(i.next().done, true)
  })

  it('should start the counter at the specified value', function () {
    const i = addCounter(['a'], 2)

    const a = i.next().value
    assert(Array.isArray(a))
    assert.strictEqual(a.length, 2)
    assert.strictEqual(a[0], 2)
    assert.strictEqual(a[1], 'a')

    assert.strictEqual(i.next().done, true)
  })
})
