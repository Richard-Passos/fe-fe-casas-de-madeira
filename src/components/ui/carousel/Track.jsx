'use client';

import { SplideTrack } from '@splidejs/react-splide';

import { cn } from '@/utils';

const CarouselTrack = ({ className, ...props }) => {
  return (
    <SplideTrack
      className={cn(
        'w-full cursor-grab !overflow-x-clip !overflow-y-visible active:cursor-grabbing',
        className,
      )}
      {...props}
    />
  );
};

export default CarouselTrack;
