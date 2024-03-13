import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

import { Button, Carousel, Image, LightBox } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewImagesSection = async ({
  promise,
  className,
  options,
  ...props
}) => {
  const { data } = (await promise).data.images;

  return (
    <LightBox.Provider>
      <Carousel
        className={cn('flex w-full flex-col items-center pb-lg', className)}
        options={{
          rewind: true,
          rewindByDrag: true,
          slideFocus: true,
          ...options,
        }}
        {...props}
      >
        <section className='flex w-9/10 max-w-screen-xl items-center gap-sm'>
          <Carousel.ActiveIdx
            className='shrink-0'
            itemsLength={data.length}
          />

          <Carousel.Progress variants={{ size: 'sm' }}>
            <Carousel.Progress.Indicator />
          </Carousel.Progress>

          <Carousel.Actions>
            <ProjectViewImagesSectionCarouselAciton type='prev'>
              <ArrowLeftIcon />
            </ProjectViewImagesSectionCarouselAciton>

            <ProjectViewImagesSectionCarouselAciton type='next'>
              <ArrowRightIcon />
            </ProjectViewImagesSectionCarouselAciton>
          </Carousel.Actions>
        </section>

        <Carousel.Track>
          {data.map(({ id, data }, i) => (
            <LightBox.Item
              index={i}
              key={`Image ${id}`}
            >
              <Carousel.Item
                className='aspect-video w-9/10 max-w-screen-md bg-muted'
                index={i}
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  className='size-full object-cover'
                  {...data}
                />
              </Carousel.Item>
            </LightBox.Item>
          ))}
        </Carousel.Track>
      </Carousel>

      <LightBox slides={data.map(({ data }) => data)} />
    </LightBox.Provider>
  );
};

const ProjectViewImagesSectionCarouselAciton = ({
  className,
  variants,
  children,
  ...props
}) => {
  return (
    <Carousel.Action
      asChild
      {...props}
    >
      <Button
        className={cn(
          'aspect-square rounded-sm bg-muted px-0 text-content [--variant-a:--primary] hover:text-primary-content [&_svg]:size-[40%]',
          className,
        )}
        variants={{ color: 'main', size: 'sm', ...variants }}
      >
        {children}
      </Button>
    </Carousel.Action>
  );
};

export default ProjectViewImagesSection;
