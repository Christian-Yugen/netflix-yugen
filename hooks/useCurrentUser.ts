import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
    const { data, error, isloading, mutate } = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isloading,
        mutate
    }
};

export default useCurrentUser;