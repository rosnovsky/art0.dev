import { useState } from 'react'
import { ChartBarIcon, LinkIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Stats } from '../components/Stats'
import UrlList from '../components/Dashboard/UrlList'
import { appRouter } from '../server/router'
import { GetStaticPropsContext } from 'next/types'
import superjson from 'superjson'
import { createSSGHelpers } from '@trpc/react/ssg'
import { trpc } from '../utils/trpc'
import { createContext } from '../server/router/context';
import { MobileSidebar } from '../components/Sidebar/MobileSidebar'
import { DesktopSidebar } from '../components/Sidebar/DesktopSidebar'
import { MobileSidebarContainer } from '../components/Sidebar/MobileSidebarContainer'
import { Layout } from '../components/layout'


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

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const shortQuery = trpc.useQuery(['urls.getAll']);
  const { data } = shortQuery;

  return (
    <>
      <div className="min-h-full">
        <Layout navigation={navigation} teams={teams} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <main className="flex-1">
            {/* Page title & actions */}
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <button
                  type="button"
                  className="order-0 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                >
                  New link
                </button>
              </div>
            </div>
            <Stats stats={stats} />
            <UrlList urls={data} />
          </main>
        </Layout>
      </div>
    </>
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
