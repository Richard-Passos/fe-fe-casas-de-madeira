import { apiNormData } from '@/api/utils';

const businessInfoApiGetContact = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/business-info${pathname}`,
    {
      cache: 'no-store',
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  const { email, phones = [] } =
  apiNormData((await res.json()).data)?.data || {};
  
  
  const data = [
    {
      href: `mailto:${email}`,
      title: 'Email',
      description: email,
    },
    ...phones.map((phone) => ({
      href: `https://wa.me/${phone.description.replace(/\D/g, '')}`,
    title: phone.title,
    description: phone.description
  }))
  ];

  return { data };
};

export default businessInfoApiGetContact;
