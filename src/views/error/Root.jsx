'use client'

import { useContext } from 'react';
import Sections from './sections';
import { ErrorContext } from '@/contexts';
import { capitalize } from '@/utils';

const ErrorView = ({ error, reset }) => {

  const {data} = useContext(ErrorContext)
  
  const { sections = [] } = data;

  return (
    <main className='flex w-full max-w-bounds flex-col items-center'>
      {sections?.map((data) => {
        const Section =
          Sections[data.name.split(/[-_ ]/).map(capitalize).join('')];

        return (
          Section && (
            <Section
              data={data}
              error={error}
              reset={reset}
              id={data.name.toLowerCase()}
              key={data.name}
            />
          )
        );
      })}
    </main>
  );
};

export default ErrorView;
