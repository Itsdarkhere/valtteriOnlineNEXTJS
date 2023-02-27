import './globals.css'

export const metadata = {
  title: 'Valtteri Juvonen',
  description: 'My online business card',
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
