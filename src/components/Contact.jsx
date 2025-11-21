import { Send, User } from 'lucide-react'
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

                    <div className='space-y-1'>
                        <p className='text-gray-700 text-sm font-medium'>Details</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className='grid lg:grid-cols-2 gap-12'>
                <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
                    <div className='mb-8'>
                        <h3 className='text-2xl font-black text-gray-900 mb-2'>
                            Send us a Message
                        </h3>
                        <p className='text-gray-600'>
                            Fill out the form below and we'll get back to you within hours
                        </p>
                    </div>

                    <form>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Full Name *
                                </label>
                                <input
                                    type='text'
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                    placeholder='John Doe'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Email Address *
                                </label>
                                <input
                                    type='text'
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                    placeholder='john@company.com'
                                />
                            </div>
                        </div>                        
                        <div>
                            <label
                                htmlFor=''
                                className='block text-sm font-semibold text-gray-700 mb-2'
                            >
                                Full Name *
                            </label>
                            <input
                                type='text'
                                className='
                                    w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                    focus:ring-purple-500 focus:border-transparent transition-all 
                                    duration-300 bg-gray-50 focus:bg-white
                                '
                                placeholder='John Doe'
                            />
                        </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Company *
                                </label>
                                <input
                                    type='text'
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                    placeholder='your company'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Project Budget *
                                </label>
                                <select 
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                >
                                    <option value=''>Select Your Budget Range</option>
                                    <option value='5k-10k'>$5 - $10K</option>
                                    <option value='10k-25k'>$10 - $25K</option>
                                    <option value='25k-50k'>$25 - $50K</option>
                                    <option value='50k+'>$50K+</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor=''
                                className='block text-sm font-semibold text-gray-700 mb-2'
                            >
                                Project Details *
                            </label>
                            <textarea
                                type='text'
                                className='
                                    w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                    focus:ring-purple-500 focus:border-transparent transition-all 
                                    duration-300 bg-gray-50 focus:bg-white
                                '
                                placeholder='your company'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='
                                w-fit bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700
                                hover:to-pink-700 text-white px-6 py-4 rounded-xl font-semibold
                                transition-all duration-300 flex items-center justify-center shadow-lg
                                hover:shadow-xl hover:scale-105
                            '
                        >
                            Send Message
                            <Send className='ml-2' size={20}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
