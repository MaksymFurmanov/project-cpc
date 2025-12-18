import styles from "./activities.module.css";
import {Activity} from "../../types";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import localizeActivity from "../../lib/localizeActivity";
import Gallery from "./gallery";

const MAX_DESCRIPTION_LENGTH = 450;
const SEPARATE_PAGE_THRESHOLD = 500;

export default function ActivityCard({activity, lang}: {
    activity: Activity,
    lang: string
}) {
    const navigate = useNavigate();

    const {title, text, date} = useMemo(
        () => localizeActivity(activity, lang),
        [activity, lang]
    );

    if(!text || !title || !date) return <></>;

    const separateText = false;

    const titleBtnHandler = () => {
        if(!separateText) return;
        navigate(`/event/${activity.id}`)
    }

    const textSliced = separateText
        ? text.slice(0, MAX_DESCRIPTION_LENGTH).replace(/\s+\S*$/, '') + "…"
        : text;

    return (
        <div>
            <Gallery images={activity.images}/>

            <div className={styles.textContent}>
                <h2 className={clsx(separateText && styles.hoverEffect)}
                    onClick={titleBtnHandler}>
                    {title}
                </h2>
                <p className={styles.date}>
                    {date}
                </p>
                <p className={styles.text}>
                    {textSliced}
                </p>
                {separateText && <ReadMoreBtn id={activity.id}/>}
            </div>
        </div>
    );
}

const ReadMoreBtn = ({id}: {
    id: string
}) => {
    const {t} = useTranslation(["activities"]);
    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate(`/activity/${id}`);
    }

    return (
        <button className={styles.readMoreButton}
                onClick={redirectHandler}>
            {t("readMoreBtn")}
        </button>
    );
}