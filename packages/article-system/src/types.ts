export enum ArticleType {
    NEWS = "news",
    EVENT = "event"
}

export type MultilingualArticle = {
    id: string,
    created_at: string,
    date: string,

    type: ArticleType,

    title_sk: string,
    title_uk: string,
    title_en: string,

    description_sk: string,
    description_uk: string,
    description_en: string,

    images: string[],
    published: boolean,
}