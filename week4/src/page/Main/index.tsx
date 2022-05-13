import {
  AllLocationListResponce,
  getAddressByKeywordProps,
  LocationApi,
  getAddressByCoordinteProps,
  getLocationByKeywordProps,
} from '@api/LocationApi';
import SearchBar from '@components/common/SearchBar';
import Title from '@components/common/Title';
import useLatestState from '@hooks/useLatestState';
import { flexColumnCenter } from '@mixin';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function Main() {
  const [keywordLocationData, setKeywordLocationData] = useState<
    AllLocationListResponce | undefined
  >();
  const [isCheckboxInput, setIsCheckboxInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const getLocation = () => {
    // 클로저를 이용해 한 번 위치를 받아온 이후엔 불필요한 요청 보내지 않도록
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
          },
        );
      });
    } else {
      return { x: _x, y: _y };
    }
  };

  const fetchSearchResult = async ({ query, page, size, x, y }: getLocationByKeywordProps) => {
    const currentData = await LocationApi.getLocationByKeyword({ query, page, size, x, y });
    console.log('>currentData', currentData);
    setKeywordLocationData(currentData);
  };

  const fetchCurrentLocation = async ({ x, y }: getAddressByCoordinteProps) => {
    const currentLocation = await LocationApi.getAddressByCoordinte({ x, y });
    console.log('>currentLocation', currentLocation);
    currentLocation?.documents && setSearchValue(currentLocation?.documents[0]?.address_name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleClick = async () => {
    setIsCheckboxInput((prev) => !prev);
    switch (isCheckboxInput) {
      case true:
        setSearchValue('');
        break;
      default:
        const currentLocation = (await getLocation()) as getAddressByCoordinteProps;
        await fetchCurrentLocation(currentLocation);
        fetchSearchResult({
          query: `${searchValue}`,
          page: 1,
          size: 15,
          x: currentLocation?.x,
          y: currentLocation?.y,
        });
        console.log(currentLocation);
    }
  };

  const getAddressDataByKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSearchResult({ query: `${searchValue}`, page: 1, size: 15 });
  };

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
        />
      </Styled.CheckboxInput>
      <SearchBar
        placeholder="동네를 검색하세요."
        value={searchValue}
        onChange={handleChange}
        onSubmit={getAddressDataByKeyword}
      />
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
