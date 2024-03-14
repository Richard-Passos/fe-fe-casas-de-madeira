import { capitalize } from '@/utils';

import Sections from './sections';

const HomeView = ({ data = {} }) => {
  const { sections } = data;

  return (
    <main className='dark-layout flex w-full max-w-bounds flex-col items-center'>
      {sections?.map((data, i) => {
        const Section =
          Sections[data.name.split(/[-_ ]/).map(capitalize).join('')];

        return (
          Section && (
            <Section
              data={data}
              id={data.name.toLowerCase()}
              key={data.name}
              theme={i === 0 ? 'dark' : 'light'}
            />
          )
        );
      })}
    </main>
  );
};

export default HomeView;
