import React from 'react'

export default function Dragon() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <img
                src="https://www.spacex.com/assets/images/vehicles/dragon/dragon_feature.jpg"
                alt="Dragon"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-widest mb-4">
                    Dragon
                </h1>
                <p className="text-white/80 text-[11px] uppercase tracking-[0.3em] font-light">
                    Sending Humans and Cargo into Space
                </p>
            </div>
        </div>
    )
}
