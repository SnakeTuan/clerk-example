import { Nav } from '@/components/navBar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Clerk Auth Test</h1>
          <p className="text-xl mb-8">A simple project to test Clerk authentication</p>
          <Link href="/sign-up">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
