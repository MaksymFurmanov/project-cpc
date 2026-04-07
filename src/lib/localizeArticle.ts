import {MultilingualArticle} from "../types";

const localizeArticle = (event: MultilingualArticle, lang: string): {
    title: string,
    text: string,
    date: string
} => {
    let title: string, text: string;

    switch (lang) {
        case "en":
            title = event.title_en;
            text = event.description_en;
            break;
        case "uk":
            title = event.title_ua;
            text = event.description_ua;
            break;
        default:
            title = event.title_sk;
            text = event.description_sk;
    }

    const date = new Date(event.date).toLocaleDateString(lang)

    return {title, text, date}
}

export default localizeArticle;