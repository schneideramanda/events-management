import { ReactNode, createContext, useCallback, useMemo, useState } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {},
});

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const value = useMemo(() => ({ isSidebarOpen, toggleSidebar }), [isSidebarOpen, toggleSidebar]);

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export { SidebarContext, SidebarProvider };
