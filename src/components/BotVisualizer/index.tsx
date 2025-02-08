import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getSpecificIncrementor } from '@state/atoms'
import { useAtomValue } from 'jotai'

// Global image cache to prevent redundant loads
const imageCache = new Map<string, HTMLImageElement>()

const BotVisualizerItem = ({ botId }: { botId: string }) => {
    const memoizedAtom = useMemo(() => {
        return getSpecificIncrementor(botId)
    }, [botId])
    const currentIncrementor = useAtomValue(memoizedAtom)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(null)
    
    // Canvas optimization refs
    const bufferCanvas = useRef(document.createElement('canvas'))
    const resizeFrame = useRef(0)
    const isMounted = useRef(true)

    // Unified drawing function
    const drawCanvas = useCallback(() => {
        if (!canvasRef.current || !currentImage) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const bufferCtx = bufferCanvas.current.getContext('2d')
        
        if (!ctx || !bufferCtx) return

        // Set buffer dimensions
        bufferCanvas.current.width = canvas.width
        bufferCanvas.current.height = canvas.height

        // Clear buffers
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        bufferCtx.clearRect(0, 0, canvas.width, canvas.height)

        // Circle configuration
        const circleRadius = 30
        const circleSpacing = 70
        const startX = 50
        const startY = canvas.height / 2
        const units = currentIncrementor?.units ?? 0

        // Draw to buffer first
        for (let i = 0; i < units; i++) {
            const x = startX + i * circleSpacing + (i % 3 ? 10 : -10)
            const y = startY + (i % 2 ? 10 : -10)

            bufferCtx.save()
            bufferCtx.beginPath()
            bufferCtx.arc(x, y, circleRadius, 0, Math.PI * 2)
            bufferCtx.closePath()
            bufferCtx.clip()

            // Fill with gray background
            bufferCtx.fillStyle = 'gray'
            bufferCtx.fill()

            // Draw image
            bufferCtx.drawImage(
                currentImage,
                x - circleRadius,
                y - circleRadius,
                circleRadius * 2,
                circleRadius * 2
            )

            bufferCtx.restore()
        }

        // Copy buffer to main canvas
        ctx.drawImage(bufferCanvas.current, 0, 0)
    }, [currentIncrementor?.units, currentImage])

    // Throttled resize handler
    const handleResize = useCallback(() => {
        if (!canvasRef.current) return

        cancelAnimationFrame(resizeFrame.current)
        resizeFrame.current = requestAnimationFrame(() => {
            const canvas = canvasRef.current
            if (!canvas) return

            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            drawCanvas()
        })
    }, [drawCanvas])

    // Image loading effect
    useEffect(() => {
        isMounted.current = true

        const loadImage = async () => {
            if (imageCache.has(botId)) {
                setCurrentImage(imageCache.get(botId)!)
                handleResize()
                return
            }

            const img = new Image()
            img.src = `/src/assets/botImages/${botId}/${botId}BotDiv.png`

            img.onload = () => {
                if (!isMounted.current) return
                imageCache.set(botId, img)
                setCurrentImage(img)
                handleResize()
            }

            img.onerror = () => {
                console.error(`Failed to load image: ${img.src}`)
            }
        }

        loadImage()

        return () => {
            isMounted.current = false
            cancelAnimationFrame(resizeFrame.current)
        }
    }, [botId, handleResize])

    // Resize listener and cleanup
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(resizeFrame.current)

            // Canvas cleanup
            const canvas = canvasRef.current
            if (canvas) {
                const ctx = canvas.getContext('2d')
                ctx?.clearRect(0, 0, canvas.width, canvas.height)
                canvas.width = 1
                canvas.height = 1
            }
        }
    }, [handleResize])

    // Redraw when units change
    useEffect(() => {
        drawCanvas()
    }, [currentIncrementor?.units, drawCanvas])

    return (
        <canvas
            ref={canvasRef}
            style={{
                height: 128,
                width: '100%',
                backgroundColor: '#fff',
            }}
        />
    )
}

export default BotVisualizerItem