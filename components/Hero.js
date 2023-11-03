import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='w-full mt-7 sm:mt-[45px] text-center mb-3 sm:mb-5'>
            {/* relative was used to fix a slight left indentation of the font */}
            <h1 className='text-[14vw] md:text-[14.6vw] leading-none tracking-[-1.654px] md:tracking-normal relative md:-left-1'>BASEMENT</h1>
            <div className='flex w-full justify-center mt-1 sm:mt-2 lg:-mt-[1.8vw] px-4 sm:px-8 gap-2'>

                <div className='grid place-content-center w-full'>
                    <div className='relative '>
                        <Image className='mx-auto w-3/4 md:w-full' src='/VectorCircle.svg' width={152} height={72} alt='vector circle' />
                        <div className='absolute inset-0 grid place-content-center leading-none text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw] mt-[0.8vw] sm:mt-[0.2vw]'>EST</div>
                    </div>
                </div>

                <div className='text-[14vw] md:text-[14.6vw] leading-none tracking-[-1.654px] md:tracking-normal relative md:-left-1 text-outline'>SUPPLY</div>
           
                <div className='grid place-content-center w-full'>
                    <div className='relative '>
                        <Image className='mx-auto w-3/4 md:w-full' src='/VectorCircle.svg' width={152} height={72} alt='vector circle'/>
                        <div className='absolute inset-0 grid place-content-center leading-none text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw] mt-[0.8vw] sm:mt-[0.2vw]'>2K19</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
