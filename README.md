
go to clerk website, sign up, go to dashboard

create an application 
![alt text](/docs/1.png)

install clerk in your nextjs project:
npm install @clerk/nextjs

Create a `.env.local` file in your project root and add your Clerk API keys:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```
you can get your application api key in configure -> api key
![alt text](/docs/2.png)

 create middleware.ts file at the root of your project or src/ directory:
 ```
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
 ```

All Clerk hooks and components must be the children of the ClerkProvider component,
so we gonna wrap our whole application with <ClerkProvider> in /app/layout.tsx
![alt text](/docs/3.png)

Create a quick login and logout route and page

app/sign-up/[[...sign-up]]/page.tsx
```
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
}
```

app/sign-in/[[...sign-in]]/page.tsx
```
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}
```

