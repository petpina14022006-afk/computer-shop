import React from 'react'

const Brand = () => {
    const brands = [
  { name: 'Intel', logo: '⬜' },
  { name: 'AMD', logo: '🟥' },
  { name: 'NVIDIA', logo: '🟩' },
  { name: 'Corsair', logo: '⚫' },
  { name: 'ASUS', logo: '🔵' },
  { name: 'MSI', logo: '🟨' },
  { name: 'Kingston', logo: '🔴' },
  { name: 'Samsung', logo: '🔷' },
]
const extendedBrands = [...brands, ...brands, ...brands]
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y   backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <p className="text-center  text-md uppercase tracking-wider  font-bold mb-8">
          Trusted by Industry Leaders
        </p>
        
        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {extendedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-lg border hover:bg-blue-600 transition-all duration-200"
              >
                <span className="text-3xl">{brand.logo}</span>
                <span className=" font-bold text-foreground whitespace-nowrap">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Brand
