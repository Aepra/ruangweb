import { NextRequest, NextResponse } from 'next/server';
import { updateSession, getSession } from './lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAdminRoute = path.startsWith('/admin');
  const isLoginRoute = path === '/admin/login';

  if (isAdminRoute) {
    const session = await getSession();

    if (!session && !isLoginRoute) {
      // Redirect to login if unauthenticated
      return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
    }

    if (session && isLoginRoute) {
      // Redirect to dashboard if already authenticated
      return NextResponse.redirect(new URL('/admin', request.nextUrl));
    }

    // Refresh session if valid
    if (session) {
      return await updateSession(request);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
