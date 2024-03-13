'use client';

import { createContext, useState } from 'react';

const MenuContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

const MenuProvider = ({ value, ...props }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <MenuContext.Provider
      value={{ isOpen, setIsOpen, ...value }}
      {...props}
    />
  );
};

export default MenuContext;
export { MenuProvider };
