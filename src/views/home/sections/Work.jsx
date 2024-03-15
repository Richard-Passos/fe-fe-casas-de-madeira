import { PlusIcon } from '@radix-ui/react-icons';

import { businessInfoApi, projectsApi } from '@/api';
import { Bg, Projects } from '@/components';
import { Button, Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeViewWorkSection = async ({
  theme,
  className,
  data = {},
  ...props
}) => {
  const projects = (await projectsApi.getSelecteds('&populate=thumbnail')).data,
    businessInfo = (await businessInfoApi.get()).data;

  const [seeMoreAct = {}, contactAct = {}] = data?.actions;

  const lastItem = {
    ...data.items?.at(-1),
    thumbnail: projects?.at(-1).data.thumbnail,
  };

  return (
    <section
      className={cn(
        'relative flex w-9/10 max-w-screen-lg flex-col items-center justify-center py-lg',
        theme,
        className,
      )}
      {...props}
    >
      <header className='mb-lg w-full flex gap-md max-sm:flex-col items-center sm:items-end justify-between'>
        <Text.Title
          className='relative max-sm:text-center whitespace-pre-line'
          variants={{ size: 'lg' }}
        >
          {data.title?.split(' ').join(`\n`)}

          <span className='absolute bottom-0 left-1/2 sm:left-0 max-sm:-translate-x-1/2 h-[.075em] w-1/4 translate-y-xs rounded-full bg-primary' />
        </Text.Title>

          <Text className='sm:max-w-md text-muted-content max-sm:text-center first-letter:uppercase'>{data.description}</Text>


      </header>

      <Projects>
        {projects?.slice(0, projects.length - 1).map(({ id, data }, i, arr) => (
          <Projects.Item
            className={cn(i === arr.length - 1 && 'md:order-2 md:!mt-0')}
            key={`Project ${id}`}
          >
            <Projects.Link
              className='bg-main'
              href={data.href}
            >
              <Projects.Image {...data.thumbnail?.data} />

              <Projects.Action asChild>
                <Button>{seeMoreAct.label}</Button>
              </Projects.Action>
            </Projects.Link>

            <Projects.Title>{data.title}</Projects.Title>

            <Projects.Description>{data.summary}</Projects.Description>
          </Projects.Item>
        ))}

        <Projects.Item className='md:order-1 md:mt-lg'>
          <Projects.Link
            className='bg-main text-main focus-visible:outline-content'
            href={`https://wa.me/${businessInfo.phone.replace(/\D/g, '')}`}
          >
            <Projects.Image
              className='grayscale'
              {...lastItem.thumbnail?.data}
            />

            <PlusIcon className='absolute aspect-square h-auto w-1/6' />

            <Projects.Action asChild>
              <Button>{contactAct.label}</Button>
            </Projects.Action>
          </Projects.Link>

          <Projects.Title>{lastItem.title}</Projects.Title>

          <Projects.Description>{lastItem.description}</Projects.Description>
        </Projects.Item>
      </Projects>

      <Bg className='bg-muted' />
    </section>
  );
};

export default HomeViewWorkSection;
