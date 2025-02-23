import NAVBAR_HEIGHT from "@utils/NavbarHeight"
import { styled } from "styled-components"
import { SwiperSlide } from "swiper/react"

interface SliderContainerProps {
    $windowInnerWidth: number
    $tabHeight: number
}

const SliderContainer = styled.div.attrs<SliderContainerProps>(
    props => ({
        style: {
            height: props.$windowInnerWidth > 1024 ? `calc(100% - 80px)` : `calc(100vh - ${NAVBAR_HEIGHT}px - ${props.$tabHeight}px)`,
            marginTop: props.$windowInnerWidth > 1024 ? 'unset' : `${NAVBAR_HEIGHT}px`
        }
    })
)`
    width: 100%;

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

const OverFlowHiddenSwiperSlide = styled(SwiperSlide)`
    overflow: hidden;
`

export {
    SliderContainer,
    OverFlowHiddenSwiperSlide
}