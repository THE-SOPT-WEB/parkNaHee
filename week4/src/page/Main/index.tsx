import {
  LocationApi,
  getAddressByCoordinteProps,
  getLocationByKeywordProps,
  AllLocationListDataType,
} from '@api/LocationApi';
import SearchBar from '@components/main/SearchBar';
import Title from '@components/common/Title';
import { flexColumnCenter } from '@mixin';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Result from '@components/main/Result';
import { flushSync } from 'react-dom';
export type StatusType = 'IDLE' | 'LOADING' | 'ERROR' | 'COMPLETE';

function Main() {
  const [keywordLocationData, setKeywordLocationData] = useState<
    AllLocationListDataType | undefined
  >();
  const [isCheckboxInput, setIsCheckboxInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [status, setStatus] = useState<StatusType>('IDLE');

  const changeStatus = (currentStatus: StatusType) => {
    switch (currentStatus) {
      case 'IDLE':
        flushSync(() => setStatus('IDLE'));
        break;
      case 'LOADING':
        flushSync(() => setStatus('LOADING'));
        break;
      case 'ERROR':
        flushSync(() => setStatus('ERROR'));
        break;
      default:
        flushSync(() => setStatus('COMPLETE'));
        break;
    }
  };

  const getLocation = () => {
    // 클로저를 이용해 한 번 위치를 받아온 이후엔 리렌더하기 이전까지 새로 불러오지 않도록
    let _x, _y;
    if ('geolocation' in navigator && !_x && !_y) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            _x = x;
            _y = y;
            resolve({ x: _x, y: _y });
          },
          (e) => {
            alert('현재 위치를 불러올 수 없습니다.');
            setIsCheckboxInput(false);
            changeStatus('ERROR');
          },
        );
      });
    } else {
      return { x: _x, y: _y };
    }
  };

  const fetchSearchResult = async ({ query, page, size, x, y }: getLocationByKeywordProps) => {
    try {
      const currentData = await LocationApi.getLocationByKeyword({ query, page, size, x, y });
      setKeywordLocationData(currentData?.data);
    } catch (e) {
      changeStatus('ERROR');
    }
  };

  const fetchCurrentLocation = async ({ x, y }: getAddressByCoordinteProps) => {
    try {
      const currentLocation = await LocationApi.getAddressByCoordinte({ x, y });
      currentLocation?.data && setSearchValue(currentLocation.data.documents[0]?.address_name);
    } catch (e) {
      changeStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = async () => {
    changeStatus('LOADING');
    setIsCheckboxInput((prev) => !prev);
    switch (isCheckboxInput) {
      case true:
        setSearchValue('');
        setKeywordLocationData(undefined);
        changeStatus('IDLE');
        break;
      default:
        const currentLocation = (await getLocation()) as getAddressByCoordinteProps;
        await fetchCurrentLocation(currentLocation);
        await fetchSearchResult({
          query: `${searchValue}`,
          page: 1,
          size: 15,
          x: currentLocation?.x,
          y: currentLocation?.y,
        });
        changeStatus('COMPLETE');
    }
  };

  const getAddressDataByKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === '') {
      alert('검색어를 입력해주세요');
      return;
    }
    changeStatus('LOADING');
    fetchSearchResult({ query: `${searchValue}`, page: 1, size: 15 });
    changeStatus('COMPLETE');
  };

  useEffect(() => {
    switch (keywordLocationData?.documents?.length === 0) {
      case true:
        setIsEmpty(true);
        break;
      default:
        setIsEmpty(false);
        break;
    }
  }, [keywordLocationData]);

  return (
    <Styled.Root>
      <Title>Looking for a beer place</Title>
      <Styled.CheckboxInput>
        <label htmlFor="isCheckboxInput">현재 위치로 검색할래요</label>
        <input
          type="checkbox"
          name="isCheckboxInput"
          checked={isCheckboxInput}
          onClick={handleClick}
          readOnly
        />
      </Styled.CheckboxInput>
      <SearchBar
        placeholder="동네를 검색하세요."
        type="text"
        value={searchValue}
        onChange={handleChange}
        onSubmit={getAddressDataByKeyword}
        readOnly={isCheckboxInput}
      />
      <Result keywordLocationData={keywordLocationData} isEmpty={isEmpty} status={status} />
    </Styled.Root>
  );
}

export default Main;
const Styled = {
  Root: styled.main`
    width: 100%;
    ${flexColumnCenter}
    & h1 {
      margin-top: 2rem;
    }
  `,
  CheckboxInput: styled.div`
    display: flex;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['gray-0']};
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    & label {
      margin-right: 0.5rem;
    }
  `,
};
