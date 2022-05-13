import React from 'react';
interface ErrorFallbackProps {
  error: Nullable<Error>;
  reset: () => void;
}

function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  console.log('>>>', error, reset);
  return <div>ErrorFallback</div>;
}

export default ErrorFallback;
