import styled from "styled-components";

export const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
    style: {
        transform: `translate(${$movedX}px, ${$movedY}px)`
    }
}))`
    background-image: url(${process.env.PUBLIC_URL}/image.webp);
    background-position: ${({ $initialx, $initialy }) => (`calc(var(--tile) * -${$initialx}) calc(var(--tile) * -${$initialy})`)};
    background-size: calc(var(--tile) * 4) calc(var(--tile) * 6);
    height: var(--tile);
    width: var(--tile);
    position: relative;
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
`
