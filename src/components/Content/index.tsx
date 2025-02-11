import OuterContent from '@components/OuterContent'
import { InnerContentContainer, OuterContentContainer } from './styled'
import InnerContent from '@components/InnerContent'
import useSaveManager from '@hooks/useSaveManager'
import { useEffect } from 'react'

const Content = () => {
    const { loadGame } = useSaveManager()
  
    useEffect(() => {
        loadGame()
    }, [])
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