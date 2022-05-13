import { useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';

const useInput = <T>(
  inputValue: T,
): [T, Dispatch<SetStateAction<T>>, (e?: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<typeof inputValue>(inputValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, onChange];
};

export default useInput;
