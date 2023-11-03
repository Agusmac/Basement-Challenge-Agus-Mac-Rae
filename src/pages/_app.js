import '@/styles/globals.css'
import localFont from 'next/font/local'

const BasementFont = localFont({ src: './Fonts/BasementGrotesque-Black_v1.202.otf' })

export default function App({ Component, pageProps }) {

  return (
    <main className={BasementFont.className}>
      <Component {...pageProps} />
    </main>
  )


}
