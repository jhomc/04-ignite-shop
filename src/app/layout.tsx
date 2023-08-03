import '../styles/globals.css'
import type { Metadata } from 'next'
import logoImg from '../assets/logo.svg'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`bg-gray900 text-white flex min-h-screen items-start justify-center flex-col  ${roboto.className}`}>
        <header className='px-8 w-full max-w-[1180px] mx-auto'>
          <Image src={logoImg} alt='' />
        </header>
        {children}
      </body>
    </html>
  )
}
