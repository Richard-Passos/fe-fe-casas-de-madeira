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
    businessInfo = (await businessInfoApi.get('?populate=phones')).data;

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
      <header className='mb-lg flex w-full items-center justify-between gap-md max-sm:flex-col sm:items-end'>
        <Text.Title
          className='relative whitespace-pre-line max-sm:text-center'
          variants={{ size: 'lg' }}
        >
          {data.title?.split(' ').join(`\n`)}

          <span className='absolute bottom-0 left-1/2 h-[.075em] w-1/4 translate-y-xs rounded-full bg-primary max-sm:-translate-x-1/2 sm:left-0' />
        </Text.Title>

        <Text className='text-muted-content first-letter:uppercase max-sm:text-center sm:max-w-md'>
          {data.description}
        </Text>
      </header>

      <Projects>

      
        {projects?.map(({ id, data }) => (
          <Projects.Item
            key={`Project ${id}`}
          >
            <Projects.Link
              className='bg-main'
              href={`https://wa.me/${businessInfo.phones?.[0]?.description?.replace(/\D/g, '')}`}
              >
              <Projects.Image {...data.thumbnail?.data} />

              <Projects.Action asChild>
              <Button>{contactAct.label}</Button>
              </Projects.Action>
            </Projects.Link>

            <Projects.Title>{data.title}</Projects.Title>

            <Projects.Description>{data.summary}</Projects.Description>
          </Projects.Item>
        ))}
</Projects>
 
      <Bg className='bg-muted' />
    </section>
  );
};

export default HomeViewWorkSection;
