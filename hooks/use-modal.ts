import React from 'react';

export default function useModal() {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  const toggle = () => {
    setIsShown(!isShown);
  };

  return {
    isShown,
    toggle,
  };
}
