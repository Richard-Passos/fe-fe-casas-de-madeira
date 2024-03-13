import { Portal } from '@/components/ui';

import { Menu, MenuOverlay } from '../../ui/menu';
import Content from './Content';
import Trigger from './Trigger';

const HeaderMenu = (props) => {
  return (
    <Menu {...props}>
      <Trigger />

      <Portal>
        <MenuOverlay />

        <Content />
      </Portal>
    </Menu>
  );
};

export default HeaderMenu;
