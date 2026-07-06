import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @keyframes glow {
        0% {
        box-shadow: rgb(79, 196, 255) 0 0 0px;
        }

        100% {
        box-shadow: rgb(79, 196, 255) 0 10px 100px;
        }
    }
    body {
        color: #f5f7ff;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background: #05070f;
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
    }
`

export const Marginals = css`
    box-sizing: border-box;
    display: flex;
    pointer-events: none;
    position: fixed;
    width: 100vw;
    z-index: 1;
`
export const ImageContainer = styled.div.attrs(({ $isTogether }) => (
    {
        style: {
            animation: $isTogether ? 'glow 3s infinite alternate' : 'none'
        }
    }))`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 600px;
    width: 400px;

`
export const Wrapper = styled.section.attrs(({ $glow }) => ({
    style: {
        backgroundColor: `hsl(226, 72%, ${4 + $glow * 13}%)`
    }
}))`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
transition: background-color 0.15s ease-out;
`

export const AbsoluteCenter = css`
left: 50%;
top: 50%;
position: absolute;
transform: translate(-50%, -50%);
`

export const Button = styled.button`
${AbsoluteCenter}
background: rgba(5, 7, 15, 0.55);
border: 2px solid #7fc4ff;
border-radius: 100%;
color: #f5f7ff;
cursor: pointer;
font-family: 'Cinzel', serif;
font-size: 32px;
font-weight: 600;
letter-spacing: 1px;
line-height: 1;
text-transform: uppercase;
padding: 25px 0 20px;
width: 300px;
z-index: 1;
transition: box-shadow 0.2s ease, border-color 0.2s ease;

&:hover {
border-color: #bdeeff;
box-shadow: 0 0 40px rgba(127, 196, 255, 0.5);
}

@media (max-width: 700px) {
    font-size: 22px;
    width: 220px;
}
`
