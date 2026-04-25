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
import Shop from './pages/Shop'
import ItemPage from './pages/ItemPage'

export default function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => { lenis.destroy() }
  }, [])

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
    setIsCartOpen(true)
  }

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        {isCartOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsCartOpen(false)} />
            <div className="relative w-80 bg-white h-full p-8 text-black shadow-xl">
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-bold uppercase tracking-widest">Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-2xl">&times;</button>
              </div>
              <div className="space-y-6 overflow-y-auto max-h-[60vh]">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img src={item.images[0]} className="w-12 h-12 object-contain bg-gray-100" />
                    <div>
                      <p className="text-[10px] font-bold uppercase">{item.name}</p>
                      <p className="text-[12px]">{item.quantity} x ${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 border-t bg-gray-50">
                <div className="flex justify-between font-bold mb-4">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
                <button className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-widest">Checkout</button>
              </div>
            </div>
          </div>
        )}

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
          <Route path="/shop" element={<Shop cartCount={totalCount} openCart={() => setIsCartOpen(true)} />} />
          <Route path="/shop/product/:id" element={<ItemPage cartCount={totalCount} openCart={() => setIsCartOpen(true)} addToCart={addToCart} />} />
          <Route path="/spaceflight/mars" element={<Mars />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  )
}
