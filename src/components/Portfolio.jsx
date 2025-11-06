import { Eye } from 'lucide-react'
import React from 'react'

function Portfolio() {
    return (
        <section 
            id='portfolio'
            className='py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'
        >
            {/* Background Elements */}
            <div 
                className='
                    absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 
                    rounded-full filter blur-3xl opacity-30
                '
            ></div>
            <div 
                className='
                    absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-200 to-cyan-200 
                    rounded-full filter blur-3xl opacity-30
                '
            ></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
                        <span className='text-purple-600 font-semibold text-sm'>
                            Our Portfolio
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Featured
                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                            Projects
                        </span>
                    </h2>

                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        Explore our latest work showcasing innovative solutions across various industries and digital platforms.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    <button
                        className={`
                            px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                        `}
                    >
                        Filter Label
                    </button>
                </div>

                {/* Project Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div 
                        className='
                            group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all
                            duration-500 hover:-translate-y-2 border border-gray-100
                        '
                    >
                        <div className='relative overflow-hidden'>
                            <img
                                src=''
                                alt=''
                                className='
                                    w-full h-64 object-cover group-hover:scale-110 transition-all duration-500
                                '
                            />
                            <div 
                                className='
                                    absolute inset-0 bg-gradient-to-t from-black/60 via-transparent 
                                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                '
                            >
                                <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                                    <div className='flex space-x-2'>
                                        <div 
                                            className='
                                                flex items-center space-x-1 bg-white/20 
                                                backdrop-blur-sm rounded-full px-3 py-1
                                            '
                                        >
                                            <Eye className='text-white' size={14}/>
                                            <span className='text-white text-xs font-medium'>
                                                Project Stats Views
                                            </span>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
