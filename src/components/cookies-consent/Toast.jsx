'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { useLocalStorage } from '@/hooks';

import { Timerbar, Toast } from '../ui';

const CookiesConsentToast = ({ data = {}, duration, ...props }) => {
  const [hasConsent, setHasConsent] = useLocalStorage('cookiesConsent', false),
    [isPaused, setIsPaused] = useState(false);

  return (
    <Toast
      onOpenChange={(isOpen) => {
        setHasConsent(!isOpen);
      }}
      open={!hasConsent}
      onPause={() => setIsPaused(true)}
      onResume={() => setIsPaused(false)}
      {...props}
    >
      <Toast.Header>
        {data.title && <Toast.Title>{data.title}</Toast.Title>}
        {data.description && (
          <Toast.Description>{data.description} </Toast.Description>
        )}
      </Toast.Header>

      <Toast.Close>
        <Cross2Icon />
      </Toast.Close>

      <Timerbar
        pause={isPaused}
        className='absolute bottom-0 left-0 [--variant:--variant-c]'
        duration={duration}
        variants={{
          color: 'inherit',
          size: 'xs',
        }}
      >
        <Timerbar.Indicator />
      </Timerbar>
    </Toast>
  );
};

export default CookiesConsentToast;
