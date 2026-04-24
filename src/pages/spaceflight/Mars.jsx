import React from 'react'
export default function Mars() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <img
                src="https://www.spacex.com/assets/images/human-spaceflight/mars/mars_hero_d.jpg"
                alt="Mars & Beyond"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-widest text-center">
                    Mars & Beyond
                </h1>
            </div>
        </div>
    )
}