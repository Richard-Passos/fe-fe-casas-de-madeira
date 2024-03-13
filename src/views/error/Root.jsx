'use client';

import { useEffect, useState } from 'react';

import { pagesApi } from '@/api';
import { Button, Link, Text } from '@/components/ui';

const ErrorView = ({ error, reset }) => {
  const [data, setData] = useState({});
  console.log('-  data   -', data);

  const [tryAgainAct, homeAct] = data.actions || [{}, {}];

  useEffect(() => {
    pagesApi
      .getOne('error', '?populate=sections')
      .then(({ data }) => setData(data));

    console.log(error);
  }, [error]);

  return (
    <main className='flex min-h-[calc(100svh-var(--header-h))] w-full max-w-bounds flex-col items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]'>
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

      <span className='' />
    </main>
  );
};

export default ErrorView;
