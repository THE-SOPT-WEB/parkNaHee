import React, { useState, useRef, useEffect } from 'react';
import courses from '../models/gameData';
import Tounament from '../components/main/Tounament';
import Title from '../components/common/Title';
import { ROUND } from '../constants';
import { ImageType } from '../types';
import { useNavigate } from 'react-router-dom';
import TournamentProgress from '../components/main/TournamentProgress';

type CurrentRoundType = 'FIRSTROUND' | 'SECONDROUND' | 'FINALROUND';
interface MainProps {
  setFinalWinner?: React.Dispatch<React.SetStateAction<ImageType>>;
}
function Main({ setFinalWinner }: MainProps) {
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
      default:
        setFinalWinner(Array.from(winner.current)[0]);
        navigate('/complete');
    }
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.target instanceof Element) {
      console.log(courses[e.currentTarget.id]);
      winner.current.add(courses[e.currentTarget.id]);
      setCurrentStep((prev) => prev + 1);

      if (winner.current.size * 2 === ROUND[currentRound]) {
        getNextRound(currentRound);
        setCurrentBattlers(Array.from(winner.current));
        winner.current = new Set([]);
        setCurrentStep(0);
      }
    }
  };

  return (
    <>
      <Title>킹받는 과목 월드컵</Title>
      <TournamentProgress currentRound={currentRound} currentStep={currentStep} />
      <Tounament
        onClick={onClickHandler}
        currentBattler={currentBattlers}
        currentStep={currentStep * 2}
      />
    </>
  );
}

export default Main;
