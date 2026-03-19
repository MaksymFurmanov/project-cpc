import {MultilingualArticle} from "../../types";

export default function mapCalendarEvents(events: MultilingualArticle[], lang: string) {
    return events.map(event => {
        let title;
        switch (lang) {
            case "sk":
                title = event.titleSK;
                break;
            case "ua":
                title = event.titleUA;
                break;
            case "en":
                title = event.titleEN;
                break;
            default:
                title = event.titleSK;
        }

        return {
            title,
            date: event.date,
            url: `/event/${event.id}`,
            extendedProps: {
                image: event.images?.[0]
            }
        }
    });
}