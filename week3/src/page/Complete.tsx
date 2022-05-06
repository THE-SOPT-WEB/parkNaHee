import React from 'react';
import Title from '../components/common/Title';
import { ImageType } from '../types';
import styled from 'styled-components';
import { flexColumnCenter } from '../common/mixin';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

interface CompleteProps {
  finalWinner?: ImageType;
}

function Complete({ finalWinner }: CompleteProps) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/');
  };
  return (
    <Styled.Main>
      <Title>킹받는 과목 월드컵 최종 결과!</Title>
      <p>
        MAX King은 .. <b>{finalWinner?.alt}</b>입니다-_-{' '}
      </p>
      <Styled.TounamentFigure>
        <img src={finalWinner?.image} alt={finalWinner?.alt} />
        <figcaption>{finalWinner?.alt}</figcaption>
      </Styled.TounamentFigure>
      <Button onClick={onClickHandler}>킹받는 과목 다시 찾을래?</Button>
    </Styled.Main>
  );
}

export default Complete;

const Styled = {
  Main: styled.main`
    ${flexColumnCenter}
    width: 100%;
    & > p {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  `,
  TounamentFigure: styled.figure`
    margin-bottom: 5rem;
    width: 80%;
    & * {
      width: 100%;
      height: 100%;
    }
    & figcaption {
      margin-top: 1rem;
    }
  `,
};
