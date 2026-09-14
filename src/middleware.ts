import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('admin_token')
  const pathname = request.nextUrl.pathname

  const isLoginPage = pathname === '/login'

  // User authenticate aayittilla, pakshe login page-ilum alla -> Redirect to /login
  if (!isAuthenticated && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // User authenticate aayi, pakshe login page-il aanu -> Redirect to root (/)
  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Ellam correct aanenkil pathukke adutha page-lekku pokan anuvadhikkuka (No redirect loop!)
  return NextResponse.next()
}

export const config = {
  matcher: [
  '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};