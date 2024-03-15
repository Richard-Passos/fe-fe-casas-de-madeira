import { cn } from '@/utils';

const WhyUsItem = ({ className, ...props }) => {
  return (
    <li
      className={cn('flex flex-col max-sm:items-center gap-4', className)}
      {...props}
    />
  );
};

export default WhyUsItem;
