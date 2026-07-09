import { useMemo } from 'react'
import { ImageContainer, Wrapper, Button } from '../../styles'
import { MosaicGrid } from '../../core/MosaicGrid'
import MosaicTile from './Tile'

interface MosaicProps {
  distance: number
  glow: number
  onMouseMove: React.MouseEventHandler<HTMLElement>
  onTouchMove: React.TouchEventHandler<HTMLElement>
  onSignUpClick: () => void
}

const grid = new MosaicGrid(4, 6)

const Mosaic = ({ distance, glow, onMouseMove, onTouchMove, onSignUpClick }: MosaicProps) => {
  const drifts = useMemo(() => grid.buildAllDrifts(), [])

  return (
    <Wrapper onMouseMove={onMouseMove} onTouchMove={onTouchMove} $glow={glow}>
      <ImageContainer $isTogether={distance < 0.001}>
        <Button onClick={onSignUpClick}>Sign up for updates</Button>
        {drifts.map((drift, index) => (
          <MosaicTile key={index} drift={drift} percent={distance} />
        ))}
      </ImageContainer>
    </Wrapper>
  )
}

export default Mosaic
