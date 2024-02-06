import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './appleLazyBaseQuery';

export { baseQuery };

export default createApi({
  reducerPath: 'appleApi',
  baseQuery,
  endpoints: () => ({}),
});
