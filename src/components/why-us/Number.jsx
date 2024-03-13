import { cn } from '@/utils';

import { Text } from '../ui/text';

const WhyUsNumber = ({ className, index, ...props }) => {
  return (
    <Text
      className={cn(
        'mr-auto text-xs font-semibold text-muted-content',
        className,
      )}
      {...props}
    >
      · {`${index + 1}`.padStart(2, '0')}
    </Text>
  );
};

export default WhyUsNumber;
