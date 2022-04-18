import styled, { css } from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  level?: 1 | 2 | 3 | 4 | 5;
}

const StyledHeading = styled.h1<IProps>`
  margin: 0rem;
  padding: 0rem;

  ${({ level }) =>
    level === 1
      ? css`
          font-size: var(--heading-level1-size);
        `
      : level === 2
      ? css`
          font-size: var(--heading-level2-size);
        `
      : level === 3
      ? css`
          font-size: var(--heading-level3-size);
        `
      : level === 4
      ? css`
          font-size: var(--heading-level4-size);
        `
      : level === 5
      ? css`
          font-size: var(--heading-level5-size);
        `
      : css``}
`;

export const Heading: React.FC<IProps> = ({ ...props }) => {
  return <StyledHeading {...props} />;
};
