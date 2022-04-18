import styled from "styled-components";

export interface IInputLabelProps {
  isRequired?: boolean;
  children: React.ReactNode;
}

const StyledDiv = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
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
    <StyledDiv {...props}>
      {isRequired && <StyledSpan>{`*`}</StyledSpan>}
      {children}
    </StyledDiv>
  );
};
