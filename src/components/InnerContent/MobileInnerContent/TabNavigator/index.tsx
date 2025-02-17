import { useEffect, useRef } from 'react'
import { TabContainer } from './styled'
import TabButton from './TabButton'
import { useTabNavigator } from '@contexts/TabNavigatorContext'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
import { FormattedMessage } from 'react-intl'
interface TabNavigatorProps {
    activeSlide: number;
    onTabClick: (index: number) => void;
}

const TabNavigator = ({ activeSlide, onTabClick }: TabNavigatorProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { windowInnerWidth, windowInnerHeight } = useWindowInnerValues()
    const { setTabHeight } = useTabNavigator()

    useEffect(() => {
        if (containerRef.current) {
            setTabHeight(containerRef.current.offsetHeight)
        }
    }, [setTabHeight, windowInnerWidth, windowInnerHeight])

    return (
        <TabContainer ref={containerRef}>
            <TabButton 
                $active={activeSlide === 0} 
                onClick={() => onTabClick(0)}
            >
                <p style={{ margin: 0 }}>{activeSlide === 0 && '* '}</p><FormattedMessage id="tabNavigator.pressEnter" />
            </TabButton>
            <TabButton 
                $active={activeSlide === 1} 
                onClick={() => onTabClick(1)}
            >
                <p style={{ margin: 0 }}>{activeSlide === 1 && '* '}</p><FormattedMessage id="tabNavigator.botVisualizers" />
            </TabButton>
            <TabButton 
                $active={activeSlide === 2} 
                onClick={() => onTabClick(2)}
            >
                <p style={{ margin: 0 }}>{activeSlide === 2 && '* '}</p><FormattedMessage id="tabNavigator.botsAndUpgrades" />
            </TabButton>
        </TabContainer>
    )
}

export default TabNavigator 