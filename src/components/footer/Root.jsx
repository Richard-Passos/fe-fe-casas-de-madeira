import { businessInfoApi } from '@/api';
import footerApi from '@/api/footer';
import { cn } from '@/utils';

import Bg from '../bg';
import { Button, Link, Logo, Text } from '../ui';

const Footer = async ({ className, ...props }) => {
  const businessInfo = (
      await businessInfoApi.get('?populate=socials&populate=openingHours')
    ).data,
    contactInfo = (await businessInfoApi.getContact()).data,
    data = (await footerApi.get('?populate=*')).data || {};

  const [backTopAct = {}] = data.actions;

  return (
    <footer
      className={cn(
        'light relative flex w-full max-w-bounds flex-col items-center justify-between pt-lg',
        className,
      )}
      {...props}
    >
      <div className='relative mb-lg aspect-video w-9/10'>
        <iframe
          allowFullScreen=''
          className='relative z-10 size-full'
          height='450'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          src={businessInfo.location}
          title='Location'
          width='600'
        />

        <span className='absolute -top-lg bottom-1/2 left-1/2 w-screen -translate-x-1/2 bg-main' />
      </div>

      <div
        className='mb-lg grid w-9/10 max-w-screen-lg gap-md sm:grid-cols-3'
        id='contact'
      >
        <div className='flex flex-col items-start'>
          <Logo className='mb-2' />

          <Text className='mb-sm max-w-80 text-sm text-muted-content first-letter:uppercase'>
            {businessInfo.summary}
          </Text>

          <Button
            asChild
            className='w-fit'
            variants={{ size: 'sm' }}
          >
            <Link
              className='hover:no-underline'
              href='#top'
            >
              {backTopAct.label}
            </Link>
          </Button>
        </div>

        <section className='sm:justify-self-center'>
          <Text.Subtitle className='mb-sm text-2xl first-letter:uppercase lowercase'>
            {data.items?.[0]?.title}
          </Text.Subtitle>

          <ul className='mb-8 flex flex-col items-start gap-4 sm:justify-self-end'>
            {contactInfo?.map((data) => (
              <li key={data.href}>
                <Text.Subtitle
                  asChild
                  className='mb-1 text-xs uppercase text-muted-content'
                >
                  <h4>{data.title}</h4>
                </Text.Subtitle>

                <Link
                  className='text-sm'
                  href={data.href}
                >
                  {data.description}
                </Link>
              </li>
            ))}
          </ul>

          <nav className='grid gap-4'>
            {businessInfo.socials?.map((data) => (
              <Link
                className='w-fit text-sm inline-block first-letter:uppercase lowercase'
                href={data.href}
                key={data.href}
              >
                {data.label}
              </Link>
            ))}
          </nav>
        </section>

        <section className='sm:justify-self-center'>
          <Text.Subtitle className='mb-sm text-2xl first-letter:uppercase lowercase'>
            {data.items?.[1]?.title}
          </Text.Subtitle>

          <ul className='mb-8 flex flex-col items-start gap-4 sm:justify-self-end'>
            {businessInfo.openingHours?.map((data) => (
              <li key={data.title}>
                <Text.Subtitle
                  asChild
                  className='mb-1 text-xs uppercase text-muted-content'
                >
                  <h4>{data.title}:</h4>
                </Text.Subtitle>

                <Text className='text-sm font-medium first-letter:uppercase'>{data.description}</Text>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className='flex w-9/10 gap-2 border-t p-sm max-sm:flex-col max-sm:items-center sm:justify-between'>
        <Text.Small>&copy; 2024 {businessInfo.name}</Text.Small>

        <Text.Small>
          Feito com ♥ por{' '}
          <Link href='https://richard-passos.vercel.app'>Richard</Link>
        </Text.Small>
      </div>

      <Bg className='bg-muted' />
    </footer>
  );
};

export default Footer;
