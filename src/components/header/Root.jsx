import { pagesApi } from '@/api';
import { cn } from '@/utils';

import { Logo } from '../ui';
import Nav from './Nav';
import Menu from './menu';

const HEADER_SECTIONS_PT = {
  hero: { label: 'Início', href: '/' },
  work: { label: 'Trabalhos', href: '/#work' },
  process: { label: 'Método', href: '/#process' },
  contact: { label: 'Contato', href: '#contact' },
};

const Header = async ({ className, ...props }) => {
  const { sections } = (await pagesApi.getOne('home', '&populate=sections'))
    .data;

  const navItems = sections
    ?.map(({ name }) => HEADER_SECTIONS_PT[name.toLowerCase()])
    .filter((section) => section?.label);

  navItems?.push(HEADER_SECTIONS_PT['contact']);

  return (
    <header
      className={cn(
        'relative z-10 mx-auto flex h-[--header-h] w-9/10 max-w-[calc(var(--max-w)*.9)] flex-wrap items-center justify-between',
        className,
      )}
      {...props}
    >
      <Logo className='transition-none' />

      <Nav
        className='-mr-4 max-sm:hidden'
        items={navItems}
      />

      <Menu />
    </header>
  );
};

export default Header;
export { HEADER_SECTIONS_PT };
