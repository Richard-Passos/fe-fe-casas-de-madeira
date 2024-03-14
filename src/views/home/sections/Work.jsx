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
      <Text.Title
        className='relative mb-lg mr-auto h-fit max-w-screen-sm'
        variants={{ size: 'lg' }}
      >
        {data.title}
        <span className='absolute bottom-0 left-0 h-[.075em] w-1/4 translate-y-[400%] rounded-full bg-primary' />
      </Text.Title>

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
            className='bg-main text-main'
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
