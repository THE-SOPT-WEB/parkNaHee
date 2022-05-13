import React from 'react';
import styled from 'styled-components';
function NoResult() {
  return <Styled.Root>검색 결과가 없어요ㅠㅠ</Styled.Root>;
}

export default NoResult;
const Styled = {
  Root: styled.section`
    color: ${({ theme }) => theme.colors['gray-0']};
    font-size: 1rem;
    margin-top: 10rem;
  `,
};
