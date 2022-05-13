type Nullable<T> = T | null;

type NonNullableObj<T> = {
  [K in keyof T]-?: T[K];
};

interface IParentComponentProps {
  className?: string;
  children: ReactChild;
}
