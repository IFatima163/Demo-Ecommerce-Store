import React from 'react'

function Team() {
    return (
        <section id='team' className='py-20 bg-white relative overflow-hidden'>
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
                        <span className='text-purple-600 font-semibold'>Our Team</span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Meet The
                        <span 
                            className='
                                block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600
                            '
                        >
                            Team
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        Our diverse team of passionate experts combines creativity, technical excellence, and strategic
                        thinking to deliver exceptional results for every project.
                    </p>                    
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div 
                        className={`
                            group bg-gradient-to-br rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all
                            duration-500 hover:-translate-y-3 border border-white/50 relative overflow-hidden 
                            backdrop-blur-sm                            
                        `}                    
                    >
                        {/* Animated Background Elements */}
                        <div
                            className={`
                                absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br rounded-full 
                                opacity-20 group-hover:scale-125 group-hover:rotate-45
                            `}
                        ></div>
                        <div
                            className={`
                                absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr rounded-full 
                                opacity-10 group-hover:scale-150 transition-all duration-500
                            `}
                        ></div>

                        <div className='relative z-10'>
                            {/* Enhanced Profile Image */}
                            <div className='relative mb-8'>
                                <div 
                                    className='
                                        w-28 h-28 mx-auto rounded-3xl overflow-hidden right-4 right-w 
                                        shadow-2xl group-hover:scale-110 group-hover:rotate-3 
                                        transition-all duration-500
                                    '
                                >
                                    <img
                                        src=''
                                        alt=''
                                        className='
                                            w-full h-full object-cover group-hover:scale-110 transition-all duration-500
                                        '
                                    />
                                </div>
                                {/* Stats Indicator */}
                                <div
                                    className={`
                                        absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r rounded-full
                                        flex items-center justify-center shadow-lg group-hover:scale-110 
                                        transition-all duration-300
                                    `}
                                >
                                    <div className='w-4 h-4 bg-white rounded-full animate-pulse'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Team
