const apiNormImg = (data) => {
  if (data) {
    const { createdAt, updatedAt, ...attributes } = data.attributes;

    const img = attributes.formats?.mediu || attributes;

    const normalizedData = {
      alt: attributes.alternativeText,
      src: `${process.env.NEXT_PUBLIC_CMS_BASE_URL}${img.url}`,
      width: img.width ?? img.size,
      height: img.height ?? img.size,
    };

    return { id: data.id, createdAt, updatedAt, data: normalizedData };
  }
};

export default apiNormImg;
