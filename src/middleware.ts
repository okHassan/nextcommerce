import { NextResponse } from 'next/server';
import { verifyJwt } from './lib/jwt';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const url = request.nextUrl
    const token = request.cookies.get('token')?.value;

    let tokenResponse = await verifyJwt(token)

    // Check if the token exists and is valid
    // if (!token || !tokenResponse) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }

    
    if(url.pathname.includes('/user') && tokenResponse){
        return NextResponse.redirect(new URL('/login', request.url));
    };
    if(url.pathname.includes('/login') && !tokenResponse){
        return NextResponse.redirect(new URL('/', request.url));
    };
    if(url.pathname.includes('/register') && !tokenResponse){
        return NextResponse.redirect(new URL('/', request.url));
    };

    return NextResponse.next();
}

// Protect specific paths
export const config = {
    matcher: ['/', '/user','/login', '/register'],
};
