import { pagesApi } from '@/api';
import { HomeView } from '@/views';

const HomePage = async () => {
  const { data } = await pagesApi.getOne(
    'home',
    '&populate[sections][populate]=image&populate[sections][populate]=actions&populate[sections][populate]=links&populate[sections][populate]=items',
  );

  return <HomeView data={data} />;
};

export default HomePage;
