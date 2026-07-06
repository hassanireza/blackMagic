import styled, { createGlobalStyle, css, keyframes } from 'styled-components'

const emerge = keyframes`
    from {
        opacity: 0;
        filter: blur(6px);
    }
    to {
        opacity: 1;
        filter: blur(0);
    }
`

export const GlobalStyle = createGlobalStyle`
    :root {
        --tile: 100px;
        --bg: #0a0a0c;
        --charcoal: #1c1e22;
        --shadow-blue: #12151c;
        --bone: #e8e4da;
        --silver: #8a8f92;
    }

    @keyframes glow {
        0% {
        box-shadow: rgba(138, 143, 146, 0.25) 0 0 0px;
        }

        100% {
        box-shadow: rgba(138, 143, 146, 0.55) 0 10px 120px;
        }
    }

    body {
        color: var(--bone);
        height: 100vh;
        height: 100dvh;
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        background: var(--bg);
        font-family: 'Jost', sans-serif;
        font-weight: 300;
        position: relative;
    }

    body::after {
        content: '';
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 5;
        opacity: 0.05;
        mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    }
`

export const Marginals = css`
    box-sizing: border-box;
    display: flex;
    pointer-events: none;
    position: fixed;
    width: 100vw;
    z-index: 1;
    animation: ${emerge} 1.4s cubic-bezier(0.16, 1, 0.3, 1) both;
`
export const ImageContainer = styled.div.attrs(({ $isTogether }) => (
    {
        style: {
            animation: $isTogether ? 'glow 3.6s infinite alternate' : undefined
        }
    }))`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: calc(var(--tile) * 6);
    width: calc(var(--tile) * 4);
    animation: ${emerge} 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;

    @media (max-width: 900px) {
    --tile: 84px;
    }

    @media (max-width: 700px) {
    --tile: 70px;
    }

    @media (max-width: 480px) {
    --tile: 58px;
    }

    @media (max-width: 360px) {
    --tile: 48px;
    }
`
export const Wrapper = styled.section.attrs(({ $glow }) => ({
    style: {
        backgroundColor: `hsl(220, 12%, ${4 + $glow * 6}%)`
    }
}))`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
height: 100dvh;
width: 100vw;
transition: background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
`

export const AbsoluteCenter = css`
left: 50%;
top: 50%;
position: absolute;
transform: translate(-50%, -50%);
`

export const Button = styled.button`
${AbsoluteCenter}
background: rgba(10, 10, 12, 0.55);
border: 1px solid var(--silver);
border-radius: 100%;
box-sizing: border-box;
color: var(--bone);
cursor: pointer;
font-family: 'Playfair Display', serif;
font-size: 30px;
font-weight: 500;
letter-spacing: 2px;
line-height: 1;
text-transform: uppercase;
padding: 25px 0 20px;
width: 300px;
z-index: 1;
transition: box-shadow 1s cubic-bezier(0.22, 0.61, 0.36, 1), border-color 1s cubic-bezier(0.22, 0.61, 0.36, 1);

&:hover {
border-color: var(--bone);
box-shadow: 0 0 50px rgba(138, 143, 146, 0.35);
}

@media (max-width: 700px) {
    font-size: 20px;
    width: 220px;
}

@media (max-width: 480px) {
    border-radius: 60px;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 16px 8px;
    width: 168px;
}
`
