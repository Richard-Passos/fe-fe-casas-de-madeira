import apiNormArr from './normArr';

const apiNormData = (data, attrs = []) => {
  if (Array.isArray(data)) {
    return apiNormArr({ data });
  } else if (data) {
    const { createdAt, updatedAt, publishedAt, ...attributes } =
      data.attributes;

    const normalizedData = attrs.reduce(
      (prevVal, attr) => ({
        ...prevVal,
        [attr]: apiNormData(attributes[attr]?.data),
      }),
      {},
    );

    return {
      id: data.id,
      createdAt,
      updatedAt,
      publishedAt,
      data: { ...attributes, ...normalizedData },
    };
  }
};

export default apiNormData;
