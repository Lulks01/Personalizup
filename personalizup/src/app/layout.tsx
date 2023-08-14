import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PersonalizUP',
  description: 'Personalizup Canecas',
  icons: './favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
