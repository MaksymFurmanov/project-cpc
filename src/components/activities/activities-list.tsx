import styles from "./activities.module.css";
import ActivityCard from "./activity-card";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {InfiniteData, useSuspenseInfiniteQuery} from "@tanstack/react-query";
import {getActivitiesPage} from "../../api/activitiesData";
import {ActivitiesPage} from "../../types";
import Pagination from "./pagination";
import {useEffect, useMemo} from "react";

export default function ActivitiesList() {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const {page} = useParams<{ page?: string }>();
    const navigate = useNavigate();

    const currentPage = Number(page ?? 1);

    const setPage = (page: number) => {
        navigate(`/activities/${page}`);
    };

    const {data, fetchNextPage, hasNextPage} = useSuspenseInfiniteQuery<
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

    useEffect(() => {
        if (currentPage > pagesLoaded && hasNextPage) {
            fetchNextPage();
        }
    }, [currentPage, pagesLoaded, hasNextPage, fetchNextPage]);

    const sortedActivities = useMemo(() => {
        const activities = data?.pages[currentPage - 1]?.activities ?? [];
        return [...activities].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            return dateB - dateA;
        });
    }, [currentPage, data?.pages]);

    const totalPages = hasNextPage
        ? (data?.pages.length ?? 1) + 1
        : data?.pages.length ?? 1;

    return (
        <div className={styles.listContainer}>
            <Pagination curr={currentPage}
                        selectFn={setPage}
                        total={totalPages}
            />

            {sortedActivities.map((activity, index) => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                    lang={lang}
                    isLast={index !== sortedActivities.length - 1}
                />
            ))}

            <Pagination curr={currentPage}
                        selectFn={setPage}
                        total={totalPages}
            />
        </div>
    );
}