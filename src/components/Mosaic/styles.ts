import styled from 'styled-components'

interface TileStyleProps {
  $initialX: number
  $initialY: number
  $movedX: number
  $movedY: number
}

export const Tile = styled.div.attrs<TileStyleProps>(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`
  }
}))<TileStyleProps>`
  background-image: url(${import.meta.env.BASE_URL}image.webp);
  background-position: ${({ $initialX, $initialY }) => `calc(var(--tile) * -${$initialX}) calc(var(--tile) * -${$initialY})`};
  background-size: calc(var(--tile) * 4) calc(var(--tile) * 6);
  height: var(--tile);
  width: var(--tile);
  position: relative;
  transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
`
