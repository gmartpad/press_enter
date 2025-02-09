import { keyframes, styled } from "styled-components"

const rotateGradient = keyframes`
    0% {
        background: linear-gradient(0deg, #000, #fff, #000);
    }
    3.33% {
        background: linear-gradient(0deg, #111, #eee, #111);
    },
    6.66% {
        background: linear-gradient(0deg, #222, #ddd, #222);
    },
    10% {
        background: linear-gradient(0deg, #333, #ccc, #333);
    },
    13.33% {
        background: linear-gradient(0deg, #444, #bbb, #444);
    },
    16.66% {
        background: linear-gradient(0deg, #555, #aaa, #555);
    },
    20% {
        background: linear-gradient(0deg, #666, #999, #666);
    },
    23.33% {
        background: linear-gradient(0deg, #777, #888, #777);
    },
    26.66% {
        background: linear-gradient(0deg, #888, #777, #888);
    },
    30% {
        background: linear-gradient(0deg, #999, #666, #999);
    },
    33.33% {
        background: linear-gradient(0deg, #aaa, #555, #aaa);
    },
    36.66% {
        background: linear-gradient(0deg, #bbb, #444, #bbb);
    },
    40% {
        background: linear-gradient(0deg, #ccc, #333, #ccc);
    },
    43.33% {
        background: linear-gradient(0deg, #ddd, #222, #ddd);
    },
    46.66% {
        background: linear-gradient(0deg, #eee, #111, #eee);
    },
    50% {
        background: linear-gradient(0deg, #fff, #000, #fff);
    },
    53.33% {
        background: linear-gradient(0deg, #eee, #111, #eee);
    },
    56.66% {
        background: linear-gradient(0deg, #ddd, #222, #ddd);
    },
    60% {
        background: linear-gradient(0deg, #ccc, #333, #ccc);
    },
    63.33% {
        background: linear-gradient(0deg, #bbb, #444, #bbb);
    },
    66.66% {
        background: linear-gradient(0deg, #aaa, #555, #aaa);
    },
    70% {
        background: linear-gradient(0deg, #999, #666, #999);
    },
    73.33% {
        background: linear-gradient(0deg, #888, #777, #888);
    },
    76.66% {
        background: linear-gradient(0deg, #777, #888, #777);
    },
    80% {
        background: linear-gradient(0deg, #666, #999, #666);
    },
    83.33% {
        background: linear-gradient(0deg, #555, #aaa, #555);
    },
    86.66% {
        background: linear-gradient(0deg, #444, #bbb, #444);
    },
    90% {
        background: linear-gradient(0deg, #333, #ccc, #333);
    },
    93.33% {
        background: linear-gradient(0deg, #222, #ddd, #222);
    },
    96.66% {
        background: linear-gradient(0deg, #111, #eee, #111);
    },
    100% {
        background: linear-gradient(0deg, #000, #fff, #000);
    }
`

const StyledDivider = styled.div`
    display: flex; 
    overflow: hidden;
    position: relative;
    height: 16px;
    width: 100%;

    &::before {
        content: "";
        width: 100%;
        height: 16px;
        position: absolute;
        background: linear-gradient(0deg, #000, #fff, #000);
        animation: ${rotateGradient} 3s linear infinite;
        transform-origin: center;
        filter: brightness(0.6);
        transition: all .2s ease-in-out;
    }
`
export { StyledDivider }
