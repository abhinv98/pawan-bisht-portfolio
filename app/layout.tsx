import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cinematic Portfolio | Award-Winning Creative',
  description: 'A cinematic noir portfolio showcasing exceptional creative work',
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

