import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const WhyUsTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('text-2xl uppercase', className)}
      {...props}
    />
  );
};

export default WhyUsTitle;
