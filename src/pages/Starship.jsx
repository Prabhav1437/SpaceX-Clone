import React from 'react'

export default function Starship() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <img
                src="https://www.spacex.com/assets/images/vehicles/starship/starship_hero_d.jpg"
                alt="Starship"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-widest mb-4">
                    Starship
                </h1>
                <p className="text-white/80 text-[11px] uppercase tracking-[0.3em] font-light">
                    Service to Earth Orbit, Moon, Mars and Beyond
                </p>
            </div>
        </div>
    )
}
