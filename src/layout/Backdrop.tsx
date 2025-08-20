import { useSidebar } from "../context/SidebarContext";

interface BackdropProps {
  onClick?: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-white/20 dark:bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden 
                 border border-white/30 dark:border-white/20 shadow-2xl shadow-blue-500/10 lg:hidden"
      onClick={onClick || toggleMobileSidebar}
    />
  );
};

export default Backdrop;
