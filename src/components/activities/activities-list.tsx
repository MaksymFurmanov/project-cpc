import styles from "./activities.module.css";
import ActivityCard from "./activity-card";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {Activity} from "../../types";
import {getActivities} from "../../api/activitiesData";

export default function ActivitiesList() {
    const {data: activities} = useSuspenseQuery<Activity[]>({
        queryKey: ["activities"],
        queryFn: getActivities,
        staleTime: 1000 * 60 * 5,
    });

    const {i18n} = useTranslation();
    const lang = i18n.language;

    const sorted = useMemo(() => {
        return [...activities].sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        });
    }, [activities]);

    return (
        <div className={styles.listContainer}>
            {sorted && sorted.map((activity, index) => {
                return (
                    <>
                        <ActivityCard key={activity.id}
                                      activity={activity}
                                      lang={lang}
                        />
                        
                        {index !== activities.length - 1 && (
                            <div className={styles.divider}/>
                        )}
                    </>
                )
            })}
        </div>
    );
}