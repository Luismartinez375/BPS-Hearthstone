import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware');
  console.log(request.method);
  console.log(request.url);
  const { nextUrl: url, geo } = request;
  const lat = geo?.latitude || '26.3389184';
  const lng = geo?.longitude || '-98.2122496';
  console.log(lat, lng);
  url.searchParams.set('lat', lat);
  url.searchParams.set('lng', lng);

  return NextResponse.rewrite(url);
}
export const config = {
  matcher: '/shop/:path*',
};
