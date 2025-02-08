import useWindowInnerValues from './useWindowInnerValues'

const useIsDesktop = () => {
    const { windowInnerWidth } = useWindowInnerValues()
    return windowInnerWidth > 1024 // Adjust the threshold as needed
}

export default useIsDesktop 