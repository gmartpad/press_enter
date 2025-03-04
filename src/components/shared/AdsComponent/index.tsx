import { useEffect } from "react"

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
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            console.error("Google AdSense failed to load:", e)
        }
    }, [])

    return (
        <div 
            className="ad-container" 
            style={{
                width: $windowInnerWidth > 1024 ? "315px" : "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ins 
                className="adsbygoogle"
                style={{display: "block"}}
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
