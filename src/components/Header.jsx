import { Sparkle } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center py-4'>
                <div className='relative'>
                    <Sparkle className={`w-8 h-8 transition-all duration-300`}/>
                    {/* <div 
                        className='
                            absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animation-pulse
                        '
                    ></div> */}
                    <h1 
                        className={`
                            text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text transition-all duration-300
                        `}
                    >
                        Nexus
                    </h1>
                </div>                
            </div>
        </div>
    </header>
  )
}

export default Header