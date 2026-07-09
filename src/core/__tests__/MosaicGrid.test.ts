import { describe, expect, it } from 'vitest'
import { MosaicGrid } from '../MosaicGrid'

describe('MosaicGrid', () => {
  it('builds a coordinate for every tile in the grid', () => {
    const grid = new MosaicGrid(4, 6)
    const coordinates = grid.buildCoordinates()
    expect(coordinates).toHaveLength(24)
    expect(coordinates[0]).toEqual({ x: 0, y: 0 })
    expect(coordinates[coordinates.length - 1]).toEqual({ x: 3, y: 5 })
  })

  it('builds a drift vector for every tile', () => {
    const grid = new MosaicGrid(4, 6)
    const drifts = grid.buildAllDrifts()
    expect(drifts).toHaveLength(24)
    drifts.forEach((drift) => {
      expect(typeof drift.driftX).toBe('number')
      expect(typeof drift.driftY).toBe('number')
    })
  })
})
