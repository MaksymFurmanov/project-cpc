import { ArticlesState, ArticlesAction } from "./types";

export const initialArticlesState: ArticlesState = {
    articles: [],
    loading: true,
    error: null,
};

export function articlesReducer(
    state: ArticlesState,
    action: ArticlesAction
): ArticlesState {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                loading: true,
                error: null,
            };

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                articles: action.payload,
            };

        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "ADD_IMAGE":
            return {
                ...state,
                articles: state.articles.map(article =>
                    article.id === action.payload.articleId
                        ? {
                            ...article,
                            images: [
                                ...(article.images || []),
                                action.payload.imageUrl,
                            ],
                        }
                        : article
                ),
            };

        default:
            return state;
    }
}