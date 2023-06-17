import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'
import Nav from '@/components/Nav'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio website',
  description: 'Website depicts my skills and allows people to get in touch with me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Nav/>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
  )
}
