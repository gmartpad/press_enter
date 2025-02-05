import DesktopInnerContent from './DesktopInnerContent'
import MobileInnerContent from './MobileInnerContent'
import useWindowInnerWidth from '@hooks/useWindowInnerWidth'

const InnerContent = () => {
    const { windowInnerWidth } = useWindowInnerWidth()

    if(windowInnerWidth >= 1024) {
        return <DesktopInnerContent/>
    }

    return (<MobileInnerContent/>)
}

export default InnerContent