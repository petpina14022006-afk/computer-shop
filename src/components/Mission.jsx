import { Zap } from 'lucide-react'
import React from 'react'

const Mission = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-6" >
              Our Mission
            </h2>
            <p className=" mb-4 ">
              At Computer Store, we believe that cutting-edge computing technology should be accessible to everyone. Our mission is to empower individuals and professionals with the tools they need to create, innovate, and achieve their goals.
            </p>
            <p className=" mb-4 ">
              We partner with industry leaders to source the highest-quality components, ensuring every build delivers exceptional performance and reliability.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-blue-500 border rounded-lg p-12 flex items-center justify-center">
            <Zap className="w-20 h-20 " />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mission
