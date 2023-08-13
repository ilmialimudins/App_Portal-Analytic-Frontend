import { DEFAULT_API_CONFIG } from '@/services/api-config';
import defaultAxios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
};

const axios = defaultAxios.create(config);

// // TODO: Logic for attach token bearer
// axios.interceptors.request.use(
//   async (set) => {
//     if (typeof window !== 'undefined') {
//       // Perform localStorage action
//       const user = localStorage.getItem('user');

//       console.log(user);

//       const { token, isAuthenticated } = JSON.stringify(user) as any;
//       console.log(token, isAuthenticated);
//     }

//     // Check if user is authenticated, then assign headers for authorization
//     // if (
//     //   token
//     // ) {
//     //   set.headers![AUTHORIZATION] = `Bearer ${token}`;
//     // }

//     return set;
//   },
//   (error) => {
//     console.log(error);
//   },
// );

export { axios };
