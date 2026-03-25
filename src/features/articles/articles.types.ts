export type ArticleType = "news" | "event";

export type Article = {
    id: string;
    created_at: string;
    date: string;

    type: ArticleType;

    title_sk: string;
    title_ua: string;
    title_en: string;

    description_sk: string;
    description_ua: string;
    description_en: string;

    images: string[];
    published: boolean;
};