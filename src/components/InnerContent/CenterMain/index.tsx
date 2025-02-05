import { Section } from './styled'
import ItemInfoDialog from '@components/shared/ItemInfoDialog'
import BotVisualizers from '@components/BotVisualizers'
import Navbar from '@components/Navbar'
import StatsSection from '@components/StatsSection'
import useWindowInnerValues from '@hooks/useWindowInnerValues'

const CenterMain = () => {
    const { windowInnerWidth } = useWindowInnerValues()

    return (
        <Section $windowInnerWidth={windowInnerWidth}>
            {windowInnerWidth >= 1024 && (
                <>
                    <StatsSection/> 
                    <Navbar />
                    <ItemInfoDialog/>
                </>
            )}
            <BotVisualizers/>
        </Section>
    )
}

export default CenterMain
