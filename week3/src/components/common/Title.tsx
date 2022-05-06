import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../common/mixin';

interface TitleProps {
  children?: string;
}

function Title({ children }: TitleProps) {
  console.log('>>>children', children);
  return <Styled.Title>{children}</Styled.Title>;
}

export default Title;

const Styled = {
  Title: styled.h1`
    ${flexRowCenter}
    font-size: 2rem;
    color: white;
  `,
};
