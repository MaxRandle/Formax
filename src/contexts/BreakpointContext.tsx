import { createContext, useEffect, useState } from "react";
import { Breakpoint, getCurrentBreakpoint } from "../helpers";

interface IContextValue {
  breakpoint: Breakpoint;
}
export const BreakpointContext = createContext<IContextValue>({
  breakpoint: "sm",
});

interface IProps {
  children: JSX.Element;
}

export const BreakpointContextProvider: React.FC<IProps> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm");

  useEffect(() => {
    const handleResize = () => {
      const windowIsGood = typeof window !== "undefined" && window !== null;
      if (windowIsGood) {
        setBreakpoint(getCurrentBreakpoint());
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BreakpointContext.Provider value={{ breakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};
