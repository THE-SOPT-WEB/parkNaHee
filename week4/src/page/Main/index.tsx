import { AllAddressListResponse, AllLocationListResponce, LocationApi } from '@api/LocationApi';
import React, { useEffect, useState } from 'react';

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

  return <div>메인 페이지</div>;
}

export default Main;
