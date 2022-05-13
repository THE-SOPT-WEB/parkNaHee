import React from 'react';
import styled from 'styled-components';
function Loading() {
  return <Styled.Root>Loading...기다려줘...</Styled.Root>;
}

export default Loading;
const Styled = {
  Root: styled.section`
    color: ${({ theme }) => theme.colors['gray-0']};
    font-size: 1rem;
    margin-top: 10rem;
  `,
};
