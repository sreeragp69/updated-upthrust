import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";

import { useSelector } from "react-redux";
import AppHeaderData from "../constant/AppHeader.data";
import { Link } from "react-router";

const AppHeader: React.FC = () => {
  const currentUser = useSelector((state: any) => state.auth.user);

  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    toggleMobileSidebar();
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-themeBackgroundColor z-999999 ">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between w-full gap-4 py-4 lg:py-5">
          {/* Mobile Menu Button */}
          <AnimatePresence>
            <div className="flex items-center lg:hidden">
              <div className="relative">
                <div id="menuToggle" className="lg:hidden">
                  <input
                    id="checkbox"
                    type="checkbox"
                    onChange={handleToggle}
                    checked={isMobileOpen}
                    readOnly
                    className="hidden"
                  />
                  <label
                    className="relative w-6 h-6 flex flex-col justify-between cursor-pointer"
                    htmlFor="checkbox"
                  >
                    <div
                      className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded transition-all duration-300 ${
                        isMobileOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded transition-all duration-300 ${
                        isMobileOpen ? "opacity-0" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 rounded transition-all duration-300 ${
                        isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </AnimatePresence>

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-black dark:text-white">
              <img
                src="images/logo/logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {AppHeaderData.map((item) => (
              <div key={item.id}>
                <Link
                  to={item.path}
                  className="text-gray-700 uppercase dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {/* <ThemeToggleButton /> */}

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/login"
                className="px-6 py-2 text-sm font-normal alexandria bg-themePrimary text-white border border-themePrimary rounded-full hover:bg-blue-50 hover:text-themePrimary transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 text-sm font-normal alexandria text-themePrimary   bg-white border border-themePrimary rounded-full hover:bg-blue-50 hover:text-themePrimary transition-all duration-200"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isApplicationMenuOpen ? 1 : 0,
              height: isApplicationMenuOpen ? "auto" : 0,
            }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full overflow-hidden border-t border-gray-200 dark:border-gray-700"
          >
            <div className="py-4 space-y-3">
              {AppHeaderData.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col gap-3 px-4">
                  <Link
                    to="/login"
                    className="w-full px-4 py-2 text-center text-sm font-normal font-alexandria text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full px-4 py-2 text-center text-sm font-normal alexandria text-white bg-blue-600 dark:bg-blue-500 border border-blue-600 dark:border-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
};

export default AppHeader;
