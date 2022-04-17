export type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";
export type BreakpointRecord = Record<Breakpoint, string>;

export const BREAKPOINTS: BreakpointRecord = {
  sm: `${640 / 16}rem`,
  md: `${768 / 16}rem`,
  lg: `${1024 / 16}rem`,
  xl: `${1280 / 16}rem`,
  xxl: `${1536 / 16}rem`,
};

export const MEDIA_BREAKPOINTS: BreakpointRecord = {
  sm: `(min-width: ${BREAKPOINTS.sm})`,
  md: `(min-width: ${BREAKPOINTS.md})`,
  lg: `(min-width: ${BREAKPOINTS.lg})`,
  xl: `(min-width: ${BREAKPOINTS.xl})`,
  xxl: `(min-width: ${BREAKPOINTS["xxl"]})`,
};

export const getCurrentBreakpoint = (): Breakpoint => {
  if (window.matchMedia(MEDIA_BREAKPOINTS["xxl"]).matches) {
    return "xxl";
  }
  if (window.matchMedia(MEDIA_BREAKPOINTS["xl"]).matches) {
    return "xl";
  }
  if (window.matchMedia(MEDIA_BREAKPOINTS["lg"]).matches) {
    return "lg";
  }
  if (window.matchMedia(MEDIA_BREAKPOINTS["md"]).matches) {
    return "md";
  }
  return "sm";
};

export const preferrersDarkMode =
  typeof window !== "undefined" && window !== null
    ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
    : false;
