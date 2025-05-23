import { FixedSizeList as FixedSizeListType } from 'react-window'
import { autoIncrementorsState } from "@state/atoms"
import React, { 
    useState, 
    useMemo, 
    useCallback, 
    useRef, 
    useEffect,
    CSSProperties,
    Component,
    ReactNode,
    ErrorInfo,
    FC
} from 'react'
import BotVisualizerItem from "@components/BotVisualizer"
import { useAtomValue } from 'jotai'
import NAVBAR_HEIGHT from '@utils/NavbarHeight'

// Configuration constants
const ITEM_SIZE = 148 // Base height for items + separator
const OVERSCAN_COUNT = 5
const SCROLL_POSITION_KEY = 'botVisualizersScroll'

// Types
interface IncrementorData {
    id: string;
    units: number;
    revealed: boolean;
}

interface RowProps {
    index: number;
    style: CSSProperties;
    data: IncrementorData[];
}

// Style objects
const containerStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

const separatorStyle: CSSProperties = {
    height: 20,
    backgroundColor: '#000'
}

// Scroll position preservation hook
const useScrollPreservation = () => {
    const [scrollOffset, setScrollOffset] = useState(() => {
        const saved = sessionStorage.getItem(SCROLL_POSITION_KEY)
        return saved ? parseInt(saved, 10) : 0
    })

    const handleScroll = useCallback(({ scrollOffset }: { scrollOffset: number }) => {
        sessionStorage.setItem(SCROLL_POSITION_KEY, scrollOffset.toString())
        setScrollOffset(scrollOffset)
    }, [])

    return { scrollOffset, handleScroll }
}

// Error boundary component
class ErrorBoundary extends Component<{
    fallback: ReactNode;
    children: ReactNode;
}, { hasError: boolean }> {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('BotVisualizer error:', error, info)
    }

    render() {
        return this.state.hasError ? this.props.fallback : this.props.children
    }
}

const BotVisualizers: FC = () => {
    const autoIncrementors = useAtomValue(autoIncrementorsState)
    const listRef = useRef<FixedSizeListType>(null)
    const { scrollOffset, handleScroll } = useScrollPreservation()

    const [windowHeight, setWindowHeight] = useState(window.innerHeight - NAVBAR_HEIGHT)

    // Memoize the list data for stable reference
    const memoizedIncrementors = useMemo(() =>
        autoIncrementors.map((item) => ({
            id: item.id,
            units: item.units,
            revealed: item.revealed
        })),
    [autoIncrementors]
    )

    // Error-resilient row renderer
    const Row = useCallback(({ index, style, data }: RowProps) => {
        const item = data[index]

        return (
            <div 
                role="listitem" 
                style={{ ...style, ...containerStyle }}
            >
                <ErrorBoundary 
                    fallback={<div>Error loading bot visualization for bot {item.id}</div>}
                >
                    <BotVisualizerItem
                        botId={item.id}
                        key={item.id}
                    />
                </ErrorBoundary>
                <div style={separatorStyle} aria-hidden="true" />
            </div>
        )
    }, [])


    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight - NAVBAR_HEIGHT)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Restore scroll position on mount
    useEffect(() => {
        if (listRef.current && scrollOffset > 0) {
            listRef.current.scrollTo(scrollOffset)
        }
    }, [scrollOffset])

    const FixedSizeList = FixedSizeListType as any // Type assertion to avoid JSX element type error

    return (
        <FixedSizeList
            ref={listRef}
            height={windowHeight}
            itemCount={memoizedIncrementors.length}
            itemSize={ITEM_SIZE}
            width="100%"
            overscanCount={OVERSCAN_COUNT}
            onScroll={handleScroll}
            initialScrollOffset={scrollOffset}
            itemData={memoizedIncrementors} // Pass data to Row component
            aria-label="List of bot activity visualizations"
        >
            {Row}
        </FixedSizeList>
    )
}

export default React.memo(BotVisualizers)