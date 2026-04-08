import React from 'react'
import Contact from '../components/Contact'
import Question from '../components/Question'

const Support = () => {
  return (
    <div className="py-10">
        {/* hero section */}
       <section className="py-10 border-b">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-5xl font-bold mb-6" >
            We're Here to Help
          </h1>
          <p className="text-xl  mb-8">
            Get answers to common questions and connect with our support team
          </p>
        </div>
      </section>
      
      {/* contact */}
      <Contact/>

      {/* FAQ for customer*/}
      <Question/>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 border border-green-500/20 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Didn&apos;t find what you needed?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our support team is always ready to help with any questions or concerns
          </p>
          <a href="" className="inline-block px-8 py-3 bg-gradient-to-r  from-red-500 to-pink-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-500 transition-all duration-300" >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  )
}

export default Support
