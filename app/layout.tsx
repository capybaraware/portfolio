import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Richard O | Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer based in the NYC Metro Area. Building scalable web applications with React, Next.js, Python, and AWS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
        {children}
      </body>
    </html>
  )
}
