import styles from "./activities.module.css";
import {Activity} from "../../types";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import localizeActivity from "../../lib/localizeActivity";
import ReactMarkdown from "react-markdown";
import Gallery from "./gallery";

const MAX_DESCRIPTION_LENGTH = 450;

export default function ActivityCard({activity, lang, isLast}: {
    activity: Activity,
    lang: string,
    isLast: boolean
}) {
    const navigate = useNavigate();

    const {title, text, date} = useMemo(
        () => localizeActivity(activity, lang),
        [activity, lang]
    );

    if (!text || !title) return <></>;

    const separateText = false;

    const titleBtnHandler = () => {
        if (!separateText) return;
        navigate(`/event/${activity.id}`);
    }

    const textSliced = separateText
        ? text.slice(0, MAX_DESCRIPTION_LENGTH).replace(/\s+\S*$/, '') + "…"
        : text;

    return (
        <>
            <div>
                <div className={styles.galleryWrapper}>
                    <Gallery images={activity.images}/>
                </div>

                <div className={styles.textContent}>
                    <h2 className={clsx(separateText && styles.hoverEffect)}
                        onClick={titleBtnHandler}>
                        {title}
                    </h2>

                    {activity.showDate && date !== "Invalid Date" && (
                        <p className={styles.date}>
                            {date}
                        </p>
                    )}

                    <div className={styles.text}>
                        <ReactMarkdown>{textSliced}</ReactMarkdown>
                    </div>

                    {separateText && <ReadMoreBtn id={activity.id}/>}
                </div>
            </div>

            {isLast && (
                <div className={styles.divider}/>
            )}
        </>
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