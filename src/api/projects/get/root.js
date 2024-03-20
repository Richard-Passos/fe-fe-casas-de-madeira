import { apiNormArr, apiNormImg } from '@/api/utils';

const projectsApiGet = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/projects${pathname}`,
    {
      ...opts,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        ...opts.headers,
      },
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const resData = await res.json();

  const data = apiNormArr(resData, ['extras'], _projectsApiGetNormalizeData);

  return data;
};

const _projectsApiGetNormalizeData = (data) => {
  const { images } = data.data;

  if (images) images.data = images.data.map(apiNormImg);

  const href = `/work/${data.id}`,
    thumbnail = apiNormImg(data.data.thumbnail?.data);

  return { ...data, data: { ...data.data, href, thumbnail } };
};

export default projectsApiGet;
