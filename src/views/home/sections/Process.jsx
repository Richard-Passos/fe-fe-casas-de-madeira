import { Bg, ScrollAnimation } from '@/components';
import { Button, Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeViewProcessSection = ({ theme, className, data = {}, ...props }) => {
  const animationConfig = {
    opacity: {
      useScrollConfig: {
        offset: ['0 .75', '1 .75'],
      },
      useScrollRes: 'scrollYProgress',
      prop: 'opacity',
      scrollPoints: [0, 1],
      propPoints: [0.25, 1],
    },
    clipPath: {
      useScrollConfig: {
        offset: ['0 .75', '1 .75'],
      },
      useScrollRes: 'scrollYProgress',
      prop: 'clipPath',
      scrollPoints: [0, 1],
      propPoints: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
    },
  };

  return (
    <section
      className={cn(
        'relative flex w-9/10 max-w-screen-lg flex-col items-center justify-center py-lg max-2xl:min-h-screen',
        theme,
        className,
      )}
      {...props}
    >
      <header className='col-span-full mb-lg grid gap-md sm:grid-cols-2'>
        <Text.Title
          className='relative h-fit'
          variants={{ size: 'lg' }}
        >
          {data.title}
          <span className='absolute bottom-0 left-0 h-[.075em] w-1/4 translate-y-[400%] rounded-full bg-primary' />
        </Text.Title>

        <Text className='self-end text-muted-content'>{data.description}</Text>
      </header>

      <ul className='relative grid w-full max-w-md gap-lg'>
        {data.items?.map((data, i) => (
          <li
            className='group relative flex items-center gap-sm sm:max-w-lg sm:gap-md'
            key={data.title}
          >
            <div className='relative flex size-28 shrink-0 items-center justify-center rounded-full border bg-main text-lg font-bold'>
              {`${i + 1}`.padStart(2, '0')}

              <ScrollAnimation config={animationConfig.clipPath}>
                <div className='absolute inset-0 flex items-center justify-center rounded-inherit bg-primary text-primary-content'>
                  {`${i + 1}`.padStart(2, '0')}
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation config={animationConfig.opacity}>
              <div className='flex flex-col items-start justify-center'>
                <Text.Subtitle className='mb-1 text-xl'>
                  {data.title}
                </Text.Subtitle>

                <Text className='text-muted-content'>{data.description}</Text>

                {data.action && (
                  <Button
                    asChild
                    className='mt-6 hover:no-underline'
                    variants={{ size: 'sm' }}
                  >
                    <Link {...data.action} />
                  </Button>
                )}
              </div>
            </ScrollAnimation>

            <span className='absolute left-0 -z-10 h-1/2 w-28 bg-main group-first:top-0 group-last-of-type:bottom-0' />
          </li>
        ))}

        <div
          aria-hidden
          className='absolute left-14 top-0 -z-20 h-full w-2 -translate-x-1/2 border-x'
        >
          <ScrollAnimation config={animationConfig.clipPath}>
            <span className='size-full bg-primary' />
          </ScrollAnimation>
        </div>
      </ul>

      <Bg />
    </section>
  );
};

export default HomeViewProcessSection;
