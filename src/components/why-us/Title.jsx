import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const WhyUsTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('text-2xl first-letter:uppercase lowercase max-sm:text-center', className)}
      {...props}
    />
  );
};

export default WhyUsTitle;
