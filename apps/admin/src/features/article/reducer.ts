import {ArticleEditorState} from "@/features/article/types";
import {Action} from "@/features/article/actions";

export function articleReducer(
    state: ArticleEditorState,
    action: Action
): ArticleEditorState {
    switch (action.type) {
        case "SET_TITLE":
            return {
                ...state,

                titles: {
                    ...state.titles,
                    [action.lang]: action.value,
                },
            };

        case "SET_DESCRIPTION":
            return {
                ...state,

                descriptions: {
                    ...state.descriptions,
                    [action.lang]: action.value,
                },
            };

        case "SET_DATE":
            return {
                ...state,
                date: action.value,
            };

        case "SET_TYPE":
            return {
                ...state,
                type: action.value,
            };

        case "SET_IMAGES":
            return {
                ...state,
                images: action.value,
            };

        case "REMOVE_IMAGE":
            return {
                ...state,
                images: state.images.filter((_, i) => i !== action.index),
            };

        case "MOVE_IMAGE":
            const images = [...state.images];
            const [img] = images.splice(action.from, 1);
            images.splice(action.to, 0, img);

            return {
                ...state,
                images,
            };

        case "SET_PUBLISHED":
            return {
                ...state,
                published: action.value,
            };

        case "RESET":
            return action.value;

        default:
            return state;
    }
}