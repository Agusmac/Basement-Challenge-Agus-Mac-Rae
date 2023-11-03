import React, { useEffect, useState } from 'react'
import ProductCartCard from './ProductCartCard'
import productArray from '../helpers/ProductsList'


export default function Cart({ cartOpen, setCartOpen, cart, setCart }) {

    const [total, setTotal] = useState(0)

    // calculates total price when cart array changes
    useEffect(() => {
        let totalPrice = 0;
        for (const cartItem of cart) {
            const productInfo = productArray.find(product => product.id === cartItem.id);
            if (productInfo)totalPrice += productInfo.price * cartItem.quantity;
        }
        setTotal(totalPrice);
    }, [cart]);


    return (
        <div className={`duration-500 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 z-50 w-full h-screen lg:w-[824px] ${cart.length <= 1 && 'lg:h-[824px]'}  lg:max-h-screen bg-black ml-auto overflow-y-hidden pt-6 sm:pt-8 md:pt-[42px] lg:border-l lg:border-b`}>
            <div className='px-[10vw] lg:px-8'>
                <p onClick={() => setCartOpen(prev => !prev)} className='cursor-pointer ml-auto text-lg w-fit sm:text-2xl text-right mb-5 sm:mb-9'>→ Close</p>
                <p className='text-center mx-auto text-[25vw] sm:text-[10vw] lg:text-[111px] leading-none mb-4 md:mb-9'>
                    YOUR <span className='text-outline'> CART</span>
                </p>
            </div>

            <div className='overflow-y-hidden h-[65vh] '>
                <div className='w-full overflow-auto h-full px-4 sm:px-8 space-y-5 pb-56 cartFix sm:pb-32'>

                    {cart.map((product, i) => <ProductCartCard key={i} {...{ cart, setCart, product }} />)}

                </div>
            </div>

            <div className='absolute bg-black leading-none flex flex-col md:flex-row items-center bottom-0 left-0 right-0 w-full md:border-t'>
                <div className='flex-1 text-xl md:text-[35px] px-8 py-3 w-full md:py-[23px]'>
                    <p className='relative top-1 hidden md:inline-block'>TOTAL: ${total.toFixed(2)}</p>
                    <div className='flex justify-between md:hidden '><p>TOTAL</p><p>${total.toFixed(2)}</p></div>
                </div>
                <div className='bg-white mx-auto h-[1px] md:hidden w-[90vw]'></div>
                <div className='text-[13.5vw] md:text-[35px] md:border-l md:px-8 py-3 md:py-[23px] w-full md:w-fit mx-auto text-center'><p className='relative top-1 text-outline-thin'>CHECKOUT</p></div>
            </div>
        </div>
    )
}
