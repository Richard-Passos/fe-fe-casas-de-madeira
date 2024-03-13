'use client';

import { Title } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DialogTitle = ({ className, ...props }, ref) => {
  return (
    <Title
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogTitle);
