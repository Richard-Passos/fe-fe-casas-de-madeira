import { cn } from '@/utils';

import { Separator } from '../ui';

const WhyUsSeparator = ({ className, ...props }) => {
  return (
    <Separator
      className={cn('mb-4', className)}
      {...props}
    />
  );
};

export default WhyUsSeparator;
