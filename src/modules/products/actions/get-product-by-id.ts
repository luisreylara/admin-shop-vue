import { tesloApi } from '@/api/tesloApi';
import { getProductImage } from '.';

export const getProductById = async (productId: string) => {
  try {
    const { data } = await tesloApi.get(`/products/${productId}`);

    return {
      ...data,
      images: data.images.map(getProductImage),
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id ${productId}`);
  }
};
