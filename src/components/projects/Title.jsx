import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const ProjectsTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn(
        'px-sm text-center text-2xl lowercase first-letter:uppercase',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsTitle;
