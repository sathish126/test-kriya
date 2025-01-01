import './globals.css'

export const metadata = {
  title: 'Kriya25',
  description: 'Countdown Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">{children}</body>
    </html>
  )
}