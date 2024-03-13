import { cn } from '@/utils';

const Projects = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid gap-md sm:grid-cols-2 md:grid-cols-3', className)}
      {...props}
    />
  );
};

export default Projects;
