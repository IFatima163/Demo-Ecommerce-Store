import { User } from 'lucide-react'
import React from 'react'

function Services() {
    return (
        <section id='services' className='py-20 bg-white relative overflow-hidden'>
            {/* Background pattern */}
            <div 
                className='
                    absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100
                    to-transparent rounded-full -translate-y-48 translate-x-48
                '
            ></div>
            <div 
                className='
                    absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-100
                    to-transparent rounded-full translate-y-48 translate-x-48
                '
            ></div>
            
            <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16'>
                    <div 
                        className='
                            inline-flex items-center px-4 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6
                        '
                    >
                        <span className='text-purple-600 font-semibold'>
                            Our Services
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        What We
                        <span 
                            className='
                                block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600
                            '
                        >
                            Create
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        {" "}
                        From concept to launch, we provide end-to-end digital solutions that 
                        drive growth and create meaningful connections with your audience.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div 
                        className={`
                            group relative bg-gradient-to-br rounded-3xl p-8 hover:shadow-2xl transition-all 
                            duration-500 hover:translate-y-2 border border-white/50 overflow-hidden
                        `}
                    >
                        {/* Background Pattern */}
                        <div className='absolute top-0 right-0 w-32 h-32 opacity-10'>
                            <div
                                className={`
                                    w-full h-full bg-gradient-to-br rounded-full transform translate-x-16 
                                    -translate-y-16 group-hover:scale-150 transition-all
                                `} 
                            ></div>
                        </div>

                        <div className='relative z-10'>
                            <div 
                                className='
                                    w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center 
                                    mb-6 group-hover:rotate-6 transition-all duration-300 shadow-lg
                                '
                            >
                                <User className='text-white' size={28}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
