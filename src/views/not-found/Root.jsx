import { Button, Link, Text } from '@/components/ui';

const NotFoundView = ({ data = {} }) => {
  data = data.sections?.[0] || {};

  const [backHomeAct] = data.actions || [{}];

  return (
    <main className='flex min-h-[calc(100svh-var(--header-h))] w-full max-w-bounds flex-col items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]'>
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-2 w-9/10 text-center font-bold'
      >
        <h1>{data.title}</h1>
      </Text.Title>

      <Text className='mb-4 w-9/10 text-center text-2xl font-semibold'>
        {data.subtitle}
      </Text>

      <Text className='mb-md w-9/10 max-w-xl text-center text-muted-content'>
        {data.description}
      </Text>

      <Button asChild>
        <Link
          href='/'
          className='hover:no-underline'
        >
          {backHomeAct.label}
        </Link>
      </Button>

      <span className='' />
    </main>
  );
};

export default NotFoundView;
