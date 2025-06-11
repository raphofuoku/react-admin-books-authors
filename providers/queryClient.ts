import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            /**
             * If set to `true`, the query will refetch on window focus if the data is stale.
             * If set to `false`, the query will not refetch on window focus.
             * If set to `'always'`, the query will always refetch on window focus.
             * If set to a function, the function will be executed with the latest data and query to compute the value.
             * Defaults to `true`.
             */
            refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;