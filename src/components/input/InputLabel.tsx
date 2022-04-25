import styled from "styled-components";

export interface IInputLabelProps {
  isRequired?: boolean;
  children: React.ReactNode;
}

const StyledLabel = styled.p`
  margin-left: 8px;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  font-size: var(--text-label-size);
  color: var(--text-base-color);
`;

const StyledAsterisk = styled.span`
  font-size: 1.75rem;
  margin-bottom: -12.5px;
  margin-right: 0.25rem;
  line-height: 0px;
  color: var(--text-error-color);
`;

export const InputLabel: React.FC<IInputLabelProps> = ({
  isRequired,
  children,
  ...props
}) => {
  return (
    <StyledLabel {...props}>
      {isRequired && <StyledAsterisk>{`*`}</StyledAsterisk>}
      {children}
    </StyledLabel>
  );
};
