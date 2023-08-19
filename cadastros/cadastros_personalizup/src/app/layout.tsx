import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Cadastro Personalizup',
  description: 'Site de cadastros de clientes da personalizup',
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
