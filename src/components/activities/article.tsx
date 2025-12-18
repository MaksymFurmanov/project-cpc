import {Activity} from "../../types";
import Gallery from "./gallery";
import {useMemo} from "react";
import localizeActivity from "../../lib/localizeActivity";
import i18n from "i18next";

export default function Article({event}: { event: Activity }) {
    const lang = i18n.language;
    const {title, text, date} = useMemo(
        () => localizeActivity(event, lang),
        [event, lang]
    );

    return (
        <article>
            <Gallery images={event.images}/>
            <h2>
                {title}
            </h2>
            <b>
                {date}
            </b>
            <p>
                {text}
            </p>
        </article>
    );
}