import { Image, Link } from '@/components/ui';
import LogoImage from '../../../../public/images/logo.webp';
import { cn } from '@/utils';

const Root = async ({ className, ...props }) => {
  return (
    <Link
      className={cn('h-14 rounded-sm overflow-hidden', className)}
      href='/'
      {...props}
    >
      <Image
        className='size-full object-cover'
        src={LogoImage}
        alt='Logo'
      />
    </Link>
  );
};

export default Root;
