import { cn } from '@/utils';

import { Image } from '../ui';

const ProjectsImage = ({ className, ...props }) => {
  return (
    <Image
      className={cn(
        'size-full object-cover transition-transform duration-300 group-hover:scale-105',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsImage;
