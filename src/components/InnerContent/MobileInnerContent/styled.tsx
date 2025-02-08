import NAVBAR_HEIGHT from "@utils/NavbarHeight"
import { styled } from "styled-components"

interface SliderContainerProps {
    $windowInnerWidth: number
}

const SliderContainer = styled.div.attrs<SliderContainerProps>(
    props => ({
        style: {
            height: props.$windowInnerWidth > 1024 ? 'calc(100% - 80px)' : `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            marginTop: props.$windowInnerWidth > 1024 ? 'unset' : `${NAVBAR_HEIGHT}px`
        }
    })
)`
    width: 100%;
    height: calc(100% - 80px); // Account for navbar height

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
`

export {
    SliderContainer
}