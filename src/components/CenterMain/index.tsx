import { Section } from './styled'
import ItemInfoDialog from '@components/shared/ItemInfoDialog'
import BotVisualizers from '@components/BotVisualizers'
import Navbar from '@components/Navbar'
import StatsSection from '@components/StatsSection'

const CenterMain = () => {
    return (
        <Section>
            <StatsSection/> 
            <Navbar />
            <ItemInfoDialog/>
            <BotVisualizers/>
        </Section>
    )
}

export default CenterMain
