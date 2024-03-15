'use client';

import { useEffect } from 'react';

import { Button, Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const ErrorHeroSection = ({ data = {}, error, className, reset, ...props }) => {
  const [backHomeAct = {}, tryAgainAct = {}] = data?.actions
    ? data.actions
    : [];

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <section
      className={cn(
        'flex min-h-svh w-9/10 max-w-screen-xl -translate-y-[--header-h] flex-col items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-2 text-center'
      >
        <h1>{data.title}</h1>
      </Text.Title>

      <Text className='mb-4 text-center text-2xl font-semibold first-letter:uppercase'>
        {data.subtitle}
      </Text>

      <Text className='mb-md max-w-xl text-center text-muted-content first-letter:uppercase'>
        {data.description}
      </Text>

      <div className='flex w-fit max-w-9/10 flex-wrap items-center justify-center gap-sm'>
        <Button
          asChild
          variants={{ color: 'main' }}
        >
          <Link
            href='/'
            className='hover:no-underline'
          >
            {backHomeAct.label}
          </Link>
        </Button>

        <Button
          onClick={() => {
            console.log('reset');
            reset();
          }}
        >
          {tryAgainAct.label}
        </Button>
      </div>

      <span className='absolute top-0 h-px w-[calc(var(--w)*.95)] bg-border [--w:100vw] 2xl:[--w:--max-w]' />
    </section>
  );
};

export default ErrorHeroSection;
