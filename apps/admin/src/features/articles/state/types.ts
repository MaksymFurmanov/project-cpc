import { MultilingualArticle } from "cpc-shared";

export type ArticlesState = {
    articles: MultilingualArticle[],
    loading: boolean,
    error: string | null,
};

export type ArticlesAction =
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS", payload: MultilingualArticle[] }
    | { type: "FETCH_ERROR", payload: string }
    | { type: "ADD_IMAGE", payload: { articleId: string, imageUrl: string }
}