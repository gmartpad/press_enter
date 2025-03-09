import { useEffect, useRef, useState } from "react"

declare global {
    interface Window {
      adsbygoogle: any[];
    }
}

const AdComponent = (
    {
        $windowInnerWidth
    }: {
        $windowInnerWidth: number
    }
) => {
    const adRef = useRef<HTMLDivElement>(null);
    const [adFailed, setAdFailed] = useState(false);
    
    useEffect(() => {
        // Check if AdSense script is loaded
        const isAdSenseLoaded = typeof window.adsbygoogle !== 'undefined';
        
        // Small timeout to ensure the container is properly rendered with dimensions
        const timer = setTimeout(() => {
            try {
                if (!isAdSenseLoaded) {
                    console.warn("AdSense not loaded, hiding container");
                    setAdFailed(true);
                    return;
                }
                
                if (adRef.current && adRef.current.clientWidth > 0) {
                    // Set up error detection
                    const errorHandler = (e: ErrorEvent) => {
                        if (e.message && e.message.includes('adsbygoogle')) {
                            console.warn("AdSense error detected, hiding container");
                            setAdFailed(true);
                            window.removeEventListener('error', errorHandler);
                        }
                    };
                    
                    window.addEventListener('error', errorHandler);
                    
                    // Try to load the ad
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    
                    // Set a timeout to check if ad loaded properly
                    const adCheckTimer = setTimeout(() => {
                        // Check if ad container has content
                        const iframe = document.querySelector('.ad-container iframe');
                        if (!iframe || iframe.clientHeight < 10) {
                            console.warn("Ad appears to be blocked or failed to load");
                            setAdFailed(true);
                        }
                        window.removeEventListener('error', errorHandler);
                    }, 100);
                    
                    return () => {
                        clearTimeout(adCheckTimer);
                        window.removeEventListener('error', errorHandler);
                    };
                } else {
                    console.warn("Ad container has zero width, not loading ad");
                    setAdFailed(true);
                }
            } catch (e) {
                console.error("Google AdSense failed to load:", e);
                setAdFailed(true);
            }
        }, 100);
        
        return () => clearTimeout(timer);
    }, [$windowInnerWidth]); // Re-run when window width changes

    // Don't render anything if ad failed to load
    if (adFailed) {
        return null;
    }

    return (
        <div 
            ref={adRef}
            className="ad-container" 
            style={{
                width: $windowInnerWidth > 1024 ? "315px" : "100%",
                minHeight: "250px", // Add minimum height
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ins 
                className="adsbygoogle"
                style={{
                    display: "block",
                    width: $windowInnerWidth > 1024 ? "300px" : "100%", // Explicit width
                    height: "250px" // Explicit height
                }}
                data-ad-client="ca-pub-5989837191196250"
                data-ad-slot="5076717803"
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
        </div>
    )
}

export default AdComponent
