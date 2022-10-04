import { MobileProfileDropdown } from "./MobileProfileDropdown";
import { MobileSearch } from "./MobileSearch";
import { MobileSidebarButton } from "./MobileSidebarButton";

export const MobileSidebarContainer = ({
  setSidebarOpen,
}: {
  setSidebarOpen: any;
}) => {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
      <MobileSidebarButton setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
        <MobileSearch />
        <MobileProfileDropdown />
      </div>
    </div>
  );
};
