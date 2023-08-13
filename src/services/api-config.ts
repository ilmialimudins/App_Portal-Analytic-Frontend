import { baseUrl } from '@/config';

export interface ApiConfig {
  url: string;
  products: string;
}
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: baseUrl || '',
  products: '/products',
};
