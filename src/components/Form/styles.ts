import styled from 'styled-components'

export const Input = styled.input`
  border: 2px solid #1c1e22;
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
  font-size: 18px;
  font-weight: 300;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus {
    border-color: #8a8f92;
    outline: none;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`

export const Label = styled.label`
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  letter-spacing: 0.4px;
`

export const Submit = styled.button`
  background: none;
  border: 2px solid #1c1e22;
  color: #1c1e22;
  cursor: pointer;
  float: right;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 20px;
  text-transform: uppercase;
  transition: background 0.6s cubic-bezier(0.22, 0.61, 0.36, 1), color 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    background: #1c1e22;
    color: #efece3;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`
