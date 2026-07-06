import styled from "styled-components";
import { Marginals } from "../../styles";

export const Footer = styled.footer`
   ${Marginals}
    align-items: flex-end;
    bottom: 0;
    justify-content: space-between;
    padding: 28px 40px;

    @media (max-width: 900px) {
    padding: 22px 28px;
    }

    @media (max-width: 480px) {
    padding: 16px 18px;
    }
`

export const H2 = styled.h2`
color: #f5f7ff;
font-family: 'Cinzel', serif;
font-size: 48px;
font-weight: 600;
line-height: 0.8;
margin: 0;
padding: 0 15px;

@media (max-width: 900px) {
font-size: 34px;
}
@media (max-width: 480px) {
font-size: 20px;
padding: 0;
}
`
export const H2Middle = styled(H2)`
flex-grow: 1;
position: relative;
text-align: center;

&::after {
content: '';
background-color: #7fc4ff;
display: block;
position: absolute;
height: 2px;
left: 15px;
right: 15px;
top: 50%;
}

@media (max-width: 480px) {
&::after {
left: 8px;
right: 8px;
}
}
`
