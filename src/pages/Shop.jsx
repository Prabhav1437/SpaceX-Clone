import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../data/products.json'

export default function Shop({ cartCount, openCart }) {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [category, setCategory] = useState('All');
    const navigate = useNavigate();

    const filteredProducts = category === 'All' 
        ? products 
        : products.filter(p => p.category === category);

    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="bg-black text-white px-10 py-4 flex items-center justify-between sticky top-0 z-40">
                <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
                    <span onClick={() => setCategory('All')} className={`cursor-pointer hover:opacity-70 transition-opacity ${category === 'All' ? 'border-b border-white' : ''}`}>All</span>
                    <span onClick={() => setCategory('Shirts')} className={`cursor-pointer hover:opacity-70 transition-opacity ${category === 'Shirts' ? 'border-b border-white' : ''}`}>Shirts</span>
                    <span onClick={() => setCategory('Outerwear')} className={`cursor-pointer hover:opacity-70 transition-opacity ${category === 'Outerwear' ? 'border-b border-white' : ''}`}>Outerwear</span>
                    <span onClick={() => setCategory('Accessories')} className={`cursor-pointer hover:opacity-70 transition-opacity ${category === 'Accessories' ? 'border-b border-white' : ''}`}>Accessories</span>
                </div>
                <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
                    <span onClick={openCart} className="cursor-pointer hover:opacity-70">Cart ({cartCount})</span>
                </div>
            </div>

            <div className="w-full h-[400px] overflow-hidden">
                <img
                    src="https://shop.spacex.com/cdn/shop/files/Banner_Starship_Flight_8_1600x.jpg?v=1741653250"
                    className="w-full h-full object-cover"
                    alt="Shop Banner"
                />
            </div>

            <div className="py-20 px-10">
                <h2 className="text-center text-xl tracking-[0.3em] uppercase font-bold mb-16 text-black">
                    {category === 'All' ? 'Trending' : category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            onClick={() => navigate(`/shop/product/${product.id}`)}
                        >
                            <div className="bg-[#f7f7f7] aspect-[4/5] mb-4 flex items-center justify-center p-8">
                                <img
                                    src={hoveredProduct === product.id && product.images[1] ? product.images[1] : product.images[0]}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    alt={product.name}
                                />
                            </div>
                            <h3 className="text-[11px] font-bold uppercase text-black">{product.name}</h3>
                            <p className="text-[11px] text-black/60 mt-1">${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
