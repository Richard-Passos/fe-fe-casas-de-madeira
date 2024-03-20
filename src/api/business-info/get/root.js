import { apiNormData, apiNormImg } from '@/api/utils';

const businessInfoApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/business-info${pathname}`,
    {
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  const { data } = await res.json();

  return _businessInfoApiGetNormalizeData(data);
};

const _businessInfoApiGetNormalizeData = (data) => {
  const normalizedData = apiNormData(data) || {};

  const logo = apiNormImg(normalizedData.data?.logo?.data);

  return { ...normalizedData, data: { ...normalizedData.data, logo } };
};

export default businessInfoApiGet;
