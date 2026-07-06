import styled from "styled-components";

export const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
    style: {
        transform: `translate(${$movedX}px, ${$movedY}px)`
    }
}))`
    background-image: url(${process.env.PUBLIC_URL}/image.webp);
    background-position: ${({ $initialx, $initialy }) => (`-${$initialx * 100}px -${$initialy * 100}px`)};
    background-size: 400px 600px;
    height: 100px;
    width: 100px;
    position: relative;

`