export interface TileCoordinate {
  x: number
  y: number
}

export interface TileDrift extends TileCoordinate {
  driftX: number
  driftY: number
}

/**
 * MosaicGrid owns the layout of the mosaic: how many columns and rows of
 * tiles exist, which background slice each tile shows, and how far each
 * tile drifts away from its resting position when the visitor is far from
 * the center of the screen.
 */
export class MosaicGrid {
  public readonly columns: number
  public readonly rows: number

  constructor(columns = 4, rows = 6) {
    this.columns = columns
    this.rows = rows
  }

  /**
   * The ordered list of tile coordinates, column-major, matching the
   * original hand-authored matrix used to slice the source photograph.
   */
  public buildCoordinates(): TileCoordinate[] {
    const coordinates: TileCoordinate[] = []
    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.columns; x += 1) {
        coordinates.push({ x, y })
      }
    }
    return coordinates
  }

  /**
   * Produces a randomized drift vector for a single tile. Tiles further
   * from the origin drift further, so the mosaic feels like it is being
   * pulled apart from a single anchor point rather than scattering evenly.
   */
  public buildDrift({ x, y }: TileCoordinate): TileDrift {
    return {
      x,
      y,
      driftX: Math.random() * 400 - x * 100 - 50,
      driftY: Math.random() * 600 - y * 100 - 50
    }
  }

  public buildAllDrifts(): TileDrift[] {
    return this.buildCoordinates().map((coordinate) => this.buildDrift(coordinate))
  }
}
