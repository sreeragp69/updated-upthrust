import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen flex">
      {/* Mobile Sidebar */}
      <AppSidebar />

      {/* Backdrop for mobile */}
      {isMobileOpen && <Backdrop onClick={() => setIsMobileOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <AppHeader />
        <div className="p-2 md:p-6 sm:p-4 mx-auto max-w-(--breakpoint-2xl)">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
