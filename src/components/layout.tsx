import { DesktopSidebar } from './Sidebar/DesktopSidebar'
import { MobileSidebar } from './Sidebar/MobileSidebar'
import { MobileSidebarContainer } from './Sidebar/MobileSidebarContainer'

export const Layout = ({ children, sidebarOpen, setSidebarOpen, navigation, teams }: any) => {
  return (
    <>
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={navigation} teams={teams} />
      <DesktopSidebar navigation={navigation} teams={teams} />
      <div className="flex flex-col lg:pl-64">
        <MobileSidebarContainer setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  )
}
