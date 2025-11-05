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
            </div>
        </section>
    )
}

export default Portfolio
