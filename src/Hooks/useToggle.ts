import * as React from 'react';

const useToggle = (initialChecked: boolean = false) => {
  const [isChecked, setIsChecked] = React.useState(initialChecked);

  const changeChecked = React.useCallback(() => {
    setIsChecked(prev => false);
  }, []);

  return { isChecked, changeChecked };
};

export default useToggle;
