import React from 'react'

export default function Backdrop({ cartOpen, setCartOpen }) {
    return (
        <div onClick={() => setCartOpen(prev => !prev)}
            className={`bg-[rgb(0,0,0,0.7)] ${!cartOpen && 'hidden'} fixed inset-0 z-20`}>
        </div>
    )
}
