import { useState } from 'react'
import { Stats } from '../components/Stats'
import UrlList from '../components/Dashboard/UrlList'
import { appRouter } from '../server/router'
import { GetStaticPropsContext } from 'next/types'
import superjson from 'superjson'
import { createSSGHelpers } from '@trpc/react/ssg'
import { trpc } from '../utils/trpc'
import { createContext } from '../server/router/context';
import { Layout } from '../components/layout'
import { Context } from './_app'
import { Button } from '../components/elements/Button'
import { Actions } from '../utils/types'


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const shortQuery = trpc.useQuery(['urls.getAll']);
  const { data } = shortQuery;

  return (<Context.Consumer>{({ stats }) => (
    <>
      <div className="min-h-full">
        <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <main className="flex-1">
            {/* Page title & actions */}
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <Button text="Add Link" action={Actions.CreateUrl} />
              </div>
            </div>
            <Stats stats={stats} />
            <UrlList urls={data} />
          </main>
        </Layout>
      </div>
    </>)}</Context.Consumer>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext<any>,
) {
  const ssg = createSSGHelpers({
    router: appRouter,
    // @ts-expect-error not sure why this is an error
    ctx: await createContext(context),
    transformer: superjson,
  });

  await ssg.fetchQuery('urls.getAll');
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
}
