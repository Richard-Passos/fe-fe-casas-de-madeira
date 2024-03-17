import { apiNormData, apiNormImg } from '@/api/utils';

const projectsApiGetOne = async (id, pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/projects/${id}${pathname}`,
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

  const { data } = await res.json();

  return _projectsApiGetOneNormalizeData(data);
};

const _projectsApiGetOneNormalizeData = (data) => {
  const normalizedData = apiNormData(data);

  const thumbnail = apiNormImg(normalizedData.data.thumbnail?.data);

  const { images } = normalizedData.data;

  if (images) images.data = images.data.map(apiNormImg);

  return { ...normalizedData, data: { ...normalizedData.data, thumbnail } };
};

export default projectsApiGetOne;
