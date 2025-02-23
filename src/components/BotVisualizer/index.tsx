import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getSpecificIncrementor } from '@state/atoms'
import { useAtomValue } from 'jotai'
import { StyledCanvas } from './styled'

// Global image cache to prevent redundant loads
const imageCache = new Map<string, HTMLImageElement>()

// Add after the existing imageCache
const backgroundCache = new Map<string, string>()

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

    // Add new state for background
    const [background, setBackground] = useState<string>('')
    
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

        // Clear buffers with transparent background
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        bufferCtx.clearRect(0, 0, canvas.width, canvas.height)

        // Make background transparent to show styled background
        ctx.fillStyle = 'transparent'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        bufferCtx.fillStyle = 'transparent'
        bufferCtx.fillRect(0, 0, canvas.width, canvas.height)

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

            // Draw shadow circle first
            bufferCtx.shadowColor = '#000'
            bufferCtx.shadowBlur = 6
            bufferCtx.shadowOffsetX = -3
            bufferCtx.shadowOffsetY = 3
            
            // Draw a filled circle for the shadow
            bufferCtx.beginPath()
            bufferCtx.arc(x, y, circleRadius, 0, Math.PI * 2)
            bufferCtx.fillStyle = 'gray'
            bufferCtx.fill()
            
            // Clear shadow for the actual content
            bufferCtx.shadowColor = 'transparent'
            
            // Clip for the image
            bufferCtx.beginPath()
            bufferCtx.arc(x, y, circleRadius, 0, Math.PI * 2)
            bufferCtx.clip()

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

            try {
                const images = import.meta.glob('/src/assets/botImages/**/*.png')
                const imagePath = `/src/assets/botImages/${botId}/${botId}BotDiv.png`
                
                if (images[imagePath]) {
                    const module = await images[imagePath]()
                    const img = new Image()
                    img.src = (module as { default: string }).default
                    
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
            } catch (error) {
                console.error(`Failed to load image for bot ${botId}:`, error)
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

    // Add new background loading effect
    useEffect(() => {
        const loadBackground = async () => {
            const backgroundPath = '/src/assets/botVisualizer/botVisualizerBackground.png'
            
            if (backgroundCache.has(backgroundPath)) {
                setBackground(backgroundCache.get(backgroundPath)!)
                return
            }

            try {
                const images = import.meta.glob('/src/assets/botVisualizer/*.png')
                if (images[backgroundPath]) {
                    const module = await images[backgroundPath]()
                    if (isMounted.current) {
                        const imageUrl = (module as { default: string }).default
                        backgroundCache.set(backgroundPath, imageUrl)
                        setBackground(imageUrl)
                    }
                }
            } catch (error) {
                console.error('Failed to load background:', error)
            }
        }

        loadBackground()
    }, [])

    return (
        <StyledCanvas
            ref={canvasRef}
            $background={background}
        />
    )
}

export default BotVisualizerItem