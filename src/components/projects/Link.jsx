import { cn } from '@/utils';

import { Link } from '../ui';

const ProjectsLink = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'group relative mb-4 aspect-[1/1.4] w-full overflow-hidden rounded-md bg-muted',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsLink;
