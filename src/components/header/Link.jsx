'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { NavigationMenuLink } from '../ui/navigation-menu';

const HeaderLink = ({ isActive, className, children, ...props }) => {
  return (
    <NavigationMenuLink
      className={cn(
        'relative z-10 flex h-10 items-center justify-center rounded-sm px-4 font-medium transition-none',
        className,
      )}
      {...props}
    >
      <span className='first-letter:uppercase lowercase'>{children}</span>

      {isActive && (
        <motion.span
          className={cn('absolute bottom-1 h-[.15em] w-1/4 bg-primary')}
          layoutId='headerLinkActiveIndicator'
          style={{ borderRadius: '9999px' }}
          transition={{
            type: 'spring',
            ...smoothConfig,
          }}
        />
      )}
    </NavigationMenuLink>
  );
};

export default HeaderLink;
