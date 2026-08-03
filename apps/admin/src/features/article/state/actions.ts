import {ArticleType} from "@cpc/article-system";
import {ArticleEditorImage, ArticleEditorState} from "@/features/article/types";
import {Language} from "@cpc/languages";

export type Action =
    | {
    type: "SET_TITLE",
    lang: Language,
    value: string,
}
    | {
    type: "SET_DESCRIPTION",
    lang: Language,
    value: string,
}
    | {
    type: "SET_DATE",
    value: string,
}
    | {
    type: "SET_TYPE",
    value: ArticleType,
}
    | {
    type: "ADD_IMAGE",
    value: ArticleEditorImage,
}
    | {
    type: "UPDATE_IMAGE",
    index: number,
    value: ArticleEditorImage,
}
    | {
    type: "REMOVE_IMAGE",
    index: number,
}
    | {
    type: "MOVE_IMAGE",
    from: number,
    to: number,
}
    | {
    type: "RESET",
    value: ArticleEditorState,
}