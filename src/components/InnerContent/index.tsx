import DesktopInnerContent from './DesktopInnerContent'
import MobileInnerContent from './MobileInnerContent'
import useWindowInnerValues from '@hooks/useWindowInnerValues'

const InnerContent = () => {
    const { windowInnerWidth } = useWindowInnerValues()

    if(windowInnerWidth > 1024) {
        return <DesktopInnerContent/>
    }

    return (<MobileInnerContent/>)
}

export default InnerContent