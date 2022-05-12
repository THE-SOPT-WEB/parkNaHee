import { AllLocationListResponce, LocationApi } from '@api/LocationApi';
import Title from '@components/common/Title';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Main() {
  const [data, getData] = useState<AllLocationListResponce | undefined>();
  const fetchData = async () => {
    const currentData = await LocationApi.getLocationByKeyword('맥주', 1, 15);
    console.log('>currentData', currentData);
    getData(currentData);
  };
  console.log(process.env);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Styled.Root>
      <Title>Looking for a beer place</Title>
    </Styled.Root>
  );
}

export default Main;
const Styled = {
  Root: styled.div`
    & h1 {
      margin-top: 1rem;
    }
  `,
};
