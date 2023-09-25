import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Create a response variable
  const response = NextResponse.next()

  // Check if the cookie exists before getting it
  if (request.cookies.has('nextjs')) {
    let cookie = request.cookies.get('nextjs')
    // Do something with the cookie value
  }

  // Check if the cookie exists before deleting it
  if (request.cookies.has('nextjs')) {
    request.cookies.delete('nextjs')
  }

  // Set the cookie only once with the desired value and options
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })

  // Return a redirect response to the /home URL
  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard',
}
