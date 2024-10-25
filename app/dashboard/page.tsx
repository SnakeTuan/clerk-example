import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Nav } from '@/components/navBar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function Dashboard() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dashboard Page</h1>
          <p className="text-xl mb-8">This page should only seen by user who signed in</p>
        </div>
      </main>
    </div>
  )
}