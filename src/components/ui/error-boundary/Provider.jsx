import { pagesApi } from '@/api';
import { ErrorProvider } from '@/contexts';

const ErrorBoundaryProvider = async ({ value, ...props }) => {
  const data = await pagesApi.getOne('error', '&populate[sections][populate]=actions')

  return (
    <ErrorProvider
    value={{...data, ...value}}
      {...props}
    />
  );
};

export default ErrorBoundaryProvider;