import { Button, Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const NotFoundHeroSection = ({ data = {}, className, ...props }) => {
  const [backHomeAct = {}] = data?.actions ? data.actions : [];

  return (
    <section
      className={cn(
        'flex min-h-svh w-9/10 max-w-screen-xl -translate-y-[--header-h] flex-col items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-2 text-center'
      >
        <h1>{data.title}</h1>
      </Text.Title>

      <Text className='mb-4 text-center text-2xl font-semibold first-letter:uppercase'>
        {data.subtitle}
      </Text>

      <Text className='mb-md max-w-xl text-center text-muted-content first-letter:uppercase'>
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

      <span className='absolute top-0 h-px w-[calc(var(--w)*.95)] bg-border [--w:100vw] 2xl:[--w:--max-w]' />
    </section>
  );
};

export default NotFoundHeroSection;
