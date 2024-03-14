import { Cross2Icon } from '@radix-ui/react-icons';

import { pagesApi } from '@/api';
import { contact, personalInfo } from '@/constants';
import { cn } from '@/utils';

import { Button, Link } from '../../ui';
import { MenuClose, MenuContent } from '../../ui/menu';
import { TextSubtitle } from '../../ui/text';
import { HEADER_SECTIONS_PT } from '../Root';
import Nav from './Nav';

const HeaderMenuContent = async ({ className, ...props }) => {
  const { sections } = (await pagesApi.getOne('home', '&populate=sections'))
    .data;

  const navItems = sections
    ?.map(({ name }) => HEADER_SECTIONS_PT[name.toLowerCase()])
    .filter((section) => section?.label);

  navItems?.push(HEADER_SECTIONS_PT['contact']);

  return (
    <MenuContent
      className={cn(
        'dark flex flex-col items-center gap-6 space-y-0 p-0',
        className,
      )}
      {...props}
    >
      <div className='flex h-[--header-h] w-9/10 shrink-0 items-center justify-end border-b'>
        <MenuClose asChild>
          <Button
            className='aspect-square rounded-sm px-0'
            variants={{ size: 'sm', color: 'inverted', style: 'ghost' }}
          >
            <Cross2Icon className='size-2/3' />
          </Button>
        </MenuClose>
      </div>

      <Nav
        items={navItems}
        className='mb-md'
      />

      <section className='!mt-auto w-full px-sm pb-sm'>
        <ul className='mb-8 flex flex-col items-start gap-4'>
          {contact.map(({ title, href, data }) => (
            <li key={href}>
              <TextSubtitle className='mb-1 text-xs uppercase text-muted-content'>
                {title}
              </TextSubtitle>

              <Link
                className='text-sm'
                href={href}
              >
                {data}
              </Link>
            </li>
          ))}
        </ul>

        <nav className='grid grid-cols-3 place-items-center gap-4'>
          {personalInfo.socials.map((social) => (
            <Link
              className='text-sm'
              href={social.href}
              key={social.href}
            >
              {social.name}
            </Link>
          ))}
        </nav>
      </section>
    </MenuContent>
  );
};

export default HeaderMenuContent;
