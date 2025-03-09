import { type Upgrade } from "@upgrades"
import { InnerUpgradeItem, OuterUpgradeItem, UpgradeItemImg } from "./styled"
import { useCallback, useEffect, useState, useMemo, useRef } from "react"
import { configState, currentHoveredUpgradeItemState, isUpgradeAffordableState, saveGameState } from "@state/atoms"
import { debounce } from "lodash"
import useIsDesktop from "@hooks/useIsDesktop"
import { buyUpgrade, wrong } from '@assets/sounds/upgradeClick'
import { useAtomValue, useSetAtom, useStore } from "jotai"

const sounds = [buyUpgrade]
const wrongSounds = [wrong]

interface UpgradeItemProps {
    upgrade: Upgrade
    handlePurchaseUpgrade: (upgrade: Upgrade, isUpgradeAffordable: boolean) => Promise<void>
}

const QUESTION_MARK_SRC = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MCI+PyA8L3RleHQ+Cjwvc3ZnPg=='

const UpgradeItem = ({
    upgrade,
    handlePurchaseUpgrade
}: UpgradeItemProps) => {
    const store = useStore()
    const memoizedAtom = useMemo(() => {
        return isUpgradeAffordableState(upgrade.id)
    }, [upgrade.id])
    
    const isUpgradeAffordable = useAtomValue(memoizedAtom)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)
    const config = useAtomValue(configState)
    const isDesktop = useIsDesktop()

    const [imageUrl, setImageUrl] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)
    const currentRequest = useRef<symbol | undefined>(undefined)
    const imagePaths = useMemo(
        () => import.meta.glob('/src/assets/botUpgrades/**/*.png'),
        []
    )

    const loadImage = useCallback(async () => {
        const requestId = Symbol()
        currentRequest.current = requestId
        setIsLoading(true)
        
        const imagePath = `/src/assets/botUpgrades/${upgrade.imgSrc}`
        
        try {
            const module = imagePaths[imagePath] 
                ? await imagePaths[imagePath]() as { default: string }
                : null
            
            if (currentRequest.current === requestId) {
                if (module?.default) {
                    // Create a new image to preload
                    const img = new Image()
                    img.onload = () => {
                        setImageUrl(module.default)
                        setIsLoading(false)
                    }
                    img.src = module.default
                } else {
                    setImageUrl('')
                    setIsLoading(false)
                }
            }
        } catch {
            if (currentRequest.current === requestId) {
                setImageUrl('')
                setIsLoading(false)
            }
        }
    }, [upgrade.imgSrc, imagePaths])

    useEffect(() => {
        loadImage()
        
        return () => {
            currentRequest.current = undefined
        }
    }, [loadImage])

    const handleEnterBotClick = useMemo(() => {
        return debounce(async (isAffordable: boolean, volume: number) => {
            let selectedSound: string | undefined
            if (isAffordable) {
                selectedSound = sounds[Math.floor(Math.random() * sounds.length)]
            } else {
                selectedSound = wrongSounds[0]
            }
            const audio = new Audio(selectedSound)
            audio.volume = volume
            await audio.play()
        }, 40)
    }, [])

    const playSound = useCallback(() => {
        handleEnterBotClick(isUpgradeAffordable, config.volume)
    }, [isUpgradeAffordable, config.volume, handleEnterBotClick])

    const handleOnClick = useCallback(async () => {
        await handlePurchaseUpgrade(upgrade, isUpgradeAffordable)
        playSound()
        saveGameState(store.get)
    }, [upgrade, isUpgradeAffordable, playSound, handlePurchaseUpgrade])

    return (
        <OuterUpgradeItem
            $purchasable={isUpgradeAffordable}
            onClick={handleOnClick}
            onMouseEnter={() => {
                if (isDesktop) {
                    setCurrentHoveredUpgradeItem(upgrade)
                }
            }}
            onMouseLeave={() => {
                if (isDesktop) {
                    setCurrentHoveredUpgradeItem({} as Upgrade)
                }
            }}
        >
            <InnerUpgradeItem>
                <UpgradeItemImg 
                    data-imgsrc={imageUrl}
                    src={isLoading ? QUESTION_MARK_SRC : imageUrl}
                    $isLoading={isLoading}
                />
            </InnerUpgradeItem>
        </OuterUpgradeItem>
    )
}

export default UpgradeItem
