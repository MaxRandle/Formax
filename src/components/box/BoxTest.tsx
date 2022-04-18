import React from "react";
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  InterpolationFunction,
  SimpleInterpolation,
} from "styled-components";
import { BREAKPOINTS } from "../../helpers";
import { useBreakpoint } from "../../hooks";
import "./box.css";

// type Style = TemplateStringsArray | CSSObject | InterpolationFunction<any>;

interface IProps {
  as?: React.ElementType;
  style?: CSSObject;
  sm?: TemplateStringsArray;
  md?: TemplateStringsArray;
  lg?: TemplateStringsArray;
  xl?: TemplateStringsArray;
  xxl?: TemplateStringsArray;
  container?: boolean;
}

const StyledComponent = styled.div<Pick<IProps, "style">>`
  ${({ style }) => style}
`;

export const BoxTest: React.FC<IProps> = ({
  style,
  sm,
  md,
  lg,
  xl,
  xxl,
  container,
  ...props
}) => {
  const { breakpoint } = useBreakpoint();
  // const breakpointStyle = {
  //   sm: { ...sm },
  //   md: { ...sm, ...md },
  //   lg: { ...sm, ...md, ...lg },
  //   xl: { ...sm, ...md, ...lg, ...xl },
  //   xxl: { ...sm, ...md, ...lg, ...xl, ...xxl },
  // }[breakpoint];

  const smStyle = sm;
  const mdStyle = `${sm} ${md}`;
  const lgStyle = `${md} ${lg}`;
  const xlStyle = `${lg} ${xl}`;
  const xxlStyle = `${xl} ${xxl}`;

  const breakpointStyle =
    {
      sm: smStyle,
      md: mdStyle,
      lg: lgStyle,
      xl: xlStyle,
      xxl: xxlStyle,
    }[breakpoint] || ``;

  // const styles = {
  //   ...style,
  //   ...breakpointStyle,
  //   ...(container && { maxWidth: BREAKPOINTS[breakpoint] }),
  // };

  const styles = `${style}
  ${container && `max-width: ${BREAKPOINTS[breakpoint]};`}`;

  console.log(styles);

  return <StyledComponent style={styles} {...props} />;
};
