import { apiNormData, apiNormImg } from '@/api/utils';

const pagesApiGetOne = async (name = '', pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/pages?filters[name][$eqi]=${name.replace(/[-_]/g, ' ')}${pathname}`,
    {
      cache: 'no-store',
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        ...opts.headers,
      },
    },
  );
  
  if (!res.ok) throw new Error('Failed to fetch data');

  const data = (await res.json()).data?.[0];

  return _pagesApiGetOneNormalizeData(data);
};

const _pagesApiGetOneNormalizeData = (data) => {
  const normalizedData = apiNormData(data) || {};

  const sections = normalizedData.data?.sections?.map((section) => ({
    ...section,
    image: apiNormImg(section.image?.data),
  }));

  return { ...normalizedData, data: { ...normalizedData.data, sections } };
};

export default pagesApiGetOne;
