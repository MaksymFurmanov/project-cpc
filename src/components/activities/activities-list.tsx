import styles from "./activities.module.css";
import ActivityCard from "./activity-card";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {ActivitiesPage} from "../../types";
import Pagination from "./pagination";
import {useMemo} from "react";
import ActivitiesListLoading from "../skeletons/activities-list-loading/activities-list-loading";
import {useActivitiesPage} from "../../hooks/use-activities-pages";

export default function ActivitiesList() {
    const {page} = useParams<{ page?: string }>();
    const currentPage = Number(page ?? 1);

    const {pages, setPage, loading, total} = useActivitiesPage(currentPage);

    if (pages.length < 1) return null;

    return loading ? (
        <ActivitiesListLoading/>
    ) : (
        <div className={styles.listContainer}>
            <Pagination curr={currentPage}
                        selectFn={setPage}
                        total={total}
            />

            <SortedActivities pages={pages} currentPage={currentPage}/>

            <Pagination curr={currentPage}
                        selectFn={setPage}
                        total={total}
            />
        </div>
    );
}

const SortedActivities = ({pages, currentPage}: {
    pages: ActivitiesPage[],
    currentPage: number,
}) => {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const sortedActivities = useMemo(() => {
        const activities = pages[currentPage - 1]?.activities ?? [];
        return [...activities].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return dateB - dateA;
        });
    }, [currentPage, pages]);

    return (
        <>
            {sortedActivities.map((activity, index) => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                    lang={lang}
                    isLast={index !== sortedActivities.length - 1}
                />
            ))}
        </>
    );
}