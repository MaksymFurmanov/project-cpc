export enum ArticleType {
    NEWS = "News",
    EVENT = "Event"
}

export type MultilingualArticle = {
    id: string,
    titleEN: string,
    titleSK: string,
    titleUA: string,
    descriptionSK: string,
    descriptionUA: string,
    descriptionEN: string,
    date: string,
    showDate: boolean,
    images: string[],
    type: ArticleType
}

export type ArticlesPage = {
    articles: MultilingualArticle[],
    nextOffset?: string
}