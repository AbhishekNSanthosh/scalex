import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/onboarding"];
const publicRoutes = ["/login", "/signup"];

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // Check authentication using cookies (since localStorage isn't accessible in middleware)
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.includes(path);
  const isLoggedIn = req.cookies.get("admin_logged_in")?.value === "true";

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }

  if (isPublicRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
// ✅ Fixed matcher configuration
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
