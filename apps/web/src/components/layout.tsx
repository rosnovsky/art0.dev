import { useState } from "react";
import { DesktopSidebar } from "./Sidebar/DesktopSidebar";
import { MobileSidebar } from "./Sidebar/MobileSidebar";
import { MobileSidebarContainer } from "./Sidebar/MobileSidebarContainer";

export const Layout = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <DesktopSidebar />
      <div className="flex flex-col lg:pl-64">
        <MobileSidebarContainer setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  );
};
