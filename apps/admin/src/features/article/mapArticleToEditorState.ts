import {ArticleEditorState} from "@/features/article/types";
import {MultilingualArticle} from "@cpc/article-system";

export const mapArticleToEditorState = (
    article: MultilingualArticle
): ArticleEditorState => ({
    id: article.id,
    date: article.date,
    type: article.type,
    titles: {
        sk: article.title_sk,
        en: article.title_en,
        uk: article.title_uk,
    },
    descriptions: {
        sk: article.description_sk,
        en: article.description_en,
        uk: article.description_uk,
    },
    images: (article.images ?? []).map(
        (src: string) => ({
            src,
            file: null,
        })
    ),
    published: article.published,
});