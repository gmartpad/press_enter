import React, { useCallback, useEffect, useRef, useState } from 'react'
import AccessDenied from '@components/AccessDenied'
import Loading from '@components/Loading'

interface BroadcastProviderProps {
    children: React.ReactNode
}

const BroadcastProvider = ({ children }: BroadcastProviderProps) => {
    const [tabId,] = useState<string>(() => {
        // Fallback for browsers that don't support randomUUID
        if (crypto.randomUUID) {
            return crypto.randomUUID()
        }
        // Generate a random string using crypto.getRandomValues
        const array = new Uint8Array(16)
        crypto.getRandomValues(array)
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
    })
    const [loading, setLoading] = useState<boolean>(true)
    const accessDeniedRef = useRef<boolean>(true)
    const channel = new BroadcastChannel("tab_counter_channel")

    const echoTimeoutId = useRef<NodeJS.Timeout | null>(null)

    const handleChannelMessage = useCallback((event: MessageEvent) => {
        switch(event.data.type) {
        case "HELLO":
            channel.postMessage({ type: "ECHO", accessDenied: accessDeniedRef.current, tabId })
            break
        case "ECHO":
            if(echoTimeoutId.current && !event.data.accessDenied) {
                clearTimeout(echoTimeoutId.current)
                setLoading(false)
            }
            break
        }

    // eslint-disable-next-line
    }, [channel, accessDeniedRef.current, tabId])

    useEffect(() => {
        // Send a "HELLO" message when this tab opens
        channel.postMessage({ type: "HELLO" })
                
        // Listen for messages
        channel.addEventListener("message", handleChannelMessage)
      
        const activeTab = localStorage.getItem('activeTab')
    
        if(!activeTab) {
            localStorage.setItem('activeTab', tabId)
            setLoading(false)
        } else {
            echoTimeoutId.current = setTimeout(() => {
                localStorage.setItem('activeTab', tabId)
                setLoading(false)
                accessDeniedRef.current = false
            }, 750)
        }

        window.addEventListener('beforeunload', () => {
            const activeTab = localStorage.get('activeTab')
            if(activeTab === tabId) {
                localStorage.removeItem('activeTab')
            }
        })

        return () => {
            channel.removeEventListener("message", handleChannelMessage)
            channel.close()
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
    )

    if(loading) return (
        <Loading/>
    )

    if(accessDeniedRef.current) return (
        <AccessDenied/>
    )

    return children
}

export default BroadcastProvider