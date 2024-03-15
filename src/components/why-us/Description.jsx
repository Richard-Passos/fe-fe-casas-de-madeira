import { cn } from '@/utils';

import { Text } from '../ui/text';

const WhyUsDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'text-sm leading-relaxed text-muted-content first-letter:uppercase max-sm:text-center',
        className,
      )}
      {...props}
    />
  );
};

export default WhyUsDescription;
