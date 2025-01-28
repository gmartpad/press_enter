import { type Upgrade } from "@upgrades"
import { InnerUpgradeItem, OuterUpgradeItem, UpgradeItemImg } from "./styled"
import { useCallback, useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { configState, type Config, currentHoveredUpgradeItemState, isUpgradeAffordableState } from "@state/atoms"
import { debounce } from "lodash"

import { buyUpgrade, wrong } from '@assets/sounds/upgradeClick'

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
    const isUpgradeAffordable = useRecoilValue(isUpgradeAffordableState(upgrade.id))
    const setCurrentHoveredUpgradeItem = useSetRecoilState<Upgrade>(currentHoveredUpgradeItemState)
    const config = useRecoilValue<Config>(configState)

    const images = import.meta.glob('/src/assets/botUpgrades/**/*.png')

    // In your component
    const [imageUrl, setImageUrl] = useState<string>('')

    const handleImageUrl = useCallback(() => {
        const imagePath = `/src/assets/botUpgrades/${upgrade.imgSrc}`

        // Load the image dynamically
        if (images[imagePath]) {
            images[imagePath]().then(module => {
                setImageUrl((module as { default: string }).default)
            })
        }
    }, [images, upgrade])

    const handleEnterBotClick = useCallback(
        debounce(async () => {
            let selectedSound: string | undefined
            if(isUpgradeAffordable) {
                selectedSound = sounds[Math.floor(Math.random() * sounds.length)]
            } else {
                selectedSound = wrongSounds[0]
            }
            const audio = new Audio(selectedSound)
            audio.volume = config.volume
            await audio.play()
        }, 40),
        [config.volume, isUpgradeAffordable]
    )

    useEffect(() => {
        handleImageUrl()
    }, [handleImageUrl]) 
    
    const handleOnClick = useCallback(async () => {
        await handlePurchaseUpgrade(upgrade, isUpgradeAffordable)
        await handleEnterBotClick()
    }, [upgrade, isUpgradeAffordable, config.volume])

    return (
        <OuterUpgradeItem
            $purchasable={isUpgradeAffordable}
            onClick={handleOnClick}
            onMouseEnter={() => setCurrentHoveredUpgradeItem(upgrade)}
            onMouseLeave={() => setCurrentHoveredUpgradeItem({} as Upgrade)}
        >
            <InnerUpgradeItem>
                <UpgradeItemImg src={imageUrl}/>
            </InnerUpgradeItem>
        </OuterUpgradeItem>
    )
}

export default UpgradeItem