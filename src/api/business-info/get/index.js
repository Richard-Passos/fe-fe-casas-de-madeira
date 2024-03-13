import businessInfoApiGetContact from './contact';
import businessInfoApiGetRoot from './root';

const businessInfoApiGet = {
  get: businessInfoApiGetRoot,
  getContact: businessInfoApiGetContact,
};

export default businessInfoApiGet;
export {
  businessInfoApiGetRoot as businessInfoApiGet,
  businessInfoApiGetContact,
};
