import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pundit',
  description: 'Quality Education By Any Means Necessary.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class='dark transition ease-in-out delay-100 scroll-smooth' >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
