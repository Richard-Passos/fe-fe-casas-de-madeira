'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { LightBoxContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const KEYS = ['Enter', ' '];

const LightBoxItem = ({ index, ...props }) => {
  const { setState } = useContext(LightBoxContext);

  const handleSetIsOpen = () => setState({ isOpen: true, activeIdx: index });

  return (
    <Slot
      {...props}
      onClick={(ev) => {
        handleSetIsOpen();

        isFunctionThanCall(props.onClick, ev);
      }}
      onKeyDown={(ev) => {
        if (KEYS.includes(ev.key)) ev.preventDefault();

        isFunctionThanCall(props.onKeyDown, ev);
      }}
      onKeyUp={(ev) => {
        if (KEYS.includes(ev.key)) handleSetIsOpen();

        isFunctionThanCall(props.onKeyUp, ev);
      }}
    />
  );
};

export default LightBoxItem;
