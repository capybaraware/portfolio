import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio',
  description: 'Portfolio website of a software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

