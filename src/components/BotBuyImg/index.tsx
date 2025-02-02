import { type Incrementor } from '@state/defaultAutoIncrementors'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BotBuyImg as StyledBotBuyImg } from './styled'

const QUESTION_MARK_SRC = 'data:image/svg+xml;base64,...'

type ViteImageModule = { 
    default: string 
} | undefined

const BotBuyImg = ({ item }: { item: Incrementor }) => {
    const [imageUrl, setImageUrl] = useState('')
    const currentRequest = useRef<Symbol | undefined>(undefined)
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
        let isMounted = true
        loadImage()
        
        return () => {
            isMounted = false
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