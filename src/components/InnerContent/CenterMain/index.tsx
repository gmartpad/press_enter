import { Section } from './styled'
import ItemInfoDialog from '@components/shared/ItemInfoDialog'
import BotVisualizers from '@components/BotVisualizers'
import Navbar from '@components/Navbar'
import StatsSection from '@components/StatsSection'
import useWindowInnerWidth from '@hooks/useWindowInnerWidth'

const CenterMain = () => {
    const { windowInnerWidth } = useWindowInnerWidth()

    return (
        <Section $windowInnerWidth={windowInnerWidth}>
            <StatsSection/> 
            <Navbar />
            <ItemInfoDialog/>
            <BotVisualizers/>
        </Section>
    )
}

export default CenterMain
