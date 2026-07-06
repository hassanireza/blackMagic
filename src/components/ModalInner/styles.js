import styled from "styled-components";

export const Container = styled.div`
color: #0b0f2a;
max-width: 440px;
`

export const H3 = styled.h3`
font-family: 'Cinzel', serif;
font-size: 56px;
font-weight: 700;
line-height: 0.9;
margin: 0;
color: #24408f;
`
export const P = styled.p`
font-size: 16px;
line-height: 1.5;
margin: 20px 0;

@media (max-width: 700px) {
font-size: 14px;
}
`

export const Socials = styled.div`
color: #24408f;
display: flex;
justify-content: center;

svg {
margin: 0 16px;
transition: color 0.2s ease;
}

svg:hover {
color: #4f7dff;
}
`

export const H4 = styled.h4`
color: #24408f;
font-family: 'Cinzel', serif;
font-size: 30px;
font-weight: 600;
line-height: 1.15;
margin: 20px 0 0;

@media (max-width: 700px) {
font-size: 22px;
}
`
export const SuccessContainer = styled(Container)`
align-items: center;
color: #24408f;
display: flex;
flex-direction: column;
justify-content: center;
margin: 50px auto;
text-align: center;
`
