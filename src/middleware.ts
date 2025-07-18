import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authController } from '@/controllers/authController'; 

const protectedPaths = ['/rooms']; 

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));


  const authToken = await authController.isAuthenticated();

  if (isProtectedPath) {
    if (!authToken) { 
      const loginUrl = new URL('/auth', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (authToken && pathname.startsWith('/auth')) {
    const roomsUrl = new URL('/rooms', request.url);
    return NextResponse.redirect(roomsUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/rooms/:path*', '/auth'],
};
