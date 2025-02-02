import { type Incrementor } from '@state/defaultAutoIncrementors'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BotBuyImg as StyledBotBuyImg } from './styled'

const QUESTION_MARK_SRC = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MCI+PyA8L3RleHQ+Cjwvc3ZnPg=='

type ViteImageModule = { 
    default: string 
} | undefined

const BotBuyImg = ({ item }: { item: Incrementor }) => {
    const [imageUrl, setImageUrl] = useState('')
    const currentRequest = useRef<symbol | undefined>(undefined)
    const imagePaths = useMemo(
        () => import.meta.glob('/src/assets/botImages/**/*.png'),
        []
    )

    const loadImage = useCallback(async () => {
        const requestId = Symbol()
        currentRequest.current = requestId
        
        const imagePath = `/src/assets/botImages/${item.id}/${item.id}BotDiv.png`
        
        try {
            const module = imagePaths[imagePath] 
                ? await imagePaths[imagePath]() as ViteImageModule
                : null
            
            if (currentRequest.current === requestId) {
                setImageUrl(module?.default || '')
            }
        } catch {
            if (currentRequest.current === requestId) {
                setImageUrl('')
            }
        }
    }, [item.id, imagePaths])

    useEffect(() => {
        loadImage()
        
        return () => {
            currentRequest.current = undefined
        }
    }, [loadImage])

    return (
        <StyledBotBuyImg 
            $hiddenIncrementor={!item?.revealed} 
            src={item?.revealed ? imageUrl : QUESTION_MARK_SRC} 
        />
    )
}

export default BotBuyImg