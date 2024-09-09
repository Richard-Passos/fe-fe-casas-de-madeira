import { apiNormData } from '@/api/utils';

const toastsApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/toast${pathname}`,
    {
      cache: 'no-store',
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  const { data } = await res.json();

  return apiNormData(data);
};

export default toastsApiGet;
