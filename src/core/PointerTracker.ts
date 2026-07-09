export interface Point {
  x: number
  y: number
}

/**
 * PointerTracker turns raw pointer or touch coordinates into a normalized,
 * eased "closeness to center" value between 0 and 1. This value drives the
 * mosaic assembly animation, the background glow, and the ambient tone shift.
 */
export class PointerTracker {
  private readonly easingPower: number

  constructor(easingPower = 3) {
    this.easingPower = easingPower
  }

  private easing(value: number): number {
    return Math.pow(value, this.easingPower)
  }

  /**
   * Returns an eased distance in the range [0, 1], where 0 means the pointer
   * sits exactly at the viewport center and 1 means it is at the furthest
   * possible corner.
   */
  public calculate(point: Point, viewport: { width: number; height: number }): number {
    const center: Point = { x: viewport.width / 2, y: viewport.height / 2 }
    const maxHypot = Math.hypot(center.x, center.y)
    const hypot = Math.hypot(center.x - point.x, center.y - point.y)

    if (maxHypot === 0) return 0

    const normalized = hypot / maxHypot
    return this.easing(normalized)
  }

  public fromMouseEvent(event: { clientX: number; clientY: number }, viewport: { width: number; height: number }): number {
    return this.calculate({ x: event.clientX, y: event.clientY }, viewport)
  }

  public fromTouchEvent(touch: { clientX: number; clientY: number }, viewport: { width: number; height: number }): number {
    return this.calculate({ x: touch.clientX, y: touch.clientY }, viewport)
  }
}
