import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const btn = "block w-full text-left px-5 py-2.5 text-white/70 hover:text-white text-[10px] tracking-[0.15em] uppercase bg-transparent border-none cursor-pointer"
const panel = "absolute top-full left-0 mt-2 bg-black/95 min-w-[160px] py-3 z-50"
const label = "flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"

export default function Navbar() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(null)
    const closeTimer = useRef(null)

    const handleEnter = (key) => {
        clearTimeout(closeTimer.current)
        setOpen(key)
    }

    const handleLeave = () => {
        closeTimer.current = setTimeout(() => setOpen(null), 300)
    }

    const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 22, minutes: 30, seconds: 60 })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev
                if (seconds > 0) { seconds-- }
                else { seconds = 59; if (minutes > 0) { minutes-- } else { minutes = 59; if (hours > 0) { hours-- } else { hours = 23; if (days > 0) days-- } } }
                return { days, hours, minutes, seconds }
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatNum = (num) => num.toString()

    return (
        <nav className="fixed w-full top-0 right-0 z-50 flex flex-col lg:flex-row items-center justify-between bg-black/60 backdrop-blur-sm p-4 lg:ml-10 lg:mb-10 lg:p-0">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto">
                <Link to="/" className="flex-shrink-0">
                    <img src="/logo.png" alt="logo" className="w-40 lg:w-52 h-auto cursor-pointer" />
                </Link>
                <ul className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8 text-[10px] tracking-[0.15em] text-white/70 uppercase">

                    <li className="relative" onMouseEnter={() => handleEnter('vehicles')} onMouseLeave={handleLeave}>
                        <span className={label}>Vehicles</span>
                        {open === 'vehicles' && (
                            <div className={panel}>
                                <button onClick={() => navigate('/vehicles/starship')} className={btn}>Starship</button>
                                <button onClick={() => navigate('/vehicles/dragon')} className={btn}>Dragon</button>
                                <button onClick={() => navigate('/vehicles/falcon-9')} className={btn}>Falcon 9</button>
                                <button onClick={() => navigate('/vehicles/falcon-heavy')} className={btn}>Falcon Heavy</button>
                            </div>
                        )}
                    </li>

                    <li className="relative" onMouseEnter={() => handleEnter('spaceflight')} onMouseLeave={handleLeave}>
                        <span className={label}>Human Spaceflight</span>
                        {open === 'spaceflight' && (
                            <div className={panel}>
                                <button onClick={() => navigate('/spaceflight/overview')} className={btn}>Overview</button>
                                <button onClick={() => navigate('/spaceflight/space-station')} className={btn}>Space Station</button>
                                <button onClick={() => navigate('/spaceflight/earth-orbit')} className={btn}>Earth Orbit</button>
                                <button onClick={() => navigate('/spaceflight/the-moon')} className={btn}>The Moon</button>
                                <button onClick={() => navigate('/spaceflight/mars')} className={btn}>Mars & Beyond</button>
                            </div>
                        )}
                    </li>

                    <li className="cursor-pointer hover:text-white transition-colors duration-300" onClick={() => alert('Coming Soon')}>Starlink</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300" onClick={() => alert('Coming Soon')}>Starshield</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300" onClick={() => alert('Coming Soon')}>xAI</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300" onClick={() => alert('Coming Soon')}>TeraFab</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300" onClick={() => alert('Coming Soon')}>Company</li>
                    <li className="cursor-pointer hover:text-white transition-colors duration-300">Shop</li>
                </ul>
            </div>
            <div className="flex items-center mt-6 lg:mt-0">
                <div className="border border-white/20 rounded-lg px-2 lg:px-4 py-2 lg:py-3.5 flex items-center gap-4 lg:gap-10 backdrop-blur-sm group hover:border-white/40 transition-all duration-500 cursor-pointer lg:mr-20">
                    <span className="text-white text-[8px] uppercase hidden sm:inline">Upcoming Launches</span>
                    <div className="text-white text-[10px] font-mono tracking-[0.3em] flex items-center">
                        <span className="opacity-40 text-[11px] mr-2 font-sans tracking-normal">T-</span>
                        <span>{timeLeft.days}</span><span className="mx-1">:</span>
                        <span>{formatNum(timeLeft.hours)}</span><span className="mx-1">:</span>
                        <span>{formatNum(timeLeft.minutes)}</span><span className="mx-1">:</span>
                        <span>{formatNum(timeLeft.seconds)}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
