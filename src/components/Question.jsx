import { AlertCircle, HelpCircle, MessageSquare } from 'lucide-react'
import React from 'react'

const Question = () => {
    const faq=[
        {
                icon: <HelpCircle className="w-6 h-6 " />,
                question: 'What is your return policy?',
                answer: 'We offer a 30-day money-back guarantee on all purchases. If you&apos;re not satisfied, simply contact us for a return label.'
              },
              {
                icon: <AlertCircle className="w-6 h-6 " />,
                question: 'How long does shipping take?',
                answer: 'Standard shipping takes 5-7 business days. Express shipping available for 2-3 business days.'
              },
              {
                icon: <MessageSquare className="w-6 h-6 " />,
                question: 'Do you offer technical support?',
                answer: 'Yes! Our expert team provides free technical support for setup, troubleshooting, and compatibility questions.'
              },
              {
                icon: <HelpCircle className="w-6 h-6 " />,
                question: 'Can I customize my build?',
                answer: 'Absolutely! Use our Custom PC builder to select exactly the components you need, or contact us for personalized recommendations.'
              }
    ]
  return (
    <div>
       <section className="bg-card border-y py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 sm:text-center md:text-left" >
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="border  rounded-lg p-6 backdrop-blur-3xl hover:border-green-500 transition-colors">
                <div className="flex gap-4 text-green-500">
                  {item.icon}
                  <div className="flex-1  text-white">
                    <h3 className="font-bold text-lg mb-2" >
                      {item.question}
                    </h3>
                    <p className="">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Question
