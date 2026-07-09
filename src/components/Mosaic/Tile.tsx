import { useEffect, useState } from 'react'
import { Tile as TileStyled } from './styles'
import type { TileDrift } from '../../core/MosaicGrid'

interface TileProps {
  drift: TileDrift
  percent: number
}

const MosaicTile = ({ drift, percent }: TileProps) => {
  const [offset, setOffset] = useState<[number, number]>([drift.driftX, drift.driftY])

  useEffect(() => {
    setOffset([drift.driftX, drift.driftY])
    // Recomputed only when the tile's own coordinates change, matching the
    // original once-per-mount randomization for each tile position.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drift.x, drift.y])

  return (
    <TileStyled
      $initialX={drift.x}
      $initialY={drift.y}
      $movedX={offset[0] * percent}
      $movedY={offset[1] * percent}
    />
  )
}

export default MosaicTile
