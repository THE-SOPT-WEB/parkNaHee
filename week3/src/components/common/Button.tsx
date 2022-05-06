import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <Styled.Root onClick={onClick}>{children}</Styled.Root>;
}

export default Button;

const Styled = {
  Root: styled.button`
    height: 4rem;
    border-radius: 50px;
    border: 1px solid white;
    padding: 0 20px;
    background: transparent;
    color: white;
    font-weight: 400;
    font-size: 1.3rem;
    cursor: pointer;
  `,
};
