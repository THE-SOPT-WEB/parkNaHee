import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../common/mixin';
import { ImageType } from '../../types';

interface TournamentProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currentBattler: ImageType[];
  currentStep: number;
}
function Tounament({ currentBattler, currentStep, onClick }: TournamentProps) {
  return (
    <>
      <Styled.TounamentWrapper onClick={onClick}>
        <Styled.TounamentFigure>
          <img
            id={currentBattler[currentStep].id}
            src={currentBattler[currentStep].image}
            alt={currentBattler[currentStep].alt}
          />
          <figcaption>{currentBattler[currentStep].alt}</figcaption>
        </Styled.TounamentFigure>
        <Styled.TounamentFigure>
          <img
            id={currentBattler[currentStep + 1].id}
            src={currentBattler[currentStep + 1].image}
            alt={currentBattler[currentStep + 1].alt}
          />
          <figcaption>{currentBattler[currentStep + 1].alt}</figcaption>
        </Styled.TounamentFigure>
        <Styled.TounamentVersus>
          <p>VS</p>
        </Styled.TounamentVersus>
      </Styled.TounamentWrapper>
    </>
  );
}

export default Tounament;

const Styled = {
  TounamentWrapper: styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: 40%;
  `,
  TounamentFigure: styled.figure`
    width: 50%;
    height: 100%;
    & * {
      width: 100%;
      height: 100%;
    }
  `,
  TounamentVersus: styled.div`
    position: absolute;
    font-size: 7rem;
    font-weight: 500;
    color: #ffec42ea;
    text-shadow: 2px 2px 7px #ffffff;
    height: 100%;
    left: 44%;
    ${flexRowCenter};
  `,
};
