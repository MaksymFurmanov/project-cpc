import {Activity} from "../types";

const localizeActivity = (event: Activity, lang: string): {
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
        case "ua":
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

export default localizeActivity;