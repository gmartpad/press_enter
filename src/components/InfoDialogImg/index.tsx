import { useCallback, useEffect, useState } from 'react'
import { InfoImgDiv, SkeletonInfoImgDiv } from './styled'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { type Upgrade } from '@upgrades'

const InfoDialogImg = ({ item }: { item: Incrementor | Upgrade }) => {
    let images: Record<string, () => Promise<unknown>> | undefined

    const [isInfoDialogImgLoading, setIsInfoDialogImgLoading] = useState<boolean>(true)

    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageUrl = useCallback(() => {
        let imagePath = ''
        if ('productionPerUnit' in item) {
            images = import.meta.glob('/src/assets/botImages/**/*.png')
            imagePath = `/src/assets/botImages/${item.id}/${item.id}Icon.png`
        }

        if ('effects' in item) {
            images = import.meta.glob('/src/assets/botUpgrades/**/*.png')
            imagePath = `/src/assets/botUpgrades/${item.imgSrc}`
        }

        if (images && images[imagePath]) {
            images[imagePath]().then(module => {
                setImageUrl((module as { default: string }).default)
            })
        }
    }, [item, images, setImageUrl])

    useEffect(() => {
        handleImageUrl()
    }, [item, handleImageUrl])

    return (
        <>
            {isInfoDialogImgLoading && <SkeletonInfoImgDiv />}
            <InfoImgDiv
                src={imageUrl}
                $isInfoDialogImgLoading={isInfoDialogImgLoading}
                onLoad={() => setIsInfoDialogImgLoading(false)}
            />
        </>
    )
}

export default InfoDialogImg
