"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    ReactNode,
} from "react";
import {articlesReducer, initialArticlesState} from "@/features/articles/state/articlesReducer";
import {MultilingualArticle} from "cpc-shared";
import {createArticlesActions} from "@/features/articles/state/articleActions";

const ArticlesContext = createContext<{
    articles: MultilingualArticle[],
    loading: boolean,
    error: string | null,
    articlesMap: Map<string, MultilingualArticle>,
    refreshArticles: () => Promise<void>,
    addImage: (articleId: string, imageUrl: string) => void,
} | undefined>(undefined);

export function ArticlesProvider({children}: {
    children: ReactNode,
}) {
    const [state, dispatch] = useReducer(articlesReducer, initialArticlesState);

    const actions = useMemo(
        () => createArticlesActions(dispatch),
        [dispatch]
    );

    useEffect(() => {
        actions.refreshArticles();
    }, [actions]);

    const articlesMap = useMemo(() => {
        return new Map(
            state.articles.map(article => [
                article.id,
                article,
            ])
        );
    }, [state.articles]);

    const value = useMemo(
        () => ({
            articles: state.articles,
            loading: state.loading,
            error: state.error,
            articlesMap,
            refreshArticles: actions.refreshArticles,
            addImage: actions.addImage,
        }),
        [state, articlesMap, actions]
    );

    return (
        <ArticlesContext.Provider value={value}>
            {children}
        </ArticlesContext.Provider>
    );
}

export function useArticles() {
    const context = useContext(ArticlesContext);

    if (!context) {
        throw new Error("useArticles must be used inside provider");
    }

    return context;
}