'use client';

import { useContext } from 'react';
import YetLightbox from 'yet-another-react-lightbox';
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import { LightBoxContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const LightBox = (props) => {
  const { state, setState } = useContext(LightBoxContext);

  return (
    <YetLightbox
      index={state.activeIdx}
      open={state.isOpen}
      plugins={[Fullscreen, Thumbnails, Zoom]}
      {...props}
      close={(ev) => {
        setState({ isOpen: false, activeIdx: 0 });
        isFunctionThanCall(props.onClose, ev);
      }}
    />
  );
};

export default LightBox;
