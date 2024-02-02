import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = cookies().get("auth")?.value;

  if (request.nextUrl.pathname.startsWith("/wiki") && !auth) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/:path*",
};

/*
Middleware/Mediator pattern

Middleware pattern is used to add new functionality to an existing object without altering its structure.
It is a chain of responsibility pattern.
It is used to process the request in a sequence.
Each middleware has a reference to the next middleware in the chain.

In this example, the middleware function checks if the user is authenticated and redirects to the home page if not.
*/
