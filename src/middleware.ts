import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AppRouter } from "./server/router";
import { createTRPCClient } from "@trpc/client";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (
    url.pathname.startsWith("/dashboard") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/shorts") ||
    url.pathname.startsWith("/_next") ||
    url.pathname === "/favicon.ico"
  ) {
    console.info("not redirecting", url.pathname);
    return NextResponse.next();
  }

  console.info("redirecting", url.pathname);
  const client = createTRPCClient<AppRouter>({
    url: "http://localhost:3000/api/trpc",
  });
  console.log("here we go");
  const data = await client.mutation("urls.getUrl", {
    slug: "url.pathname.substring(1)",
  });
  console.log("data", data);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
