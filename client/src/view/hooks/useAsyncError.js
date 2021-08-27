import { useCallback, useState } from 'react';

/**
 * This function will handle async errors;
 * Article: https://medium.com/trabe/catching-asynchronous-errors-in-react-using-error-boundaries-5e8a5fd7b971
 * @returns {(function(*): void)|*}
 */

const useAsyncError = () => {
  const [, setError] = useState();

  return useCallback(
    (error) => {
      setError(() => {
        throw error;
      });
    },
    [setError],
  );
};

export default useAsyncError;
