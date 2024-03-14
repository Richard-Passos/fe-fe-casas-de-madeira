import Sections from './sections';


const ErrorView = ({  data = {}, error, reset  }) => {
  const {sections = []} = data
  
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
