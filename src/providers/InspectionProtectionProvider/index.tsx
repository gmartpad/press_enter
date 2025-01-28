import { useEffect } from "react"

const InspectProtectionProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Prevent right click
        const handleContextMenu = (e: any) => {
            e.preventDefault()
            return false
        }
  
        // Prevent keyboard shortcuts
        const handleKeyDown = (e: any) => {
        // Prevent F12
            if (e.key === 'F12') {
                e.preventDefault()
                return false
            }
  
            // Prevent Ctrl+Shift+I (Windows) and Cmd+Option+I (Mac)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
                e.preventDefault()
                return false
            }
  
            // Prevent Ctrl+Shift+C (Windows) and Cmd+Option+C (Mac)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
                e.preventDefault()
                return false
            }
  
            // Prevent Ctrl+U (View Source)
            if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
                e.preventDefault()
                return false
            }
        }
  
        // DevTools detection
        const detectDevTools = () => {
            const devtools = {
                isOpen: false,
                toString: function() {
                    if (!this.isOpen) {
                        this.isOpen = true
                        alert("DevTools detected!")
                    }
                    return ''
                }
            }
  
            const checkDevTools = () => {
                console.log(devtools)
                console.clear()
            }
  
            setInterval(checkDevTools, 1000)
        }
  
        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu)
        document.addEventListener('keydown', handleKeyDown)
        detectDevTools()
  
        // Cleanup function
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, []) // Empty dependency array means this runs once on mount
  
    return (
        <div className="select-none">
            {children}
        </div>
    )
}

export default InspectProtectionProvider