import { Search } from './Search'
import { Logo } from './Logo'
import UserProfileDropdown from './UserProfileDropdown'
import { Navigation } from './Navigation'

export const DesktopSidebar = () => {
  return (<>
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
      <Logo />
      <div className="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
        <UserProfileDropdown />
        <Search />
        <Navigation />
      </div>
    </div></>
  )
}
