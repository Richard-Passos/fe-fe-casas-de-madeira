import { Bg, WhyUs } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeViewWhyUsSection = ({ theme, className, data = {}, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-9/10 max-w-screen-lg flex-col items-center justify-center py-lg max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds',
        theme,
        className,
      )}
      {...props}
    >
      <header className='mb-lg w-full flex gap-md max-sm:flex-col items-center sm:items-end justify-between'>
        <Text.Title
          className='relative max-sm:text-center whitespace-pre-line'
          variants={{ size: 'lg' }}
        >
          {data.title?.split(' ').join(`\n`)}

          <span className='absolute bottom-0 left-1/2 sm:left-0 max-sm:-translate-x-1/2 h-[.075em] w-1/4 translate-y-xs rounded-full bg-primary' />
        </Text.Title>

          <Text className='sm:max-w-md text-muted-content max-sm:text-center first-letter:uppercase'>{data.description}</Text>


      </header>

      <WhyUs>
        {data.items?.map((data, i) => (
          <WhyUs.Item key={data.title}>
            <WhyUs.Number index={i} />

            <WhyUs.Separator />

            <WhyUs.Title>{data.title}</WhyUs.Title>

            <WhyUs.Description>{data.description}</WhyUs.Description>
          </WhyUs.Item>
        ))}
      </WhyUs>

      <Bg />
    </section>
  );
};

export default HomeViewWhyUsSection;
