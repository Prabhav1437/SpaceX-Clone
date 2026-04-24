import React from 'react'

export default function TheMoon() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                src="https://sxcontent9668.azureedge.us/cms-assets/assets/HLS01_FlyBy_03.mp4"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-widest text-center">
                    The Moon
                </h1>
            </div>
        </div>
    )
}