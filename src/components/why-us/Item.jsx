import { cn } from '@/utils';

const WhyUsItem = ({ className, ...props }) => {
  return (
    <li
      className={cn('flex flex-col gap-4 max-sm:items-center', className)}
      {...props}
    />
  );
};

export default WhyUsItem;
