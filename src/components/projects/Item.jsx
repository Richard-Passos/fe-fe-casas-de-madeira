import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const ProjectsItem = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={cn(
        'flex flex-col items-center gap-2 sm:max-md:even:mt-lg sm:max-md:[&:not(:last-child)]:even:-mb-lg md:[&:nth-child(3n+2)]:-mb-lg md:[&:nth-child(3n+2)]:mt-lg md:[&:nth-last-child(2)]:mb-0',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsItem;
