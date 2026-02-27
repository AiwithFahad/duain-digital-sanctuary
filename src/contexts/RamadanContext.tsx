import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface RamadanContextType {
  isRamadan: boolean;
  toggleRamadan: () => void;
}

const RamadanContext = createContext<RamadanContextType>({
  isRamadan: false,
  toggleRamadan: () => {},
});

export const useRamadan = () => useContext(RamadanContext);

export const RamadanProvider = ({ children }: { children: ReactNode }) => {
  const [isRamadan, setIsRamadan] = useState(false);

  useEffect(() => {
    if (isRamadan) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isRamadan]);

  return (
    <RamadanContext.Provider value={{ isRamadan, toggleRamadan: () => setIsRamadan(!isRamadan) }}>
      {children}
    </RamadanContext.Provider>
  );
};
