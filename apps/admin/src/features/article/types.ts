import {ArticleType} from "@cpc/article-system";
import {Language} from "@cpc/languages";

export type ArticleEditorImage = {
    src: string;
    file: File | null;
}

export type ArticleEditorState = {
    id: string | null,
    date: string,
    type: ArticleType,
    titles: Record<
        Language,
        string
    >,
    descriptions: Record<
        Language,
        string
    >,
    images: ArticleEditorImage[],
    published: boolean
}