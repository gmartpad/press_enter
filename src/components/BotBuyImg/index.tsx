import { type Incrementor } from '@state/defaultAutoIncrementors'
import { useCallback, useEffect, useState } from 'react'
import { BotBuyImg as StyledBotBuyImg } from './styled'

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

    return <StyledBotBuyImg src={imageUrl} />
}

export default BotBuyImg
