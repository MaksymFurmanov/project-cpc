import {MultilingualArticle} from "../types";

const localizeArticle = (event: MultilingualArticle, lang: string): {
    title: string,
    text: string,
    date: string
} => {
    let title: string, text: string;

    switch (lang) {
        case "en":
            title = event.titleEN;
            text = event.descriptionEN;
            break;
        case "uk":
            title = event.titleUA;
            text = event.descriptionUA;
            break;
        default:
            title = event.titleSK;
            text = event.descriptionSK;
    }

    const date = new Date(event.date).toLocaleDateString(lang)

    return {title, text, date}
}

export default localizeArticle;