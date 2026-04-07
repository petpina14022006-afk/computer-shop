import React, { Component, useState } from 'react'
import pcCategories from '../data/pcCategories'
import pcComponents from '../data/component'
import CustomPcCart from './CustomPcCart'

const Selector = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCustomPC = pcComponents.filter(pc => {
    const matchCategory = selectedCategory === 'All' || pc.category === selectedCategory
    const matchSearch = pc.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })
  return (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl sm:text-5xl mb-4 text-balance">
            Configure <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">Your PC</span>
          </h2>
          <p className=" max-w-2xl mx-auto">
           Select components across all categories to build your perfect system
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 space-y-4">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {pcCategories.map((category,i) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full  font-bold text-sm uppercase tracking-wider transition-all duration-300 flex gap-5 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-500  shadow-lg '
                    : 'bg-gradient-to-r from-pink-400 to-fuchsia-500-600 border  hover:border-green-400'
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
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full  border  rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomPC.map(pc => (
            
                <CustomPcCart key={pc.id} component={pc} />
            
          ))}
        </div>

        {filteredCustomPC.length === 0 && (
          <div className="text-center py-12">
            <p className=" font-bold">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Selector
