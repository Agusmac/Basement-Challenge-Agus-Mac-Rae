import Image from 'next/image'
import React from 'react'

export default function Navbar({setCartOpen,cart}) {

    return (
        <div className='w-full px-4 sm:px-8 pt-6 sm:pt-[33px] flex'>
            <div className='flex-1 hidden sm:flex items-center'><Image priority className='cursor-pointer' src='/NavLogo.svg' width={192} height={30} alt='Basement Logo' /></div>
            <div className='flex-1 flex sm:hidden items-center'><Image priority src='/NavLogoMobile.svg' className='cursor-pointer' width={43} height={40} alt='Basement Logo mobile'/></div>
            <div className='flex-1 hidden lg:flex justify-center items-center cursor-pointer'><Image src='/Navbar.png' quality={100} width={284} height={24} alt='illustration' /></div>
          
            <div className='flex-1 flex justify-end items-center'>
                {/* used border-2 as its a bit closer to the figma design */}
                <div onClick={() => setCartOpen(prev => !prev)}  className='py-[13px] px-5 sm:px-8 text-sm sm:text-lg w-fit font-bold relative overflow-hidden group grid text-center place-content-center border-2 cursor-pointer rounded-full border-[white] hover:border-transparent duration-[250ms] ease-out '>
                    {/* slighly out of center, used relative to fix */}
                    <p className='z-10 group-hover:text-black relative top-[2px] leading-none duration-[250ms] ease-out'>CART ({cart.length})</p>
                    <div className='w-full h-full absolute inset-0 bg-white duration-[250ms] translate-y-14 group-hover:translate-y-0 ease-out'></div>
                </div>
            </div>
        </div>
    )
}
