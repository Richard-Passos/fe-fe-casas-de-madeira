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
      <header className='mb-lg grid gap-md sm:grid-cols-2'>
        <Text.Title
          className='relative h-fit'
          variants={{ size: 'lg' }}
        >
          {data.title}
          <span className='absolute bottom-0 left-0 h-[.075em] w-1/4 translate-y-[400%] rounded-full bg-primary' />
        </Text.Title>

        <Text className='self-end text-muted-content'>{data.description}</Text>
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
