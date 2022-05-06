import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Title from '../components/common/Title';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/worldcup');
  };

  return (
    <>
      <Title>킹받는 과목 월드컵</Title>
      <Styled.Main>킹받는 과목 월드컵을 시작하겠어요</Styled.Main>
      <Styled.Image src="/assets/king.gif" alt="소개" />
      <Button onClick={onClickHandler}>킹받는 과목 월드컵 시작</Button>
    </>
  );
}

export default Main;
const Styled = {
  Main: styled.main`
    margin-top: 1rem;
    margin-bottom: 3rem;
  `,
  Image: styled.img`
    margin-bottom: 5rem;
  `,
};
