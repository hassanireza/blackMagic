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
color: var(--bone);
font-family: 'Playfair Display', serif;
font-size: 44px;
font-weight: 600;
line-height: 0.8;
margin: 0;
padding: 0 15px;

@media (max-width: 900px) {
font-size: 32px;
}
@media (max-width: 480px) {
font-size: 19px;
padding: 0;
}
`
export const H2Middle = styled.p`
color: var(--silver);
flex-grow: 1;
font-family: 'Jost', sans-serif;
font-size: 13px;
font-weight: 400;
letter-spacing: 4px;
margin: 0 15px 6px;
text-align: center;
text-transform: uppercase;

@media (max-width: 480px) {
font-size: 10px;
letter-spacing: 2px;
margin: 0 0 4px;
}
`
