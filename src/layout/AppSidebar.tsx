import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDownIcon,
  LogOutIcon,
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  SettingsIcon,
  BookOpenIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/authSlice";
import { clearAuth } from "../utils/auth";
import AppHeaderData from "../constant/AppHeader.data";

interface RootState {
  auth: {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    } | null;
    token: string | null;
  };
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const AppSidebar: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const location = useLocation();
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => state.auth.user);
  const role = currentUser?.role || "Student";

  // Educational institute navigation items
  const getNavItems = (role: string): NavItem[] => {
    const baseItems = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        name: "Courses",
        path: "/courses",
        icon: <BookOpenIcon className="w-5 h-5" />,
      },
      {
        name: "Projects",
        path: "/projects",
        icon: <BriefcaseIcon className="w-5 h-5" />,
      },
      {
        name: "Calendar",
        path: "/calendar",
        icon: <CalendarIcon className="w-5 h-5" />,
      },
    ];

    // Add role-specific items
    if (["Admin", "Instructor", "Teacher"].includes(role)) {
      baseItems.splice(2, 0, {
        name: "Students",
        path: "/students",
        icon: <UsersIcon className="w-5 h-5" />,
      });
      baseItems.splice(3, 0, {
        name: "Certificates",
        path: "/certificates",
        icon: <AwardIcon className="w-5 h-5" />,
      });
    }

    if (role === "Student") {
      baseItems.splice(2, 0, {
        name: "My Learning",
        path: "/my-learning",
        icon: <GraduationCapIcon className="w-5 h-5" />,
      });
    }

    // Add settings for all roles
    baseItems.push({
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon className="w-5 h-5" />,
    });

    return baseItems;
  };

  const navItems = getNavItems(role);

  const isActive = useCallback(
    (path: string) => {
      if (!path) return false;
      if (location.pathname === path) return true;
      const normalized = path.endsWith("/") ? path.slice(0, -1) : path;
      return location.pathname.startsWith(`${normalized}/`);
    },
    [location.pathname]
  );

  const handleLogout = () => {
    dispatch(clearUser());
    clearAuth();
    window.location.href = "/login";
  };

  const handleNavClick = () => {
    // Close mobile sidebar when navigation item is clicked
    if (isMobileOpen) {
      toggleMobileSidebar();
    }
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col top-0 left-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-screen transition-transform duration-300 ease-in-out z-50 border-r border-gray-200 dark:border-gray-700 w-[280px] shadow-xl
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:hidden`}
    >
      
      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 space-y-2">
          {/* AppHeaderData Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
              Main Navigation
            </h3>
            {AppHeaderData.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  {item.name === "Home" && <HomeIcon className="w-4 h-4" />}
                  {item.name === "About us" && (
                    <UsersIcon className="w-4 h-4" />
                  )}
                  {item.name === "Courses" && (
                    <BookOpenIcon className="w-4 h-4" />
                  )}
                  {item.name === "Batches" && (
                    <GraduationCapIcon className="w-4 h-4" />
                  )}
                  {item.name === "Blog" && <BookOpenIcon className="w-4 h-4" />}
                  {item.name === "Contact us" && (
                    <UsersIcon className="w-4 h-4" />
                  )}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer with Logout */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all duration-200 group"
        >
          <LogOutIcon className="w-5 h-5 text-gray-500 group-hover:text-red-500 dark:text-gray-400 dark:group-hover:text-red-400" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
