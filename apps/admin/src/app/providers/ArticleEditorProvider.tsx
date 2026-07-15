"use client";

import {
    createContext,
    ReactNode, useCallback,
    useContext, useReducer,
    useState,
} from "react";

import axios from "axios";
import {ArticleType} from "@cpc/article-system";
import {mapArticleToEditorState} from "@/features/article/mapArticleToEditorState";
import {ArticleEditorImage, ArticleEditorState} from "@/features/article/types";
import {articleReducer} from "@/features/article/reducer";
import {Language} from "@cpc/languages";

const ArticleEditorContext = createContext<{
    article: ArticleEditorState,
    loading: boolean,
    error: string | null,

    setTitle: (lang: Language, value: string) => void,
    setDescription: (lang: Language, value: string) => void,
    setDate: (value: string) => void,
    setImages: (value: ArticleEditorImage[]) => void,
    setPublished: (value: boolean) => void,
    setType: (value: ArticleType) => void,

    editExisting: (id: string) => Promise<void>,
    saveArticle: (lang: Language) => Promise<void>
    resetArticle: () => void,
} | undefined>(undefined);

const emptyArticle = {
    id: null,
    date: new Date().toDateString(),

    type: ArticleType.NEWS,

    titles: {
        "sk": "",
        "en": "",
        "uk": "",
    },

    descriptions: {
        "sk": "",
        "en": "",
        "uk": "",
    },

    images: [],
    published: false
}

export default function ArticleEditorProvider({children}: {
    children: ReactNode
}) {
    const [article, dispatch] = useReducer(articleReducer, emptyArticle);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const setTitle = (lang: Language, value: string) =>
        dispatch({
            type: "SET_TITLE",
            lang,
            value,
        });

    const setDescription = (lang: Language, value: string) =>
        dispatch({
            type: "SET_DESCRIPTION",
            lang,
            value,
        });

    const setDate = (value: string) =>
        dispatch({
            type: "SET_DATE",
            value,
        });

    const setImages = (value: ArticleEditorImage[]) =>
        dispatch({
            type: "SET_IMAGES",
            value,
        });

    const setPublished = (value: boolean) =>
        dispatch({
            type: "SET_PUBLISHED",
            value,
        });

    const setType = (value: ArticleType) =>
        dispatch({
            type: "SET_TYPE",
            value,
        });

    const editExisting = useCallback(async (id: string) => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(`/api/articles/${id}`);

            dispatch({
                type: "RESET",
                value: mapArticleToEditorState(res.data),
            });
        } catch (e) {
            console.error(e);
            setError("Failed to fetch the article");
        } finally {
            setLoading(false);
        }
    }, []);

    const resetArticle = useCallback(() => {
        dispatch({
            type: "RESET",
            value: {
                ...emptyArticle,
                date: new Date().toISOString(),
            },
        });

        setError(null);
    }, []);


    const createArticle = useCallback(
        async () => {
            const res = await axios.post(
                "/api/articles",
                {
                    titles: article.titles,
                    descriptions: article.descriptions,

                    date: article.date,
                    type: article.type,
                    images: article.images,
                    published: article.published,
                }
            );

            dispatch({
                type: "RESET",
                value: mapArticleToEditorState(
                    res.data
                ),
            });
        },
        [article]
    );

    const updateArticle = useCallback(
        async (lang: Language) => {
            if (!article.id) {
                throw new Error("ID for the article is not found");
            }

            const res = await axios.post(
                `/api/articles/${article.id}`,
                {
                    lang,

                    title: article.titles[lang],
                    description:
                        article.descriptions[lang],

                    date: article.date,
                    type: article.type,
                    images: article.images,
                    published: article.published,
                }
            );

            dispatch({
                type: "RESET",
                value: mapArticleToEditorState(
                    res.data
                ),
            });
        },
        [article]
    );

    const saveArticle = useCallback(
        async (lang: Language) => {
            try {
                setLoading(true);

                if (article.id) {
                    await updateArticle(lang);
                } else {
                    await createArticle();
                }
            } catch (e) {
                console.error(e);

                setError(
                    article.id
                        ? "Failed to save the article"
                        : "Failed to create the article"
                );
            } finally {
                setLoading(false);
            }
        },
        [article.id, createArticle, updateArticle]
    );

    return (
        <ArticleEditorContext.Provider value={{
            article,
            loading,
            error,

            setTitle,
            setDescription,
            setDate,
            setImages,
            setPublished,
            setType,

            editExisting,
            saveArticle,
            resetArticle
        }}>
            {children}
        </ArticleEditorContext.Provider>
    );
}

export function useArticleEditor() {
    const context = useContext(ArticleEditorContext);

    if (!context) {
        throw new Error("useArticleEditor must be used inside provider");
    }

    return context;
}