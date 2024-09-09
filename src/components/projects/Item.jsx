import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const ProjectsItem = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={cn(
        'flex flex-col items-center gap-2 h-fit sm:even:mt-lg sm:[&:not(:last-child)]:even:-mb-lg',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsItem;
