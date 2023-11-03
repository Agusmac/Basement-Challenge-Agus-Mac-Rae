import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import productArray from '../helpers/ProductsList'

export default function ProductCartCard({setCart, product }) {

    const [cardInfo, setCardInfo] = useState({})

    const sizes = ['S', 'M', 'L', 'XL']

    useEffect(() => {
        const productInfo = productArray.find(productItem => productItem.id === product.id);
        setCardInfo(productInfo || {});
    }, [product]);

    // changes size
    function changeSize(size) {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === product.id) {
                return { ...item, size: size };
            }
            return item;
        }));
    }

    // increases quantity of product in array
    function increaseQuantity() {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    }

    // decreases quantity of product in array, if <1, removes item from the arrays
    function decreaseQuantity() {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === product.id) {
                if (item.quantity - 1 < 1) return null;
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item !== null));
    }

    // the font had an issue with the leading, 
    // so a quick fix you will see many times is relative position + top position change to keep text centered

    return (
        <div className='flex gap-3 sm:gap-5 w-full border max-h-[150px] sm:max-h-[200px] md:max-h-[264px] h-full pt-[14px] pb-[14px] sm:pb-5 px-2 sm:px-[14px]'>
            <div className='group w-[234px] cursor-pointer relative bg-gradient-to-b h-full from-[rgba(21,21,21,0)] via-[rgba(21,21,21,0)] to-[rgba(29,29,29,1)] grid place-content-center'>
                {cardInfo.src && <Image className='max-w-[80%] mx-auto' src={cardInfo.src} width={cardInfo.width} height={cardInfo.height} quality={100} alt={cardInfo.alt} />}
            </div>
            <div className='w-full flex flex-col justify-between'>
                <div>
                    <p className='text-sm sm:text-lg lg:text-[35px] sm:leading-none uppercase'>{cardInfo.name}</p>
                    <p className='text-[11px] sm:text-lg lg:text-[21px] text-[#999]'>{cardInfo.description}</p>
                </div>
                <div>
                    <div className='flex items-center text-sm sm:text-lg lg:text-[21px] gap-4  sm:mb-4'>
                        <p className='relative top-[2px]'>QUANTITY:</p>
                        <div className='flex gap-4 items-center leading-none border rounded-full px-3 py-1 sm:py-2'>
                            <div onClick={decreaseQuantity} className='relative top-[1px] sm:top-[2px] cursor-pointer'>-</div>
                            <div className='relative top-[1px] sm:top-[2px]'>{product.quantity}</div>
                            <div onClick={increaseQuantity} className='relative top-[1px] sm:top-[2px] cursor-pointer'>+</div>
                        </div>
                    </div>
                    <div className='flex justify-between flex-col md:flex-row gap-1'>
                        <div className='flex flex-1 items-center text-sm sm:text-lg md:text-[21px] gap-2 sm:gap-4 '>
                            <p className='relative top-[2px]'>SIZE:</p>
                            <div className='flex gap-1 w-full leading-none'>
                                {sizes.map((size, i) => <div onClick={() => changeSize(size)} key={i} className={`w-7 md:h-12 h-7 md:w-12 grid place-content-center
                               border border-transparent cursor-pointer ${product.size == size && 'border-white'} hover:border-white rounded-full`}>
                                    <p className='relative top-[1px] md:top-[2px]'>{size}</p></div>)}

                            </div>
                        </div>
                        <p className='text-sm sm:text-lg lg:text-[35px] leading-none md:self-end'>${cardInfo.price}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}
