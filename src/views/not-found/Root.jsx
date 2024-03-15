import { capitalize } from '@/utils';
import Sections from './sections';


const NotFoundView = ({ data = {} }) => {
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
              id={data.name.toLowerCase()}
              key={data.name}
            />
          )
        );
      })}
    </main>
  );
};

export default NotFoundView;
