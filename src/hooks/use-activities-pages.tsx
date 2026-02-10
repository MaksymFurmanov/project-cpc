import {InfiniteData, useSuspenseInfiniteQuery} from "@tanstack/react-query";
import {ActivitiesPage} from "../types";
import {getActivitiesPage} from "../api/activitiesData";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function useActivitiesPage(currentPage: number): {
    pages: ActivitiesPage[],
    setPage: (currentPage: number) => void,
    loading: boolean,
    total: number
} {
    const navigate = useNavigate();
    const {data, fetchNextPage, hasNextPage, isFetching} = useSuspenseInfiniteQuery<
        ActivitiesPage,
        Error,
        InfiniteData<ActivitiesPage>,
        ["activities"],
        string | undefined
    >({
        queryKey: ["activities"],
        queryFn: ({pageParam}) =>
            getActivitiesPage(pageParam),
        initialPageParam: undefined,
        getNextPageParam: lastPage => lastPage.nextOffset,
    });

    const pagesLoaded = data?.pages.length ?? 0;

    useEffect(() => {
        if (currentPage > pagesLoaded && hasNextPage) {
            fetchNextPage();
        }
    }, [currentPage, pagesLoaded, hasNextPage, fetchNextPage]);

    const total = hasNextPage
        ? (data?.pages.length ?? 1) + 1
        : data?.pages.length ?? 1;

    const setPage = (page: number) => {
        navigate(`/activities/${page}`);
    };

    return {
        pages: data?.pages,
        setPage,
        loading: isFetching,
        total
    };
}