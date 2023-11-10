import React from 'react';
import styled from 'styled-components';

function ErrorFallback() {
  return <Styled.Root>에러로 데이터를 불러올 수 없습니다ㅠ</Styled.Root>;
}

export default ErrorFallback;
const Styled = {
  Root: styled.section`
    color: ${({ theme }) => theme.colors['gray-0']};
    font-size: 1rem;
    margin-top: 10rem;
  `,
};
