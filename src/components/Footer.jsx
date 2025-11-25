import { Facebook, InstagramIcon, Linkedin, Sparkles, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer
            className='
                bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden
            '
        >
            {/* Background Elements */}
            <div className='absolute inset-0'>
                <div
                    className='
                        absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full 
                        mix-blend-multiply filter blur-3xl opacity-10
                    '
                ></div>
                <div
                    className='
                        absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full 
                        mix-blend-multiply filter blur-3xl opacity-10
                    '
                ></div>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                    <div className='lg:col-span-1'>
                        <div className='flex items-center space-x-2 mb-6'>
                            <div className='relative'>
                                <Sparkles className='w-8 h-8 text-purple-400'/>
                                <div 
                                    className='
                                        absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 
                                        to-purple-500 rounded-full animate-pulse
                                    '
                                ></div>
                                <h3
                                    className='
                                        text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400
                                        bg-clip-text text-transparent
                                    '
                                >
                                    Nexus
                                </h3>
                            </div>

                            <p className='text-gray-300 mb-6 leading-relaxed'>
                                Transforming ideas into extraordinary digital experiences through innovative design, cutting-edge technology, and strategic thinking.
                            </p>
                            <div className='flex space-x-4'>
                                <a
                                    href='#'
                                    className='
                                        w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl
                                        flex items-center justify-center hover:scale-110 transition-all duration-300
                                    '
                                >
                                    <Facebook size={18}/>
                                </a>
                                <a
                                    href='#'
                                    className='
                                        w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl
                                        flex items-center justify-center hover:scale-110 transition-all duration-300
                                    '
                                >
                                    <Twitter size={18}/>
                                </a>
                                <a
                                    href='#'
                                    className='
                                        w-10 h-10 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl
                                        flex items-center justify-center hover:scale-110 transition-all duration-300
                                    '
                                >
                                    <InstagramIcon size={18}/>
                                </a>
                                <a
                                    href='#'
                                    className='
                                        w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl
                                        flex items-center justify-center hover:scale-110 transition-all duration-300
                                    '
                                >
                                    <Linkedin size={18}/>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className='text-lg font-bold mb-6 text-white'>Services</h4>
                            <ul className='space-y-3'>
                                <li>
                                    <a
                                        href='#'
                                        className='
                                            text-gray-300 hover:text-purple-400 transition-all 
                                            duration-300 flex items-center group
                                        '
                                    >
                                        <span
                                            className='
                                                w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150
                                                transition-all duration-300
                                            '
                                        >
                                            Services
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className='text-lg font-bold mb-6 text-white'>Services</h4>
                            <ul className='space-y-3'>
                                <li>
                                    <a
                                        href='#'
                                        className='
                                            text-gray-300 hover:text-purple-400 transition-all 
                                            duration-300 flex items-center group
                                        '
                                    >
                                        <span
                                            className='
                                                w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150
                                                transition-all duration-300
                                            '
                                        >
                                            Company
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
