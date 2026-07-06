import styled from "styled-components";

export const Input = styled.input`
border: 2px solid #0b0f2a;
box-sizing: border-box;
font-family: 'Manrope', sans-serif;
font-size: 18px;
margin: 8px 0 24px;
padding: 12px;
width: 100%;

&:focus {
border-color: #24408f;
outline: none;
}

@media (max-width: 700px) {
font-size: 16px;
}
`

export const Label = styled.label`
font-weight: 600;
`

export const Submit = styled.button`
background: none;
border: 2px solid #24408f;
color: #24408f;
cursor: pointer;
float: right;
font-family: 'Cinzel', serif;
font-size: 18px;
font-weight: 700;
padding: 12px 20px;
text-transform: uppercase;
transition: background 0.2s ease, color 0.2s ease;

&:hover {
background: #24408f;
color: #f5f7ff;
}

@media (max-width: 700px) {
font-size: 16px;
}
`
