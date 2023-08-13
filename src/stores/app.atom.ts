import { getAllProducts } from '@/services/product/fetcher';
import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/vanilla/utils';

const initialAuthState = {
  token: null,
  isAuthenticated: false,
};
export const isLoading = atom<boolean>(false);

export const authAtom = atomWithStorage('user', initialAuthState);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const [productsDataAtom] = atomsWithQuery((get) => ({
  queryKey: ['product-data'],
  // eslint-disable-next-line no-empty-pattern, @typescript-eslint/no-unused-vars
  queryFn: async ({ queryKey: [_] }) => {
    // const data = await getAllProducts();

    return [];
  },
  retry: 2,
}));
