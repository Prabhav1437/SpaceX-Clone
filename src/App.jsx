import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppFooter from './components/AppFooter.jsx'
import Home from './pages/Home'
import Dragon from './pages/Dragon'
import Falcon9 from './pages/Falcon9'
import FalconHeavy from './pages/FalconHeavy'
import Starship from './pages/Starship'
import Overview from './pages/spaceflight/Overview'
import SpaceStation from './pages/spaceflight/SpaceStation'
import EarthOrbit from './pages/spaceflight/EarthOrbit'
import TheMoon from './pages/spaceflight/TheMoon'
import Mars from './pages/spaceflight/Mars'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => { lenis.destroy() }
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles/starship" element={<Starship />} />
          <Route path="/vehicles/dragon" element={<Dragon />} />
          <Route path="/vehicles/falcon-9" element={<Falcon9 />} />
          <Route path="/vehicles/falcon-heavy" element={<FalconHeavy />} />
          <Route path="/spaceflight/overview" element={<Overview />} />
          <Route path="/spaceflight/space-station" element={<SpaceStation />} />
          <Route path="/spaceflight/earth-orbit" element={<EarthOrbit />} />
          <Route path="/spaceflight/the-moon" element={<TheMoon />} />
          <Route path="/spaceflight/mars" element={<Mars />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  )
}
