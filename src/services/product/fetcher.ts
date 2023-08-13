import { axios } from '@/utils/axios';

export const getAllProducts = async () => {
  const result = await axios.get('/products', {
    params: { limit: 3, skip: 10 },
  });

  return result.data;
};
