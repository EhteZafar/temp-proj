import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {


    const res: NextResponse = NextResponse.next();

      // add the CORS headers to the response
      res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
      res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
      res.headers.append(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      )

  return res;
}