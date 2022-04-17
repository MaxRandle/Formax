import { useContext } from "react";
import { BreakpointContext } from "../../contexts/BreakpointContext";
import { Breakpoint } from "../../helpers";

type ReturnType = {
  breakpoint: Breakpoint;
};

export function useBreakpoint(): ReturnType {
  return useContext(BreakpointContext);
}
