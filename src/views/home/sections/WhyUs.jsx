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
      <header className='mb-lg flex w-full items-center justify-between gap-md max-sm:flex-col sm:items-end'>
        <Text.Title
          className='relative whitespace-pre-line max-sm:text-center'
          variants={{ size: 'lg' }}
        >
          {data.title?.split(' ').join(`\n`)}

          <span className='absolute bottom-0 left-1/2 h-[.075em] w-1/4 translate-y-xs rounded-full bg-primary max-sm:-translate-x-1/2 sm:left-0' />
        </Text.Title>

        <Text className='text-muted-content first-letter:uppercase max-sm:text-center sm:max-w-md'>
          {data.description}
        </Text>
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
