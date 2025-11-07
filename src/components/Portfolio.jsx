import { ArrowRight, ExternalLink, Eye, Heart } from 'lucide-react'
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

                                        <div 
                                            className='
                                                flex items-center space-x-1 bg-white/20 
                                                backdrop-blur-sm rounded-full px-3 py-1
                                            '
                                        >
                                            <Heart className='text-white' size={14}/>
                                            <span className='text-white text-xs font-medium'>
                                                Project Stats Likes
                                            </span> 
                                        </div>
                                    </div>

                                    <button 
                                        className='
                                            w-10 h-10 bg-white rounded-full flex items-center justify-center 
                                            hover:scale-110 transition-all duration-300
                                        '
                                    >
                                        <ExternalLink className='text-gray-700' size={18}/>
                                    </button>
                                </div>
                            </div>    
                        </div>

                        <div className='p-6'>
                            <div className='text-sm text-purple-600 font-semibold mb-2'>
                                Project Category
                            </div>
                            <h3 
                                className='
                                    text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600
                                    transition-all duration-300
                                '
                            >
                                Project Title
                            </h3>
                            <p className='text-gray-600 mb-4 leading-relaxed'>
                                Project Description
                            </p>

                            <div className='flex flex-wrap gap-2 mb-4'>
                                <span 
                                    className='
                                        px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 
                                        text-purple-600 text-xs font-medium rounded-full border border-purple-100
                                    '
                                >
                                    Tags
                                </span>
                            </div>

                            <button 
                                className='
                                    group/btn inline-flex items-center text-purple-600 font-semibold
                                    hover:text-pink-600 transition-all duration-300
                                '
                            >
                                View Project 
                                <ArrowRight 
                                    className='
                                        ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300
                                    '
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Button CTA */}
                <div className='text-center mt-16'>
                    <div 
                        className='
                            bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white 
                            relative overflow-hidden
                        '
                    >
                        <div className='absolute isnet-0 bg-black/10'></div>
                        <div className='relative z-10'>
                            <h3 className='text-2xl mb-4 font-semibold'>
                                Like What You See?
                            </h3>
                            <p className='text-purple-100 mb-6 max-w-2xl mx-auto'>
                                Let's create something amazing together. View our complete portfolio or start your project today.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <button 
                                    className='
                                        bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold
                                        hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap
                                    '
                                >
                                    View All Projects
                                </button>
                                <button 
                                    className='
                                        border-2 border-white text-white px-6 py-3 rounded-xl font-semibold
                                        hover:bg-white hover:text-purple-600 transition-colors duration-300 whitespace-nowrap
                                    '
                                >
                                    Start your Project
                                </button>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
