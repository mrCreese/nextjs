import './globals.css'
import { Inter } from 'next/font/google'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <nav>
          <h1>MY navbar</h1>
        </nav>
        {children}
        </body>
    </html>
  )
}
