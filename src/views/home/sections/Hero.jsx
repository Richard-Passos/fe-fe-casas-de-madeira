import { businessInfoApi } from '@/api';
import { Bg } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Button, Image, Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeViewHeroSection = async ({
  theme,
  className,
  data = {},
  ...props
}) => {
  const businessInfo = (await businessInfoApi.get(`?populate=socials`)).data,
    contactInfo = (await businessInfoApi.getContact()).data;

  const [contactAct] = data?.actions || [];

  const animationConfig = {
    useScrollConfig: {
      offset: ['0 0', '1 0'],
    },
    propPoints: ['0%', '40%'],
  };

  return (
    <section
      className={cn(
        'relative -mt-[--header-h] flex w-full items-center justify-center pb-lg pt-[calc(var(--header-h)+theme(spacing.lg))] max-2xl:min-h-svh',
        theme,
        className,
      )}
      {...props}
    >
      <div className='flex w-9/10 max-w-screen-xl flex-col max-sm:items-center lg:mt-xl'>
        <Text className='font-medium max-sm:hidden sm:mb-lg sm:max-w-xl sm:text-2xl'>
          {data.subtitle}
        </Text>

        <Text.Title
          asChild
          className='mb-sm max-sm:text-center sm:mb-lg'
          variants={{ size: 'xl' }}
        >
          <h1>{data.title}</h1>
        </Text.Title>

        <Text className='mb-md max-sm:text-center sm:max-w-xl sm:text-2xl/relaxed sm:font-medium'>
          {data.description}
        </Text>

        <Button className='sm:hidden'>
          <Link
            className='hover:no-underline'
            href={`https://wa.me/${businessInfo.phone.replace(/\D/g, '')}`}
          >
            {contactAct.label}
          </Link>
        </Button>

        <section className='ml-auto grid w-fit gap-x-md gap-y-sm max-sm:mx-auto max-sm:hidden sm:grid-cols-2'>
          <nav className='flex h-fit flex-col items-start gap-2 justify-self-end'>
            {contactInfo?.map((data) => (
              <Link
                className='text-sm'
                href={data.href}
                key={data.href}
              >
                {data.description}
              </Link>
            ))}
          </nav>

          <nav className='flex h-fit flex-col items-start gap-2 justify-self-start'>
            {businessInfo.socials?.map((data) => (
              <Link
                className='text-sm'
                href={data.href}
                key={data.href}
              >
                {data.label}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <ScrollAnimationTransform config={animationConfig}>
          <Image
            className='size-full object-cover object-top'
            priority
            {...data.image?.data}
          />
        </ScrollAnimationTransform>

        <span className='absolute inset-0 bg-gradient-to-b from-main/10 to-main/50' />
      </div>

      <Bg className='bg-inverted' />
    </section>
  );
};

export default HomeViewHeroSection;
