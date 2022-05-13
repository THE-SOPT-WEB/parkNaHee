import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children?: string;
}
function Title({ children }: TitleProps) {
  return <Styled.Title>{children}</Styled.Title>;
}

export default Title;
const Styled = {
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 2rem;
  `,
};
