import styled from "styled-components";

export interface IInputHelperTextProps {
  children: React.ReactNode;
  isError?: boolean;
}

const StyledDiv = styled.div<Pick<IInputHelperTextProps, "isError">>`
  font-size: var(--text-caption-size);
  margin-left: 0.5rem;
  margin-top: 0.125rem;
  color: var(
    ${({ isError }) => (isError ? `--text-error-color` : `--text-base-color`)}
  );
`;

export const InputHelperText: React.FC<IInputHelperTextProps> = ({
  children,
  ...props
}) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};
