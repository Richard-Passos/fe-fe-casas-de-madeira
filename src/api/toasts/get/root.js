import { apiNormData } from '@/api/utils';

const toastsApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/toast${pathname}`,
    {
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  const { data } = await res.json();

  return apiNormData(data);
};

export default toastsApiGet;
