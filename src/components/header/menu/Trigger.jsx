import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { Button } from '../../ui';
import { MenuTrigger } from '../../ui/menu';

const HeaderMenuTrigger = (props) => {
  return (
    <MenuTrigger
      asChild
      {...props}
    >
      <Button
        className='aspect-square rounded-sm px-0 sm:hidden'
        variants={{ size: 'sm', color: 'inverted', style: 'ghost' }}
      >
        <HamburgerMenuIcon className='size-2/3' />
      </Button>
    </MenuTrigger>
  );
};

export default HeaderMenuTrigger;
