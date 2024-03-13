import { businessInfoApi } from '@/api/';
import { Image, Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = async ({ className, ...props }) => {
  const logo = (await businessInfoApi.get('?populate=logo')).data?.logo;

  return (
    <Link
      className={cn('h-10 rounded-sm', className)}
      href='/'
      {...props}
    >
      <Image
        className='size-full object-cover'
        {...logo?.data}
      />
    </Link>
  );
};

export default Root;
