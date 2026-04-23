import React from 'react'

export default function Hero() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    src="https://sxcontent9668.azureedge.us/cms-assets/assets/20260423_Starship_Doc_Web_Clips_1920_87be0bef68.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-24 left-8 lg:left-16 z-10 max-w-xl">
                    <p className="text-white/70 text-[11px] uppercase tracking-[0.2em] mb-3 font-light">
                        April 24, 2026
                    </p>
                    <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-3">
                        Test Like You Fly
                    </h1>
                    <p className="text-white/80 text-[13px] font-light mb-6">
                        The next generation of Starship is here
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-3 px-5 py-2.5 border border-white/60 text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300">
                            Watch Now
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <a href="#" className="flex items-center justify-center w-9 h-9 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative h-screen w-full bg-black overflow-hidden flex items-center">
                <div className="absolute right-0 top-0 h-full w-full pointer-events-none overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-full min-w-full object-cover"
                    >
                        <source src="https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 flex flex-col items-center lg:items-start px-6 lg:pl-48 text-center lg:text-left">
                    <div className="max-w-[790px]">
                        <h2 className="text-white text-4xl md:text-[52px] leading-[1.0] font-bold uppercase tracking-tight animate-slide-left">
                            Making Life <br className="hidden md:block" />
                            Multiplanetary
                        </h2>
                        <p className="text-white text-[13px] mt-5 font-light animate-slide-left delay-300 max-w-md mx-auto lg:mx-0">
                            SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.
                        </p>
                        <div className="mt-8 animate-slide-bottom delay-500 flex justify-center lg:justify-start">
                            <button className="group flex items-center gap-4 px-8 py-3.5 border border-white text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
                                Explore
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </section>
        </>
    )
}