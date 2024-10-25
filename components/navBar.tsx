import Link from 'next/link'
import { auth, currentUser }from '@clerk/nextjs/server'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';

export async function Nav() {
  const { userId } = await auth();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold">
          Clerk Auth Test
        </Link>
        <div className="flex items-center gap-4">
          {userId ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}