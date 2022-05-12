import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onSubmit?: () => {};
  [key: string]: any;
}
function SearchBar({ onSubmit, ...props }: SearchBarProps) {
  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.Input {...props} />
      <Styled.SubmitButton />
    </Styled.Form>
  );
}

export default SearchBar;

const Styled = {
  Form: styled.form`
    width: 90%;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors['gray-3']};
    border: 8px solid rgba(105, 105, 105, 0.5);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 0.625rem;
    display: flex;
    justify-content: space-between;
  `,
  Input: styled.input`
    background: transparent;
    border: 0;
    width: 90%;
    margin-left: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['gray-0']};
  `,
  SubmitButton: styled.button`
    border: 0;
    width: 22px;
    height: 22px;
    margin: 0.5rem 0.75rem;
    cursor: pointer;
    background: url('https://firebasestorage.googleapis.com/v0/b/wesopt29-2e38a.appspot.com/o/SearchIcon.svg?alt=media');
  `,
};
