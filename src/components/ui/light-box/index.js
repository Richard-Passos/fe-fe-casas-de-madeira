import LightBoxItem from './Item';
import LightBoxProvider from './Provider';
import LightBoxRoot from './Root';

const LightBox = LightBoxRoot;

LightBox.Item = LightBoxItem;
LightBox.Provider = LightBoxProvider;

export default LightBox;
export { LightBoxRoot as LightBox, LightBoxItem, LightBoxProvider };
