'use client';

import { createContext, useState } from 'react';

const LightBoxContext = createContext({
  state: {
    isOpen: false,
    activeIdx: 0,
  },
  setState: () => {},
});

const LightBoxProvider = ({ value, ...props }) => {
  const [state, setState] = useState({ isOpen: false, activeIdx: 0 });

  return (
    <LightBoxContext.Provider
      value={{ state, setState, ...value }}
      {...props}
    />
  );
};

export default LightBoxContext;
export { LightBoxProvider };
