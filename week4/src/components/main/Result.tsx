import { AllLocationListDataType, AllLocationListResponce } from '@api/LocationApi';
import React from 'react';
import CardList from './CardList';
import NoResult from './NoResult';

interface ResultProps {
  isEmpty: boolean;
  keywordLocationData: AllLocationListDataType | undefined;
}
function Result({ isEmpty, keywordLocationData }: ResultProps) {
  switch (isEmpty) {
    case true:
      return <NoResult />;
    default:
      return <CardList keywordLocationData={keywordLocationData} />;
  }
}

export default Result;
