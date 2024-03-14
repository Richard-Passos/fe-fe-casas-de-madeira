'use client';

import { useEffect, useState } from 'react';

import { pagesApi } from '@/api';
import { ErrorView } from '@/views';

const ErrorPage = ({ ...props }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const handleSetData = async () => {
      const res = (await pagesApi.getOne('error', '&populate=sections')).data;

      setData(res);
    };

    handleSetData();
  });

  return (
    <ErrorView
      data={data}
      {...props}
    />
  );
};

export default ErrorPage;
