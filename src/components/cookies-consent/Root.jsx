import { toastsApi } from '@/api';
import Toast from './Toast'

const CookiesConsent = async (props) => {
  const data = (await toastsApi.get('?populate=cookiesConsent')).data?.cookiesConsent

  return <Toast data={data} {...props}/>
};


export default CookiesConsent;