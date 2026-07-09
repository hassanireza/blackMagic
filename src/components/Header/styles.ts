import styled from 'styled-components'
import LogoSVG from './logo.svg?react'
import { Marginals } from '../../styles'

export const Logo = styled(LogoSVG)`
  height: auto;
  width: 240px;
  max-width: 42vw;

  @media (max-width: 900px) {
    width: 190px;
  }

  @media (max-width: 480px) {
    width: 148px;
  }
`

export const Header = styled.header`
  ${Marginals}
  align-items: center;
  justify-content: flex-start;
  top: 0;
  padding: 28px 40px;

  @media (max-width: 900px) {
    padding: 22px 28px;
  }

  @media (max-width: 480px) {
    padding: 16px 18px;
  }
`
