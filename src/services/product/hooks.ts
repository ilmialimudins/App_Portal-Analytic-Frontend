import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from './fetcher';

const useProductsData = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => getAllProducts(),
  });

  return { isLoading, error, data, isFetching };
};

export { useProductsData };
