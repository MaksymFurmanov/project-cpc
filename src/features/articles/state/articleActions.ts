import { Dispatch } from "react";
import { MultilingualArticle } from "cpc-shared";
import { ArticlesAction } from "./types";

export const createArticlesActions = (
    dispatch: Dispatch<ArticlesAction>
) => {
    const refreshArticles = async () => {
        dispatch({ type: "FETCH_START" });

        try {
            const res = await fetch("/api/articles");

            if (!res.ok) throw new Error();

            const data: MultilingualArticle[] = await res.json();

            dispatch({
                type: "FETCH_SUCCESS",
                payload: data,
            });
        } catch {
            dispatch({
                type: "FETCH_ERROR",
                payload: "Failed to load",
            });
        }
    };

    const addImage = (
        articleId: string,
        imageUrl: string
    ) => {
        dispatch({
            type: "ADD_IMAGE",
            payload: { articleId, imageUrl },
        });
    };

    return {refreshArticles, addImage};
}