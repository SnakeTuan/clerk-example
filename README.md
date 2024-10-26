## quick setup
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

// By default, clerkMiddleware() makes all routes public
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

## Sync Clerk Data to Your Project

To sync Clerk data with your application, you can utilize webhooks. Webhooks allow you to receive real-time updates from Clerk whenever certain events occur, such as user sign-ups, logins, or profile updates.

### Step 1: Expose Your Local Server

First, you need to expose your local server to the internet. You can do this using the following command:
```ssh -R 80:localhost:3000 serveo.net```

### Step 2: create the webhook

go to the clerk dashboard and create a webhook, with the url
![alt text](/docs/4.png)

copy the secret sign of webhook and add it to your .env.local file: ```WEBHOOK_SECRET=```
![alt text](/docs/5.png)

make sure the webhook route is public in your Middleware

### Step 3: Create the endpoint

Clerk use svix to verify the webhook signature,
install svix: ```npm install svix```

app/api/webhooks/route.ts

### Step 4: Testing the webhook

go to your application and try creating, updating and deleting accounts. If the webhook successful, you will see Webhook json body, webhook id in the console. And in the clerk dashboard, you can see the successful webhook:
![alt text](/docs/6.png)