'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { NavigationMenuLink } from '../../ui/navigation-menu';

const HeaderMenuLink = ({ isActive, className, children, ...props }) => {
  return (
    <NavigationMenuLink
      className={cn(
        'relative flex w-full items-center justify-start rounded-sm px-6 py-3 text-2xl font-medium',
        className,
      )}
      {...props}
    >
      <span className='lowercase first-letter:uppercase'>{children}</span>

      {isActive && (
        <motion.span
          className={cn('absolute left-1 h-1/3 w-[.15em] bg-primary')}
          layoutId='menuLinkActiveIndicator'
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

export default HeaderMenuLink;
