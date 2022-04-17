import React from "react";
import styled, { CSSObject, InterpolationFunction } from "styled-components";
import { BREAKPOINTS } from "../../helpers";
import { useBreakpoint } from "../../hooks";
import "./box.css";

type Style = TemplateStringsArray | CSSObject | InterpolationFunction<any>;

interface IProps {
  children: React.ReactNode;
  as?: React.ElementType;
  style?: Style;
  sm?: Style;
  md?: Style;
  lg?: Style;
  xl?: Style;
  xxl?: Style;
  container?: boolean;
}

export const Box: React.FC<IProps> = ({
  children,
  as,
  style,
  sm,
  md,
  lg,
  xl,
  xxl,
  container,
}) => {
  const Component = as || "div";
  const { breakpoint } = useBreakpoint();
  const breakpointStyle = {
    sm: { ...sm },
    md: { ...sm, ...md },
    lg: { ...sm, ...md, ...lg },
    xl: { ...sm, ...md, ...lg, ...xl },
    xxl: { ...sm, ...md, ...lg, ...xl, ...xxl },
  }[breakpoint];

  const styles = {
    ...style,
    ...breakpointStyle,
    ...(container && { maxWidth: BREAKPOINTS[breakpoint] }),
  };

  const StyledComponent = styled(Component)(styles);

  return <StyledComponent style={styles}>{children}</StyledComponent>;
};
