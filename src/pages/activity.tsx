import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Activity} from "../types";
import {getActivityById} from "../api/activitiesData";
import Article from "../components/activities/article";

export default function ActivityPage() {
    const params = useParams();
    const activityId = params.id!;

    const {data: event, isLoading, isError} = useQuery<Activity | null>({
        queryKey: ["event", activityId],
        queryFn: () => getActivityById(activityId!),
        staleTime: 1000 * 60 * 5,
    });

    if(isError) console.error("Error fetching events...");

    return (
        <main>
            {isLoading
                ? <p>Article is loading</p>
                : event && <Article event={event}/>}
        </main>
    );
}