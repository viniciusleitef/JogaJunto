import styled from 'styled-components';

interface ButtonContainerProps {
  backgroundColor?: string;
  color?: string;
}

export const ButttonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || 'white'};
  cursor: pointer;
  border: 1px solid black;
  border-radius: 1px;
  padding: 12px 20px;
  font-size: 0.8rem;
`;
