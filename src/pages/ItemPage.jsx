import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../data/products.json'

export default function ItemPage({ cartCount, openCart, addToCart }) {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const id = window.location.pathname.split('/').pop()
    const product = products.find(p => p.id === parseInt(id))

    if (!product) return <div className="bg-black min-h-screen text-white flex items-center justify-center uppercase tracking-widest text-[10px]">Product not found</div>

    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="bg-black text-white px-10 py-4 flex items-center justify-between sticky top-0 z-40">
                <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
                    <span onClick={() => navigate('/shop')} className="cursor-pointer hover:opacity-70">Back to Shop</span>
                </div>
                <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
                    <span onClick={openCart} className="cursor-pointer hover:opacity-70">Cart ({cartCount})</span>
                </div>
            </div>

            <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-20 py-20 px-10">
                <div className="flex-1 bg-[#f7f7f7] p-10">
                    <img src={product.images[0]} alt={product.name} className="w-full h-auto object-contain" />
                </div>
                
                <div className="flex-1 text-black flex flex-col justify-center">
                    <h1 className="text-2xl font-bold uppercase mb-4 tracking-tighter">{product.name}</h1>
                    <p className="text-xl mb-12 text-black/60">${product.price}</p>
                    
                    <div className="flex items-center gap-6 mb-12">
                        <div className="flex items-center border border-black/20">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 border-r border-black/20">-</button>
                            <span className="px-6 font-mono text-[12px]">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 border-l border-black/20">+</button>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">Quantity</span>
                    </div>

                    <button 
                        onClick={() => addToCart(product, quantity)}
                        className="bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-80 transition-all"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
