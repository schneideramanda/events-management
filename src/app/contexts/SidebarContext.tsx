import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {},
  isMobile: false,
});

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const value = useMemo(
    () => ({ isSidebarOpen, toggleSidebar, isMobile }),
    [isMobile, isSidebarOpen, toggleSidebar]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export { SidebarContext, SidebarProvider };
