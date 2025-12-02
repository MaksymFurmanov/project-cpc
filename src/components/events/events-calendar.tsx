import styles from "./events.module.css";
import {PlannedEvent} from "../../types";
import {Calendar, Event, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("sk-SK");
const localizer = momentLocalizer(moment);

export default function EventsCalendar({events}: {
    events: PlannedEvent[] | undefined
}) {
    const eventsData: Event[] = events?.map((event) => {
        console.log(new Date(event.date), event.date)
        return {
            title: event.title,
            start: new Date(event.date)
        }
    }) || [];

    return (
        <div className={styles.calendar}>
            <Calendar views={["month"]}
                      selectable
                      localizer={localizer}
                      defaultDate={new Date()}
                      defaultView="month"
                      events={eventsData}
                      onSelectEvent={(event) => alert(event.title)}
            />
        </div>
    );
}