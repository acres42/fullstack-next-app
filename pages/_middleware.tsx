import { NextRequest, NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(request: NextRequest) {
  if (signedinPages.find((p) => p === request.nextUrl.pathname)) {
    const token = request.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
      const url = request.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.redirect(url)
    }
  }
}
