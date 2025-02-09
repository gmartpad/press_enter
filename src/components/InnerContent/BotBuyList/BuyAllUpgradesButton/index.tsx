import { useCallback, useMemo } from 'react'
import { UpgradeBuyAllAnchor, UpgradeBuyAllButton, UpgradeBuyAllTooltip } from './styled'
import { debounce } from 'lodash'
import { buyUpgrade } from '@assets/sounds/upgradeClick'
import { useAtomValue, useSetAtom, useStore } from 'jotai'
import { affordableUpgradesState, bitState, configState, currentHoveredUpgradeItemState, upgradesState } from '@state/atoms'
import { Upgrade } from '@state/upgrades'
import { useIntl } from 'react-intl'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'

const sounds = [buyUpgrade]

function BuyAllUpgradesButton() {
    const intl = useIntl()
    const store = useStore()
    const isClick = useDetectButtonClickBoolean()
    const config = useAtomValue(configState)
    const setUpgrades = useSetAtom(upgradesState)
    const setBits = useSetAtom(bitState)
    const setCurrentHoveredUpgradeItem = useSetAtom(currentHoveredUpgradeItemState)

    // Stable empty object reference
    const EMPTY_UPGRADE = useMemo(() => ({} as Upgrade), [])

    const handleBuyAllUpgrades = useCallback(() => {
        let purchasedAny: boolean
        do {
            purchasedAny = false
            
            // Get current state
            const currentBits = store.get(bitState)
            const currentUpgrades = store.get(upgradesState) as Upgrade[]
    
            // Find all affordable upgrades
            const affordableUpgrades = store.get(affordableUpgradesState)
    
            if (affordableUpgrades.length === 0) break
    
            // Sort by cost ascending, then select cheapest
            const sortedUpgrades = [...affordableUpgrades].sort((a, b) => a.cost - b.cost)
            const cheapestUpgrade = sortedUpgrades[0]
    
            // Update state
            const updatedUpgrades = currentUpgrades.map(u => 
                u.id === cheapestUpgrade.id ? { ...u, purchased: true } : u
            )
            setUpgrades(updatedUpgrades)
            setBits(currentBits - cheapestUpgrade.cost)
            purchasedAny = true
    
        } while (purchasedAny)
    
        setCurrentHoveredUpgradeItem(EMPTY_UPGRADE)
    }, [setBits, setUpgrades, setCurrentHoveredUpgradeItem, store, EMPTY_UPGRADE])
    

    const handleBuyAllSound = useMemo(() => {
        return debounce(async (volume: number) => {
            const selectedSound = sounds[Math.floor(Math.random() * sounds.length)]
            const audio = new Audio(selectedSound)
            audio.volume = volume
            await audio.play()
        }, 40)
    }, [])

    const handleClick = useCallback(() => {
        handleBuyAllUpgrades()
        handleBuyAllSound(config.volume)
    }, [handleBuyAllUpgrades, config.volume])

    return (
        <>
            <UpgradeBuyAllButton
                onClick={() => {
                    if(isClick) {
                        handleClick()
                    }
                }}
                onTouchStart={() => {
                    if(!isClick) {
                        handleClick()
                    }
                }}
            >
                <UpgradeBuyAllAnchor className="buy-all-button">
                    <p style={{ textTransform: 'uppercase' }}>
                        {intl.formatMessage({ id: 'botBuyList.upgrades.buyAllUpgrades.title' })}
                    </p>
                </UpgradeBuyAllAnchor>
            </UpgradeBuyAllButton>
            <UpgradeBuyAllTooltip 
                anchorSelect=".buy-all-button" 
                place="left"
            >
                {intl.formatMessage({ id: 'botBuyList.upgrades.buyAllUpgrades.tooltip' })}
            </UpgradeBuyAllTooltip>
        </>
    )
}

export default BuyAllUpgradesButton