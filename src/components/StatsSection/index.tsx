import { autoIncrementorsState, Config, configState, upgradesState } from "@state/atoms"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import BotStats from "./BotStats"
import { StatsSectionContainer, TabButton, TabButtonContainer } from "./styled"
import groupUpgradesByIncrementorId from "@utils/groupUpgradesByIncrementorId"
import UpgradeStats from "./UpgradeStats"
import { useIntl } from "react-intl"
import { sound1 } from '@assets/sounds/sharedClick'
import { useAtomValue } from "jotai"

const StatsSection = () => {
    const intl = useIntl()

    const config = useAtomValue(configState)
    const upgrades = useAtomValue(upgradesState)
    const autoIncrementors = useAtomValue(autoIncrementorsState)

    const [currentTab, setCurrentTab] = useState<'bot' | 'upgrade'>('bot')
    
    const upgradesGroupedByIncrementorId = useMemo(() => groupUpgradesByIncrementorId(upgrades.filter((u) => u.purchased)), [upgrades])
    
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const scrollPositionRef = useRef<number>(0)

    useEffect(() => {
        if(config.statsSectionOpen && scrollRef.current) {
            scrollRef.current.scrollTop = scrollPositionRef.current
        }
    }, [config.statsSectionOpen])

    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handleTabClickSound = useCallback(() => {
        if (audioRef.current) {
            const randomSound = sound1
            audioRef.current.src = randomSound
            audioRef.current.volume = config.volume
            audioRef.current.play()
        }
    }, [config])

    const handleTabClick = useCallback((tabKey: 'bot' | 'upgrade') => {
        handleTabClickSound()
        setCurrentTab(tabKey)
    }, [handleTabClickSound])

    if((config as Config).statsSectionOpen) return (
        <StatsSectionContainer
            ref={scrollRef}
            onScroll={() => {
                scrollPositionRef.current = Number(scrollRef.current?.scrollTop)
            }}
        >
            <TabButtonContainer>
                <TabButton
                    onClick={() => handleTabClick('bot')}
                    onTouchStart={() => handleTabClick('bot')}
                >
                    {currentTab === 'bot' && '* '}{intl.formatMessage({ id: 'statsSection.botStats.title' })}
                </TabButton>
                <TabButton
                    onClick={() => handleTabClick('upgrade')}
                    onTouchStart={() => handleTabClick('upgrade')}
                >
                    {currentTab === 'upgrade' && '* '}{intl.formatMessage({ id: 'statsSection.upgradeStats.title' })}
                </TabButton>
            </TabButtonContainer>
            <div style={{ paddingTop: 120 }}>
                {currentTab === 'bot' && (
                    <>
                        {autoIncrementors.map((i, k) => (
                            <BotStats incrementor={i} key={k}/>
                        ))}
                    </>
                )}
                {currentTab === 'upgrade' && (
                    <>
                        {upgradesGroupedByIncrementorId.map((i, k) => (
                            <UpgradeStats upgrades={i} key={k} />
                        ))}
                    </>
                )}
            </div>
        </StatsSectionContainer>
    )
}

export default StatsSection