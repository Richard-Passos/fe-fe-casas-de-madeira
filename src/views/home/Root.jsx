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
              theme={i === 0 ? 'dark' : 'light'}
              key={data.name}
              id={data.name.toLowerCase()}
              data={data}
            />
          )
        );
      })}
    </main>
  );
};

export default HomeView;
