import styled from 'styled-components';
import { MouseEventHandler } from 'react';

interface ButtonContainerProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    children: React.ReactNode;
  }

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  color: #FFF;
  border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
  border-radius: 21px;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? '1' : '0.6')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`