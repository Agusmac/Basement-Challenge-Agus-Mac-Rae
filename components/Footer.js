import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full pb-[10vw] sm:pb-[15px]'>
            <div className='flex justify-end items-center gap-[4vw] mx-auto w-[86vw] sm:w-[92vw]'>
                <Image className='pb-[4vw] sm:pb-[2vw] max-w-[30vw]' src='/Footer-vector.svg' width={311} height={175.11} alt='Footer vector' />
                <h2 className=' text-center text-[14vw] md:text-[14.6vw] leading-none tracking-[-1.654px] md:tracking-normal relative md:-left-1'>WEAR</h2>
            </div>
            <h2 className='text-outline text-center text-[14vw] md:text-[14.6vw] leading-none tracking-[-1.654px] md:tracking-normal relative md:-left-1'>EVERYDAY</h2>
        </div>
    )
}
