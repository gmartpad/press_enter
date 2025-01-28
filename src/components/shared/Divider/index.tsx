const Divider = () => {
    return (
        <div style={{ display: 'flex', overflow: 'hidden' }}>
            <svg viewBox="0 0 512 16" xmlns="http://www.w3.org/2000/svg" style={{ height: 16, width: 512, overflow: 'initial' }}>
                <defs>
                    <linearGradient id="monoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#0a0a0a" }} />
                        <stop offset="20%" style={{ stopColor: "#2a2a2a" }} />
                        <stop offset="40%" style={{ stopColor: "#0a0a0a" }} />
                        <stop offset="60%" style={{ stopColor: "#2a2a2a" }} />
                        <stop offset="80%" style={{ stopColor: "#0a0a0a" }} />
                        <stop offset="100%" style={{ stopColor: "#2a2a2a" }} />
                    </linearGradient>
                    
                    <linearGradient id="monoGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
                        <stop offset="50%" style={{ stopColor: "#ffffff", stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
                    </linearGradient>
                    
                    <filter id="monoNoise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="7" />
                        <feColorMatrix type="saturate" values="0" />
                        <feBlend mode="overlay" in2="SourceGraphic" />
                    </filter>
                    
                    <pattern id="monoCircuits" width="32" height="16" patternUnits="userSpaceOnUse">
                        <path d="M0 8 H32 M16 0 V16" stroke="#ffffff" strokeWidth="0.5" opacity="0.1" />
                        <circle cx="16" cy="8" r="2" fill="#ffffff" opacity="0.2" />
                    </pattern>
                </defs>
                
                <rect width="512" height="16" fill="url(#monoGradient)" />
                
                <rect width="512" height="16" fill="url(#monoCircuits)" />
                
                <rect width="512" height="16" fill="#FFFFFF" opacity="0.05" filter="url(#monoNoise)" />
                
                <rect width="512" height="16" fill="url(#monoGlow)" opacity="0.3" />
                
                <g opacity="0.1">
                    <rect x="0" y="0" width="512" height="0.5" fill="#ffffff" />
                    <rect x="0" y="4" width="512" height="0.5" fill="#ffffff" />
                    <rect x="0" y="8" width="512" height="0.5" fill="#ffffff" />
                    <rect x="0" y="12" width="512" height="0.5" fill="#ffffff" />
                </g>
                
                <g opacity="0.4">
                    <rect x="50" y="2" width="20" height="1" fill="#ffffff" />
                    <rect x="200" y="6" width="30" height="1" fill="#ffffff" />
                    <rect x="350" y="10" width="25" height="1" fill="#ffffff" />
                    <rect x="450" y="14" width="15" height="1" fill="#ffffff" />
                </g>
            </svg>
        </div>
    )
}
  
export default Divider