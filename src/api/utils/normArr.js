import apiNormData from './normData';

const apiNormArr = (data = {}, attrs = [], fn = null) => {
  if (data) {
    const normalizedData = data.data.map((data) =>
      typeof fn === 'function'
        ? fn(apiNormData(data, attrs))
        : apiNormData(data, attrs),
    );

    return { ...data, data: normalizedData };
  }
};

export default apiNormArr;
