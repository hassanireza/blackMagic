import styled from "styled-components";

export const Container = styled.div`
color: #1c1e22;
max-width: 440px;
`

export const H3 = styled.h3`
font-family: 'Playfair Display', serif;
font-size: 52px;
font-weight: 600;
line-height: 0.9;
margin: 0;
color: #1c1e22;
`
export const P = styled.p`
font-family: 'Jost', sans-serif;
font-size: 16px;
font-weight: 300;
line-height: 1.6;
margin: 20px 0;

@media (max-width: 700px) {
font-size: 14px;
}
`

export const Socials = styled.div`
color: #1c1e22;
display: flex;
justify-content: center;

svg {
margin: 0 16px;
transition: color 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

svg:hover {
color: #8a8f92;
}
`

export const H4 = styled.h4`
color: #1c1e22;
font-family: 'Playfair Display', serif;
font-size: 28px;
font-weight: 600;
line-height: 1.15;
margin: 20px 0 0;

@media (max-width: 700px) {
font-size: 21px;
}
`
export const SuccessContainer = styled(Container)`
align-items: center;
color: #1c1e22;
display: flex;
flex-direction: column;
justify-content: center;
margin: 50px auto;
text-align: center;
`
