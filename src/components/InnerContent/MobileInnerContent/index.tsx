import 'swiper/css'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import Bits from '@components/InnerContent/Bits'
import BotBuyList from '@components/InnerContent/BotBuyList'
import CenterMain from '@components/InnerContent/CenterMain'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
import { SliderContainer } from './styled'
import StatsSection from '@components/StatsSection'
import Navbar from '@components/Navbar'
import ItemInfoDialog from '@components/shared/ItemInfoDialog'

const MobileInnerContent = () => {
    const swiperRef = useRef<SwiperClass | null>(null)
    const { windowInnerWidth } = useWindowInnerValues()
    // eslint-disable-next-line
    const [activeSlide, setActiveSlide] = useState<number>(0)

    return (
        <>
            <SliderContainer $windowInnerWidth={windowInnerWidth}>
                <Swiper
                    onSwiper={(swiper: SwiperClass) => {
                        swiperRef.current = swiper
                    }}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    slidesPerView={1}
                    resistance={true}
                    resistanceRatio={0.85}
                >
                    <SwiperSlide>
                        <Bits />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CenterMain />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BotBuyList />
                    </SwiperSlide>
                </Swiper>
            </SliderContainer>
            <StatsSection/> 
            <ItemInfoDialog/>
            <Navbar />
        </>
    )
}

export default MobileInnerContent