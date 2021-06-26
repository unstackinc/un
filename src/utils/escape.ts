// escape.ts

import { useEffect, useCallback } from 'react';

export const escape = (state: boolean, setState: any) => {
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && state) {
        setState(false);
      }
    },
    [setState, state],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
};

export default escape;
