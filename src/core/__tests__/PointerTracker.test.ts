import { describe, expect, it } from 'vitest'
import { PointerTracker } from '../PointerTracker'

describe('PointerTracker', () => {
  const viewport = { width: 1000, height: 800 }

  it('returns 0 when the pointer sits exactly at the viewport center', () => {
    const tracker = new PointerTracker(3)
    const result = tracker.calculate({ x: 500, y: 400 }, viewport)
    expect(result).toBeCloseTo(0)
  })

  it('returns close to 1 when the pointer sits at a far corner', () => {
    const tracker = new PointerTracker(3)
    const result = tracker.calculate({ x: 0, y: 0 }, viewport)
    expect(result).toBeCloseTo(1)
  })

  it('eases values so mid-distance points are pulled toward the extremes', () => {
    const tracker = new PointerTracker(3)
    const linearHalfway = tracker.calculate({ x: 250, y: 200 }, viewport)
    expect(linearHalfway).toBeLessThan(0.5)
  })
})
