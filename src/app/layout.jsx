
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Techno Trek',
  description: 'Generated by Techno Trek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <body > */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
