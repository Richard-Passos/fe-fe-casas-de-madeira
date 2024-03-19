'use client'

const { useState } = require('react')

const useLocalStorage = (key, initVal) => {
  const [data, setData] = useState(getLocalStorage(key) || initVal);

  const handleSetData = (val) => {
    setLocalStorage(key, val)

    setData(val)
  }

  return [data, handleSetData]
}

const getLocalStorage = (key) => {
  if(typeof window !== 'undefined') {
    const data = localStorage.getItem(key)
  
  return JSON.parse(data)
  }

}, setLocalStorage = (key, val) => {
  if(typeof window !== 'undefined') {

  val = JSON.stringify(val)

  return localStorage.setItem(key, val)
  }
};


export default useLocalStorage