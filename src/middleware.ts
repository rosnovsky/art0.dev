import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AppRouter } from "./server/router";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { getBaseUrl } from "./utils/trpc";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.pathname.substring(1);
  if (
    // TODO: is there a better way to check if it's a slug or not?
    url.pathname.startsWith("/dashboard") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/shorts") ||
    url.pathname.startsWith("/_next") ||
    url.pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         **/
        url: `${getBaseUrl()}/api/trpc`,
      }),
    ],
  });

  const data = await client.getUrl.query({ slug });
  if (data) {
    try {
      await client.registerClick.mutate({ slug });
    } catch (error) {
      console.error(error);
      throw new Error("Failed to register click");
    }
    return NextResponse.redirect(data.longUrl);
  }
  return NextResponse.redirect("https://art0.dev/");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
