import 'swiper/css'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import Bits from '@components/InnerContent/Bits'
import BotBuyList from '@components/InnerContent/BotBuyList'
import CenterMain from '@components/InnerContent/CenterMain'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
import { SliderContainer } from './styled'
import StatsSection from '@components/StatsSection'
import Navbar from '@components/Navbar'
import ItemInfoDialog from '@components/shared/ItemInfoDialog'
import TabNavigator from './TabNavigator'
import { useTabNavigator } from '@contexts/TabNavigatorContext'
const MobileInnerContent = () => {
    const swiperRef = useRef<SwiperRef>(null)
    const { windowInnerWidth } = useWindowInnerValues()
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const { tabHeight } = useTabNavigator()

    const handleTabClick = (index: number) => {
        setActiveSlide(index)
        swiperRef?.current?.swiper.slideTo(index)
    }

    return (
        <>
            <SliderContainer $windowInnerWidth={windowInnerWidth} $tabHeight={tabHeight}>
                <Swiper
                    ref={swiperRef}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    slidesPerView={1}
                    resistance={true}
                    resistanceRatio={0.85}
                    allowSlideNext={activeSlide < 2}
                    allowSlidePrev={activeSlide > 0}
                >
                    <SwiperSlide style={{ overflow: 'hidden' }}>
                        <Bits />
                    </SwiperSlide>
                    <SwiperSlide style={{ overflow: 'hidden' }}>
                        <CenterMain />
                    </SwiperSlide>
                    <SwiperSlide style={{ overflow: 'hidden' }}>
                        <BotBuyList />
                    </SwiperSlide>
                </Swiper>
            </SliderContainer>
            <TabNavigator activeSlide={activeSlide} onTabClick={handleTabClick} />
            <StatsSection /> 
            <ItemInfoDialog />
            <Navbar />
        </>
    )
}

export default MobileInnerContent