import { cn } from '@/utils';

const WhyUs = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid gap-md sm:grid-cols-3', className)}
      {...props}
    />
  );
};

export default WhyUs;
