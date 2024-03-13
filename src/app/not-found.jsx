import { pagesApi } from '@/api';
import { NotFoundView } from '@/views';

const NotFoundPage = async () => {
  const { data } = await pagesApi.getOne(
    'not-found',
    '&populate[sections][populate]=actions',
  );

  return <NotFoundView data={data} />;
};

export default NotFoundPage;
