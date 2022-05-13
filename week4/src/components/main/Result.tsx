import { AllLocationListDataType, AllLocationListResponce } from '@api/LocationApi';
import ErrorFallback from '@components/common/ErrorFallback';
import Loading from '@components/common/Skeleton';
import { StatusType } from '@page/Main';
import React from 'react';
import CardList from './CardList';
import NoResult from '../common/NoResult';

interface ResultProps {
  isEmpty: boolean;
  keywordLocationData: AllLocationListDataType | undefined;
  status: StatusType;
}
function Result({ isEmpty, keywordLocationData, status }: ResultProps) {
  switch (status) {
    case 'LOADING':
      return <Loading />;
    case 'ERROR':
      return <ErrorFallback />;
    default:
      return isEmpty ? <NoResult /> : <CardList keywordLocationData={keywordLocationData} />;
  }
}

export default Result;
