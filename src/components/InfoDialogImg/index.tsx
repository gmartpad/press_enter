import { useCallback, useEffect, useState } from 'react'
import { InfoImgDiv, SkeletonInfoImgDiv } from './styled'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import { type Upgrade } from '@upgrades'

const QUESTION_MARK_SRC = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MCI+PyA8L3RleHQ+Cjwvc3ZnPg=='

const InfoDialogImg = ({ item, isIncrementor }: { item: Incrementor | Upgrade, isIncrementor: boolean }) => {
    let images: Record<string, () => Promise<unknown>> | undefined

    const [isInfoDialogImgLoading, setIsInfoDialogImgLoading] = useState<boolean>(true)

    const [imageUrl, setImageUrl] = useState<string>('')

    const hiddenIncrementor = isIncrementor && !(item as Incrementor).revealed

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
                src={hiddenIncrementor ? QUESTION_MARK_SRC : imageUrl}
                $isInfoDialogImgLoading={isInfoDialogImgLoading}
                $hiddenIncrementor={hiddenIncrementor}
                onLoad={() => setIsInfoDialogImgLoading(false)}
            />
        </>
    )
}

export default InfoDialogImg
