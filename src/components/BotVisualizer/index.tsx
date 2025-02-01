import { useCallback, useEffect, useRef } from 'react'
import { getSpecificIncrementor } from '@state/atoms'
import { useRecoilValue } from 'recoil'

const BotVisualizerItem = ({
    botId,
}: {
    botId: string;
}) => {
    const currentIncrementor = useRecoilValue(getSpecificIncrementor(botId))
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const img = new Image()
        img.src = `/src/assets/botImages/${botId}/${botId}BotDiv.png`
        imageRef.current = img

        img.onload = () => {
            resizeCanvas()
        }

        img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`)
        }
    }, [botId])

    // Function to resize the canvas and redraw circles with images
    const resizeCanvas = useCallback(() => {
        if (!canvasRef.current || !imageRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Update canvas dimensions to match its container
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        // Circle properties
        const circleRadius = 30
        const circleSpacing = 70 // Distance between circles
        const startX = 50 // Initial X offset
        const startY = canvas.height / 2 // Centered vertically
        const units = currentIncrementor?.units ?? 0

        // Clear only the necessary part of the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw circles with the image
        for (let i = 0; i < units; i++) {
            const x = startX + i * circleSpacing + (i % 3 ? 10 : -10)
            const y = startY + (i % 2 ? 10 : -10)

            ctx.save() // Save the current canvas state
            ctx.beginPath()
            ctx.arc(x, y, circleRadius, 0, Math.PI * 2)
            ctx.closePath()
            ctx.clip() // Clip to the circle

            // Fill the circle with a gray color
            ctx.fillStyle = 'gray'
            ctx.fill() // Fill the circle with gray

            // Draw the image inside the clipped circle
            ctx.drawImage(
                imageRef.current,
                x - circleRadius, // Center the image in the circle
                y - circleRadius,
                circleRadius * 2,
                circleRadius * 2
            )

            ctx.restore() // Restore the canvas state
        }
    }, [currentIncrementor?.units])

    useEffect(() => {
        // Add window resize listener
        window.addEventListener('resize', resizeCanvas)

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [resizeCanvas])

    useEffect(() => {
        resizeCanvas()
    }, [currentIncrementor])

    return (
        <canvas
            ref={canvasRef}
            id="myCanvas"
            style={{
                height: 128,
                width: '100%',
                backgroundColor: '#fff',
            }}
        />
    )
}

export default BotVisualizerItem
