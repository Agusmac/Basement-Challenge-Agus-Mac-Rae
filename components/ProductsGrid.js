import Image from 'next/image'
import React from 'react'
import productArray from '../helpers/ProductsList'


export default function ProductsGrid({ addProduct }) {
    return (
        <div className='pb-2 sm:pb-10 mb-24'>
            <div className='flex flex-wrap justify-center items-stretch w-full px-4 sm:px-7 gap-8 '>
                {productArray.map((item) =>
                    <div key={item.id} className="w-[440px] h-[450px] md:h-[500px] lg:min-h-[579px] ">
                        <div className='group cursor-pointer relative bg-gradient-to-b h-full from-[rgba(21,21,21,0)] via-[rgba(21,21,21,0)] to-[rgba(29,29,29,1)] grid place-content-center'>
                            <Image className='max-w-[80%] mx-auto lg:max-w-none' src={item.src} width={item.width} height={item.height} quality={100} alt={item.alt} />
                            <div onClick={() => addProduct(item.id)} className="absolute inset-0 grid place-content-center duration-300 ease-in opacity-0 group-hover:opacity-100">
                                <div>
                                    <Image className='' src='/globeVector.png' width={128} height={127} quality={100} alt='globe' />
                                </div>
                                <div className='absolute inset-0 grid place-content-center'><p className='text-outline-thin text-3xl tracking-[-1px]'>ADD TO CART</p></div>
                            </div>
                        </div>
                        <div className='bg-white h-[3px] w-full'></div>
                        <div className='w-full flex justify-between text-xl md:text-[21px] pt-3'>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}
