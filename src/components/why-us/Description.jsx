import { cn } from '@/utils';

import { Text } from '../ui/text';

const WhyUsDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn('text-sm leading-relaxed text-muted-content', className)}
      {...props}
    />
  );
};

export default WhyUsDescription;
