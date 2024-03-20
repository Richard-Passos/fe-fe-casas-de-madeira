import { apiNormData } from '@/api/utils';

const businessInfoApiGetContact = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/business-info${pathname}`,
    {
      cache: 'no-store',
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  const { email, phone = '' } =
    apiNormData((await res.json()).data)?.data || {};

  const data = [
    {
      href: `malto:${email}`,
      title: 'Email',
      description: email,
    },
    {
      href: `https://wa.me/${phone.replace(/\D/g, '')}`,
      title: 'Telefone',
      description: phone,
    },
  ];

  return { data };
};

export default businessInfoApiGetContact;
