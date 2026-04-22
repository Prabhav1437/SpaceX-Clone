import React from 'react'

export default function Landing() {
    return (
        <>
        <div className="relative w-full h-screen">
            <img
                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg"
                alt=""
                className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute top-1/2 md:top-1/4 left-6 right-6 md:left-auto md:right-20 transform -translate-y-1/2 text-white max-w-[700px] z-10 text-center md:text-left">

                <h1 className="text-3xl md:text-[35px] leading-[1.0] font-bold uppercase tracking-tight">
                    Revolutionizing space technology
                </h1>

                <p className="text-[13px] font-light mt-4">
                    SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.
                </p>

                <button className="cursor-pointer mt-6 px-8 py-4 text-[10px] tracking-tight font-semibold uppercase bg-black/40 text-white transition-all duration-300">
                    Learn More <span className="ml-2 text-lg"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
            </div>
        </div>

        <div className="relative w-full h-screen">
            <video 
                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4" 
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
            ></video>
            <div className="absolute top-1/2 md:top-1/4 left-6 right-6 md:right-auto md:left-20 transform -translate-y-1/2 text-white max-w-[700px] z-10 text-center md:text-left">

                <h1 className="text-3xl md:text-[35px] leading-[1.0] font-bold uppercase tracking-tight">
                    World's leading launch service provider
                </h1>

                <p className="text-[13px] font-light mt-4">
                    SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.
                </p>

                <button className="cursor-pointer mt-6 px-8 py-4 text-[10px] tracking-tight font-semibold uppercase bg-black/40 text-white transition-all duration-300">
                   Reserve Your Ride <span className="ml-2 text-lg"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
            </div>
        </div>

        <div className="relative w-full h-screen">
            <img
                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg"
                alt=""
                className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute top-1/2 md:top-1/4 left-6 right-6 md:left-auto md:right-20 transform -translate-y-1/2 text-white max-w-[700px] z-10 text-center md:text-left">

                <h1 className="text-3xl md:text-[35px] leading-[1.0] font-bold uppercase tracking-tight">
                    Advancing human spaceflight
                </h1>

                <p className="text-[13px] font-light mt-4">
                    Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.
                </p>

                <button className="cursor-pointer mt-6 px-8 py-4 text-[10px] tracking-tight font-semibold uppercase bg-black/40 text-white transition-all duration-300">
                    Join A Mission <span className="ml-2 text-lg"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
            </div>
        </div>

        <div className="relative w-full h-screen">
            <video 
                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4" 
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
            ></video>
            <div className="absolute top-1/2 left-6 right-6 md:right-auto md:left-30 transform -translate-y-1/2 text-white max-w-[700px] z-10 text-center md:text-left">

                <h1 className="text-3xl md:text-[35px] leading-[1.0] font-bold uppercase tracking-tight">
                    Delivering high-speed internet from space
                </h1>

                <p className="text-[13px] font-light mt-4">
                    Starlink is the world's most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.
                </p>

                <button className="cursor-pointer mt-6 px-8 py-4 text-[10px] tracking-tight font-semibold uppercase bg-black/40 text-white transition-all duration-300">
                   Order Now <span className="ml-2 text-lg"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
            </div>
        </div>
    </>
    )
}