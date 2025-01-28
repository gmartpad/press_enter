import OuterContent from '@components/OuterContent'
import { InnerContentContainer, OuterContentContainer } from './styled'
import InnerContent from '@components/InnerContent'

const Content = () => {
    return (
        <OuterContentContainer>
            <OuterContent/>
            <InnerContentContainer>
                <InnerContent/>
            </InnerContentContainer>
        </OuterContentContainer>
    )
}

export default Content