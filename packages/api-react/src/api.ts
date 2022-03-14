import { createApi } from '@reduxjs/toolkit/query/react';
import appleLazyBaseQuery from './appleLazyBaseQuery';

export const baseQuery = appleLazyBaseQuery({});

export default createApi({
  reducerPath: 'appleApi',
  baseQuery,
  endpoints: () => ({}),
});
