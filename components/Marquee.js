import Image from 'next/image'
import React from 'react'

export default function Marquee() {
    return (
        <div className='relative 0 md:mb-32'>
            <div className='overflow-hidden '>
                <div className='bg-white w-full h-[1px] sm:h-[2px]'></div>
                <div className='flex indent-2 font-bold text-xl md:text-[35px] py-2 md:py-5 whitespace-nowrap'>
                    <p className='marquee'>A man can&apos;t have enough basement swag <span className='mx-5'>—</span>  </p>
                    <p className='marquee'>A man can&apos;t have enough basement swag <span className='mx-5'>—</span>  </p>
                    <p className='marquee'>A man can&apos;t have enough basement swag <span className='mx-5'>—</span>  </p>
                    <p className='marquee'>A man can&apos;t have enough basement swag <span className='mx-5'>—</span>  </p>
                </div>
                <div className='bg-white w-full h-[1px] sm:h-[2px]'></div>
            </div>
            <div className='absolute inset-0 hidden md:flex justify-between px-[6vw]'>
                <Image className='h-[7.5vw] w-auto relative -top-[1vw] floating ' src='/3dShape1.svg' width={144} height={144} alt='floating shape'/>
                <Image className='h-[7.5vw] w-auto relative -top-[6vw] floating2' src='/3dShape2.svg' width={144} height={144} alt='floating shape'/>
            </div>

        </div>
    )
}
