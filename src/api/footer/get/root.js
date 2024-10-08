import { apiNormData } from '@/api/utils';

const footerApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/footer${pathname}`,
    {
      cache: 'no-store',
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const { data } = await res.json();

  return apiNormData(data);
};

export default footerApiGet;
