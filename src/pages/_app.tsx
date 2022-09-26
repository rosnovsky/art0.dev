// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import type { AppRouter } from "../server/router";
import "../styles/globals.css";
import { createContext } from 'react';
import { ChartBarIcon, LinkIcon, HomeIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Shorts', href: '#', icon: LinkIcon, current: false },
  { name: 'Stats', href: '#', icon: ChartBarIcon, current: false },
]
const teams = [
  { name: 'Rosnovsky.us', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Around the web', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Private', href: '#', bgColorClass: 'bg-yellow-500' },
]

const stats = [
  { name: 'Total Links', stat: '31', previousStat: '30', change: '1%', changeType: 'increase' },
  { name: 'Total Clicks', stat: '96', previousStat: '46', change: '30%', changeType: 'increase' },
  { name: 'Avg. Click per Link', stat: '7', previousStat: '11', change: '4.05%', changeType: 'decrease' },
]

export const Context = createContext({ navigation, teams, stats });

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Context.Provider value={{ navigation, teams, stats }}><Component {...pageProps} /></Context.Provider>;
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
