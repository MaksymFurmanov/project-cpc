import {ArticleEditorState} from "@/features/article/types";
import {MultilingualArticle} from "@cpc/article-system";

export const mapEditorStateToArticle = (
    state: ArticleEditorState
): MultilingualArticle => ({
    date: state.date,
    type: state.type,

    title_sk: state.titles.sk,
    title_en: state.titles.en,
    title_uk: state.titles.uk,

    description_sk: state.descriptions.sk,
    description_en: state.descriptions.en,
    description_uk: state.descriptions.uk,

    images: state.images.map((image) => image.preview.src),

    published: state.published,
});