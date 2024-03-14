import { Suspense } from 'react';

import { Text } from '@/components/ui';
import { cn } from '@/utils';

import Sections from './sections';

const ProjectView = async ({ promises, className, ...props }) => {
  const data = (await promises.data).data;

  return (
    <main
       className={cn(
        'flex w-full max-w-bounds flex-col items-center',
        className,
      )}
      {...props}
    >
      <Sections.Hero data={data} />

      <Suspense
        fallback={<Text className='py-lg text-lg font-medium'>Loading...</Text>}
      >
        <Sections.Images promise={promises.images} />
      </Suspense>
    </main>
  );
};

export default ProjectView;
