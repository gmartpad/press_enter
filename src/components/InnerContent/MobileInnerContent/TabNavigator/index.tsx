import { useEffect, useRef } from 'react'
import { TabContainer } from './styled'
import TabButton from './TabButton'
import { useTabNavigator } from '../../../../contexts/TabNavigatorContext'
import useWindowInnerValues from '@hooks/useWindowInnerValues'
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
            <TabButton active={activeSlide === 0} onClick={() => onTabClick(0)}>{activeSlide === 0 && '* '}Bits</TabButton>
            <TabButton active={activeSlide === 1} onClick={() => onTabClick(1)}>{activeSlide === 1 && '* '}Center Main</TabButton>
            <TabButton active={activeSlide === 2} onClick={() => onTabClick(2)}>{activeSlide === 2 && '* '}Bot Buy List</TabButton>
        </TabContainer>
    )
}

export default TabNavigator 