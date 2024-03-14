'use client'

import { pagesApi } from '@/api';
import { ErrorView } from '@/views';
import { useEffect, useState } from 'react';

const ErrorPage = ({...props}) => {
  const [data, setData] = useState({})

useEffect(() => {
  const handleSetData = async () => {
    const res = (await pagesApi.get()).data
    console.log('-  res   -', res)

    setData(res)
  }

  handleSetData()
})

  return <ErrorView  data={data} {...props}/>
}

export default ErrorPage;
