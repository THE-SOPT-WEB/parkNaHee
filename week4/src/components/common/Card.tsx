import { LocationType } from '@api/LocationApi';
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  locationData: LocationType | undefined;
}
function Card({ locationData }: CardProps) {
  console.log('locationData<locationData', locationData);
  return (
    <Styled.LI>
      <Styled.Title>
        <h2>{locationData?.place_name}</h2>
        <button>
          <a href={locationData?.place_url} target="_blank">
            Go to Link
          </a>
        </button>
      </Styled.Title>
      <p>{locationData?.phone}</p>
      <p>{locationData?.address_name}</p>
    </Styled.LI>
  );
}

export default Card;

const Styled = {
  LI: styled.li`
    margin-top: 1rem;
    width: 90%;
    height: 6.3125rem;
    background: ${({ theme }) => theme.colors['gray-5']};
    ${({ theme }) => theme.border};
    ${({ theme }) => theme.shadow};
    border-radius: 1rem;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors['gray-0']};
      margin-top: 1rem;
    }
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    & > h2 {
      color: ${({ theme }) => theme.colors['gray-0']};
      font-size: 1rem;
      /* margin: 1rem 1rem; */
    }
    & > button {
      background: ${({ theme }) => theme.colors['gray-2']};
      color: ${({ theme }) => theme.colors['gray-0']};
      border-radius: 1rem;
      padding: 0.25rem 0.5rem;
      /* margin: 1rem 1rem; */
    }
  `,
};
