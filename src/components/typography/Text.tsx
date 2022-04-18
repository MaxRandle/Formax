import styled, { css } from "styled-components";

interface IProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  as?: "p" | "span";
  variant: "body" | "subheader";
}

const StyledHeading = styled.h1<IProps>`
  ${({ variant }) =>
    variant === "body"
      ? css`
          font-size: 0.85rem;
        `
      : variant === "subheader"
      ? css`
          font-size: 1rem;
        `
      : css``}
`;

export const Text: React.FC<IProps> = ({ ...props }) => {
  return <StyledHeading {...props} />;
};
