import './globals.css'
import { Inter } from 'next/font/google'

// Initialize Inter font
const inter = Inter({ subsets: ['latin'] })

// Metadata for better SEO
export const metadata = {
  title: 'Resume Builder',
  description: 'Create beautiful, professional resumes with our modern builder',
  keywords: 'resume, cv, builder, professional, job application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
}