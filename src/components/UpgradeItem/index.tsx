import { type Upgrade } from "@upgrades"
import { InnerUpgradeItem, OuterUpgradeItem, UpgradeItemImg } from "./styled"
import { useCallback, useEffect, useState, useMemo } from "react"
import { configState, currentHoveredUpgradeItemState, isUpgradeAffordableState } from "@state/atoms"
import { debounce } from "lodash"

import { buyUpgrade, wrong } from '@assets/sounds/upgradeClick'
import { useAtomValue, useSetAtom } from "jotai"

const sounds = [buyUpgrade]
const wrongSounds = [wrong]

interface UpgradeItemProps {
    upgrade: Upgrade
    handlePurchaseUpgrade: (upgrade: Upgrade, isUpgradeAffordable: boolean) => Promise<void>
}

const UpgradeItem = ({
    upgrade,
    handlePurchaseUpgrade
}: UpgradeItemProps) => {
    const memoizedAtom = useMemo(() => {
        return isUpgradeAffordableState(upgrade.id)
    }, [upgrade.id])
    
    const isUpgradeAffordable = useAtomValue(memoizedAtom)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)
    const config = useAtomValue(configState)

    const images = import.meta.glob('/src/assets/botUpgrades/**/*.png')
    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageUrl = useCallback(() => {
        const imagePath = `/src/assets/botUpgrades/${upgrade.imgSrc}`
        if (images[imagePath]) {
            images[imagePath]().then(module => {
                setImageUrl((module as { default: string }).default)
            })
        }
    }, [upgrade.imgSrc, images])

    useEffect(() => {
        handleImageUrl()
    }, [handleImageUrl])

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
    }, [upgrade, isUpgradeAffordable, playSound, handlePurchaseUpgrade])

    return (
        <OuterUpgradeItem
            $purchasable={isUpgradeAffordable}
            onClick={handleOnClick}
            onMouseEnter={() => setCurrentHoveredUpgradeItem(upgrade)}
            onMouseLeave={() => setCurrentHoveredUpgradeItem({} as Upgrade)}
        >
            <InnerUpgradeItem>
                <UpgradeItemImg src={imageUrl} />
            </InnerUpgradeItem>
        </OuterUpgradeItem>
    )
}

export default UpgradeItem
