import { AllLocationListDataType, AllLocationListResponce } from '@api/LocationApi';
import Card from '@components/common/Card';
import { flexColumnCenter } from '@mixin';
import React from 'react';
import styled from 'styled-components';

interface CardListProps {
  keywordLocationData: AllLocationListDataType | undefined;
}

function CardList({ keywordLocationData }: CardListProps) {
  return (
    <Styled.UL>
      {keywordLocationData?.documents?.map((item) => (
        <Card locationData={item} key={item.id} />
      ))}
    </Styled.UL>
  );
}

export default CardList;

const Styled = {
  UL: styled.ul`
    list-style: none;
    padding-left: 0px;
    width: 100%;
    ${flexColumnCenter}
  `,
};
