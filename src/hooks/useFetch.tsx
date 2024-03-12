import { useQuery } from "@tanstack/react-query";

function useFetch(url:string) {
    const {data,isPending} = useQuery({
        queryKey: ['posts'],
        queryFn: async function () {
            const res = await fetch(url);
            const result = await res.json()
            return result;
        }
    })
    return {data, isPending}
}

export default useFetch;