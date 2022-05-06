import React from 'react';
import styled from 'styled-components';
import { ROUND } from '../../constants';
interface TournamentProgressProps {
  currentRound: string;
  currentStep: number;
}
function TournamentProgress({ currentRound, currentStep }: TournamentProgressProps) {
  return (
    <Styled.Root>
      {ROUND[currentRound]}강 {currentStep + 1}라운드
    </Styled.Root>
  );
}

export default TournamentProgress;

const Styled = {
  Root: styled.section`
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
};
