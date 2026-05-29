import {InfiniteData, useSuspenseInfiniteQuery} from "@tanstack/react-query";
import {ArticlesPage, ArticleType} from "../types";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getArticlesPage} from "../api/articlesData";
import {useTranslation} from "react-i18next";

export function useArticlesPage(currentPage: number, type: ArticleType): {
    pages: ArticlesPage[],
    setPage: (currentPage: number) => void,
    loading: boolean,
    total: number
} {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const {data, fetchNextPage, hasNextPage, isFetching} = useSuspenseInfiniteQuery<
        ArticlesPage,
        Error,
        InfiniteData<ArticlesPage>,
        ["articles", ArticleType, string],
        string | undefined
    >({
        queryKey: ["articles", type, i18n.language],
        queryFn: ({pageParam}) =>
            getArticlesPage(type, pageParam),
        initialPageParam: undefined,
        getNextPageParam: lastPage => lastPage.nextOffset,
    });

    console.log("type in useArticlesPage: ", type);

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
        switch (type) {
            case ArticleType.EVENT:
                navigate(`/events?page=${page}`);
                break;
            case ArticleType.NEWS:
                navigate(`/news?page=${page}`);
                break;
            default:
                throw new Error("Invalid article type");
        }
    };

    return {
        pages: data?.pages,
        setPage,
        loading: isFetching,
        total
    };
}