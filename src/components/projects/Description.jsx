import { cn } from '@/utils';

import { Text } from '../ui/text';

const ProjectsDescription = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'px-sm pb-sm text-center text-sm font-medium text-muted-content',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsDescription;
