'use client'

import { cn } from '@/utils';

import { Button, Link, Text } from '@/components/ui';
import { useEffect } from 'react';


const ErrorHeroSection = ({ error, className,data={}, reset,  ...props }) => {
  const [tryAgainAct = {}, homeAct = {}] = (data?.actions ? data.actions : []);

  useEffect(() => {
    console.log(error);
  }, [error]);


  return (
    <section
      className={cn('w-9/10 max-w-screen-xl flex flex-col items-center justify-center min-h-[calc(100svh-var(--header-h))] pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]', className)}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-xs w-9/10 text-center'
      >
        <h1>{data.title}</h1>
      </Text.Title>

      <Text className='mb-md w-9/10 max-w-xl text-center text-muted-content'>
        {data.description}
      </Text>

      <div className='flex w-fit max-w-9/10 flex-wrap items-center justify-center gap-sm'>
        <Button
          asChild
          variants={{ color: 'inverted', style: 'outline' }}
        >
          <Link
            href='/'
            className='hover:no-underline'
          >
            {homeAct.label}
          </Link>
        </Button>
        <Button onClick={reset}>{tryAgainAct.label}</Button>
      </div>

      <span className='absolute top-0 h-px w-[calc(var(--w)*.95)] bg-border [--w:100vw] 2xl:[--w:--max-w]' />
      </section>
  );
};

export default ErrorHeroSection;