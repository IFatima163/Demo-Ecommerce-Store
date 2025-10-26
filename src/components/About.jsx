import { User } from 'lucide-react'
import React from 'react'

function About() {
    return (
        <section id='about'>
            <div className='py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'>
                {/* Background pattern */}
                <div className='absolute inset-0 opacity-5'>
                    <div 
                        className='
                            absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 transform rotate-12 scale-150
                        '
                    >
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='text-center mb-16'>
                        <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
                            <span>About Nexus</span>
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Crafting Digital {" "}
                            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                                Excellence
                            </span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                            We're a passionate team of designers, developers, and strategists 
                            dedicated to transforming your vision into extraordinary digital 
                            experiences that captivate and convert.
                        </p>
                    </div>

                    {/* Stats card */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div 
                            className='
                                group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all 
                                duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden
                            '
                        >
                            <div 
                                className='
                                    absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 
                                    rounded-full -translate-y-10 translate-x-10 group-hover:scale-150
                                '
                            ></div>

                            <div
                                className={`
                                    w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mb-6 
                                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10
                                `}
                            >
                                {/* Dummy Icon */}
                                <User className='text-white' size={24}/>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 relative z-10'>
                                Title
                            </h3>
                            <p className='text-gray-600 leading-relaxed relative z-10'>
                                Description
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
