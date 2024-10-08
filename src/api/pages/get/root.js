import { apiNormArr, apiNormImg } from '@/api/utils';

const pagesApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/pages${pathname}`,
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

  const resData = await res.json();

  const data = apiNormArr(resData, [], _pagesApiGetNormalizeData);

  return data;
};

const _pagesApiGetNormalizeData = (data) => {
  const sections = data.data?.sections.map((section) => ({
    ...section,
    image: apiNormImg(section.image.data),
  }));

  return { ...data, data: { ...data.data, sections } };
};

export default pagesApiGet;
