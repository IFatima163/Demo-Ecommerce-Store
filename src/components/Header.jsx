import { Sparkle, X } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center py-4'>
                <div className='flex items-center space-x-2'>                
                    <div className='relative'>
                        <Sparkle className={`w-8 h-8 transition-all duration-300`}/>
                        {/* <div 
                            className='
                                absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animation-pulse
                            '
                        ></div> */}
                    </div>
                    <h1 
                        className={`
                            text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text transition-all duration-300
                        `}
                    >
                        Nexus
                    </h1>
                </div>
                
                {/* Desktop Navigation */}
                <nav className='hidden md:flex space-x-8'>
                    <button
                        className={`
                            capitalize font-medium transition-all duration-300 hover:scale-105 relative group
                        `}
                    >
                        Home
                        {/* Hover effect */}
                        <span 
                            className='
                                absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 
                                transition-all duration-300 group-hover:w-full
                                '
                            ></span>
                    </button>
                </nav>

                {/* mobile menu button */}
                <button className={`md:hidden p-2 rounded-lg transition-all duration-300`}>
                    <X size={24} />
                </button>
            </div>

            {/* Mobile Navigation Conditional Rendering */}
            <div 
                className='
                    md:hidden bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mt-2 py-6 border border-purple-100
                '
            >
                <button 
                    className='
                        block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 
                        hover:to-pink-50 hover:text-purple capitalize font-medium transition-all duration-300
                    '
                >
                    Home
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header