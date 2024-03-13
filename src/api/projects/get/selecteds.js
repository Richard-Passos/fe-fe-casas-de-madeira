import { apiNormArr, apiNormImg } from '@/api/utils';

const projectsApiGetSelecteds = async (pathname = '', opts = {}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/api/projects?filters[isSelected][$eq]=true${pathname}`,
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

  const resData = await res.json();

  const data = apiNormArr(resData, [], _projectsApiGetSelectedsNormalizeData);

  return data;
};

const _projectsApiGetSelectedsNormalizeData = (data) => {
  const href = `/work/${data.id}`,
    thumbnail = apiNormImg(data.data.thumbnail?.data);

  return { ...data, data: { ...data.data, href, thumbnail } };
};

export default projectsApiGetSelecteds;
