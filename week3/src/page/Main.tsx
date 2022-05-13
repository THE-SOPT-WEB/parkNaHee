import React, { useState, useRef } from 'react';
import courses from '../models/gameData';
import Tounament from '../components/main/Tounament';
import Title from '../components/common/Title';
import { ROUND } from '../constants';
import { ImageType } from '../types';
import { useNavigate } from 'react-router-dom';
import TournamentProgress from '../components/main/TournamentProgress';

type CurrentRoundType = 'FIRSTROUND' | 'SECONDROUND' | 'FINALROUND';

function Main() {
  const winner = useRef(new Set<ImageType>([]));
  const [currentRound, setCurrentRound] = useState<CurrentRoundType>('FIRSTROUND');
  const [currentBattlers, setCurrentBattlers] = useState(Object.values(courses));
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const getNextRound = (currentRound: CurrentRoundType) => {
    switch (currentRound) {
      case 'FIRSTROUND':
        setCurrentRound('SECONDROUND');
        return 'SECONDROUND';
      case 'SECONDROUND':
        setCurrentRound('FINALROUND');
        return 'FINALROUND';
      case 'FINALROUND':
        navigate('/complete', { state: Array.from(winner.current)[0] });
    }
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!(e.target instanceof Element)) return;
    winner.current.add(courses[e.currentTarget.id]);
    setCurrentStep((prev) => prev + 2);

    if (winner.current.size * 2 === ROUND[currentRound]) {
      getNextRound(currentRound);
      setCurrentBattlers(Array.from(winner.current));
      winner.current = new Set([]);
      setCurrentStep(0);
    }
  };

  return (
    <>
      <Title>킹받는 과목 월드컵</Title>
      <TournamentProgress currentRound={currentRound} currentStep={currentStep} />
      <Tounament
        onClick={onClickHandler}
        currentBattler={currentBattlers}
        currentStep={currentStep}
      />
    </>
  );
}

export default Main;
