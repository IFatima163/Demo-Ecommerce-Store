import { User } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <section id='contact'>
        {/* Background Element */}
        <div 
            className='
                absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 
                rounded-full filter blur-3xl opacity-50 -translate-y-48
            '
        ></div>
        <div 
            className='
                absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-100 to-cyan-100 
                rounded-full fill-transparent blur-3xl opacity-50 translate-y-48
            '
        ></div>

        <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center mb-16'>
                <div 
                    className='
                        inline-flex items-center px-4 py-4 bg-gradient-to-r from-purple-100 
                        to-pink-100 rounded-full mb-6
                    '
                >
                    <span className='text-purple-600 font-semibold'>Get in Touch</span>
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                    Let's Start
                    <span 
                        className='
                            block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600
                        '
                    >
                        Something Great
                    </span>
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                    Ready to transform your vision into reality? We'd love to hear about
                    your project and discuss how we can help you achieve your goals.
                </p>                    
            </div>

            {/* Contact Method */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
                <div 
                    className='
                        group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all 
                        duration-300 hover:-translate-y-2 border border-gray-100 text-center
                    '
                >
                    <div
                        className={`
                            w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center
                            mx-auto mb-4 group-hover:scale-110 transition-all duration-300
                        `}
                    >
                        <User size={24} className='text-white'/>
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>Title</h3>
                    <p className='text-gray-600 text-sm mb-3'>Description</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
