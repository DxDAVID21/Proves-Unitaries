import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, test, expect } from 'vitest'
import { useCounterStore } from '../counter'

describe('The counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('The counter', () => {
    let i = 0
    const counter = useCounterStore()

    while (i < 4) {
      counter.increment()
      i++
    }

    expect(counter.count).toBe(4)
    expect(counter.doubleCount).toBe(8)
  })
})