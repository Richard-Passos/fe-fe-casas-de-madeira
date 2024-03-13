import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const ProjectsAction = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      tabIndex={-1}
      className={cn(
        'absolute bottom-0 translate-y-full opacity-0 transition-[transform,opacity] duration-300 group-hover:-translate-y-sm group-hover:opacity-100 max-sm:hidden',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsAction;
