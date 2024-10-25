import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/navBar'
import { Loader2 } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clerk Auth Test',
  description: 'A simple project to test Clerk authentication',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoaded>
            <div className="w-full mx-auto">
              <div className='flex flex-col h-screen'>
                <Nav/>
                {children}
              </div>
            </div>
          </ClerkLoaded>
          <ClerkLoading>
          <div className="flex items-center justify-center h-screen">
            <Loader2 className="w-16 h-16 animate-spin mx-auto" />
          </div>
          </ClerkLoading>
        </body>
      </html>
    </ClerkProvider>
  );
}
