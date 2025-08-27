import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
// import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
  icons: {
    icon: '/camp.svg', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}