import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Marquee from '../../components/Marquee'
import ProductsGrid from '../../components/ProductsGrid'
import Footer from '../../components/Footer'
import { useState } from 'react'
import Cart from '../../components/Cart'
import Backdrop from '../../components/Backdrop'


export default function Home() {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  // adds products to the array on click of the product grid
  function addProduct(id) {
    if (!cart.some(item => item.id === id)) {
      setCart(prevCart => [...prevCart, { id, quantity: 1, size: 'M' }]);
    }
  }


  return (
    <>
      <Head>
        <title>Basement</title>
        <meta name="description" content="Basement challenge by Agustin Mac Rae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='bg-black text-white relative'>
        <Navbar {...{ setCartOpen, cart }} />
        <Hero />
        <Marquee />
        <ProductsGrid {...{ addProduct }} />
        <Footer />
        <Backdrop {...{ cartOpen, setCartOpen }} />
        <Cart {...{ cartOpen, setCartOpen, cart, setCart }} />
      </main>
    </>
  )
}
