import { ArrowRight } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <section
            id='home'
            className='
                min-h-screen flex items-center relative overflow-hidden 
                bg-[url(https://cdn.pixabay.com/photo/2017/08/02/20/43/laptop-2573318_1280.jpg)] 
                bg-no-repeat bg-cover
                '
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-35 items-center'>
                    <div className='mb-12 lg:mb-0'>
                        <div 
                            className='
                                inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6
                            '
                        >
                            <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                            <span className='text-white text-sm font-medium'>
                                Available for new projects
                            </span>
                        </div>
                        <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-tight'>
                            Create{" "}
                            <span 
                                className='
                                    block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400
                                '
                            >
                                Amazing
                            </span>
                            Experience
                        </h1>
                        <p className='text-xl text-gray-200 mb-8 leading-relaxed max-w-lg'>
                            {" "}
                            We transform ideas into stunning digital realities through innovative design, 
                            cutting-edge technology, and strategic thinking that drives results.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                            <button 
                                className='
                                    group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 
                                    hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold 
                                    transition-all duration-300 flex items-center justify-center shadow-2xl 
                                    hover:shadow-purple-500/25 hover:scale-105
                                '
                            >
                                <ArrowRight/>
                                Start Your Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
