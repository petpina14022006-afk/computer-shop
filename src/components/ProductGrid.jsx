import React from 'react'
import { useState } from 'react'
import ProductCart from './ProductCart.jsx'
import products from '../data/product.js'
import categories from '../data/categories.js'
import { Link } from 'react-router-dom'
const ProductGrid = () => {
   const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl sm:text-5xl mb-4 text-balance">
            Featured <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Handpicked selection of premium components and systems for every need
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 space-y-4">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full  font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-600 to-black  shadow-lg '
                    : 'bg-gradient-to-r from-black to-red-600 border  hover:border-green-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full  border  rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Link to={`/productdetail/${product.id}`}>
                <ProductCart key={product.id} product={product} />
            </Link> 
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className=" font-bold">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid
