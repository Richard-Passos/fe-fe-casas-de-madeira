import WhyUsDescription from './Description';
import WhyUsItem from './Item';
import WhyUsNumber from './Number';
import WhyUsRoot from './Root';
import WhyUsSeparator from './Separator';
import WhyUsTitle from './Title';

const WhyUs = WhyUsRoot;

WhyUs.Description = WhyUsDescription;
WhyUs.Item = WhyUsItem;
WhyUs.Number = WhyUsNumber;
WhyUs.Separator = WhyUsSeparator;
WhyUs.Title = WhyUsTitle;

export default WhyUs;
export {
  WhyUsRoot as WhyUs,
  WhyUsDescription,
  WhyUsItem,
  WhyUsNumber,
  WhyUsSeparator,
  WhyUsTitle,
};
