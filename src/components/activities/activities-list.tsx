import styles from "./activities.module.css";
import ActivityCard from "./activity-card";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {InfiniteData, useInfiniteQuery} from "@tanstack/react-query";
import {getActivitiesPage} from "../../api/activitiesData";
import {ActivitiesPage} from "../../types";
import Pagination from "./pagination";
import {useMemo} from "react";

export default function ActivitiesList() {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const {page} = useParams<{ page?: string }>();
    const navigate = useNavigate();

    const currentPage = Number(page ?? 1);

    const setPage = (page: number) => {
        navigate(`/activities/${page}`);
    };

    const {data, fetchNextPage, hasNextPage} = useInfiniteQuery<
        ActivitiesPage,
        Error,
        InfiniteData<ActivitiesPage>,
        ["activities"],
        string | undefined
    >({
        queryKey: ["activities"],
        queryFn: ({pageParam}) =>
            getActivitiesPage(pageParam),
        initialPageParam: undefined,
        getNextPageParam: lastPage => lastPage.nextOffset,
    });

    const pagesLoaded = data?.pages.length ?? 0;

    if (currentPage > pagesLoaded && hasNextPage) {
        fetchNextPage();
    }

    const activities = data?.pages[currentPage - 1]?.activities ?? [];

    const sortedActivities = useMemo(() => {
        return [...activities].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return dateB - dateA;
        });
    }, [activities]);

    return (
        <div className={styles.listContainer}>
            <Pagination curr={currentPage}
                        selectFn={setPage}
                        max={data?.pages.length ?? 0}
            />

            {sortedActivities.map((activity, index) => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                    lang={lang}
                    isLast={index !== sortedActivities.length - 1}
                />
            ))}
        </div>
    );
}