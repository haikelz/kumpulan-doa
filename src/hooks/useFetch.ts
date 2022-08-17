import { useQuery } from "@tanstack/react-query"

type FetchData = (link: string) => Promise<any>;

const fetchData: FetchData = async (link: string) => {
    const response: Response = await fetch(`${link}`);
    const data = await response.json();

    return data.data;
}

export const useFetch = (link: string) => {
    return useQuery(["fetch data", link], () => fetchData(link), { keepPreviousData: true, refetchOnWindowFocus: false });
}