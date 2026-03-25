import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getArticlesPage } from "../api/articlesData";
import {ArticleType, MultilingualArticle} from "../types";

const PAGE_SIZE = 3;

export function useArticlesPage(currentPage: number, type: ArticleType): {
    articles: MultilingualArticle[],
    loading: boolean,
    totalPages: number
} {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["articles", type, currentPage],
        queryFn: () => getArticlesPage(type, currentPage),
        /*keepPreviousData: true,*/
    });

    useEffect(() => {
        queryClient.prefetchQuery({
            queryKey: ["articles", type, currentPage + 1],
            queryFn: () => getArticlesPage(type, currentPage + 1),
        });
    }, [currentPage, type, queryClient]);

    const totalArticles = data?.totalCount || 0;
    const totalPages = Math.ceil(totalArticles / PAGE_SIZE);

    return {
        articles: data?.articles as MultilingualArticle[] || [],
        loading: isLoading,
        totalPages
    };
}