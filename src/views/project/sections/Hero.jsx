import { Bg } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewHeroSection = ({ theme, className, data, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-9/10 max-w-screen-lg flex-col items-center py-lg',
        theme,
        className,
      )}
      {...props}
    >
      <Text.Title
        className='mb-sm text-center'
        variants={{ size: 'lg' }}
      >
        {data.title}
      </Text.Title>

      <Text className='mb-md max-w-lg text-center text-muted-content first-letter:uppercase'>
        {data.description}
      </Text>

      <ul className='grid grid-cols-2 gap-sm'>
        {data.extras?.map((data) => (
          <li
            className='flex aspect-square w-full max-w-48 flex-col justify-end rounded-md bg-muted p-sm'
            key={data.title}
          >
            <Text.Subtitle className='mb-1 lowercase first-letter:uppercase'>
              {data.title}
            </Text.Subtitle>

            <Text className='text-sm font-medium text-muted-content first-letter:uppercase'>
              {data.description}
            </Text>
          </li>
        ))}
      </ul>

      <span className='absolute top-0 h-px w-[calc(var(--w)*.95)] bg-border [--w:100vw] 2xl:[--w:--max-w]' />
      <Bg />
    </section>
  );
};

export default ProjectViewHeroSection;
