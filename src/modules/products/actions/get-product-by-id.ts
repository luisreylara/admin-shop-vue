import { tesloApi } from '@/api/tesloApi';
import { getProductImage } from '.';
import type { Product } from '../interfaces/product';

export const getProductById = async (productId: string): Promise<Product> => {
  if (productId === 'create') {
    return {
      id: '',
      title: '',
      slug: '',
      description: '',
      price: 0,
      stock: 0,
      images: [],
      tags: [],
      sizes: [],
      gender: '' as any,
      user: {} as any,
    };
  }
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
