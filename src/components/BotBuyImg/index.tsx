import { type Incrementor } from '@state/defaultAutoIncrementors'
import { useCallback, useEffect, useState } from 'react'
import { BotBuyImg as StyledBotBuyImg } from './styled'

const QUESTION_MARK_SRC = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MCI+PyA8L3RleHQ+Cjwvc3ZnPg=='

const BotBuyImg = ({ item }: { item: Incrementor }) => {
    const images = import.meta.glob('/src/assets/botImages/**/*.png')

    // In your component
    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageUrl = useCallback(() => {
        const imagePath = `/src/assets/botImages/${item.id}/${item.id}BotDiv.png`

        // Load the image dynamically
        if (images[imagePath]) {
            images[imagePath]().then(module => {
                setImageUrl((module as { default: string }).default)
            })
        }
    }, [item, images, setImageUrl])

    useEffect(() => {
        handleImageUrl()
    }, [item, handleImageUrl])

    return <StyledBotBuyImg $hiddenIncrementor={!item?.revealed} src={item?.revealed ? imageUrl : QUESTION_MARK_SRC} />
}

export default BotBuyImg
