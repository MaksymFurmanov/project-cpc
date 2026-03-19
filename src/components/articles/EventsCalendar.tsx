import styles from "./articles.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import {useArticlesPagination} from "../../hooks/useArticlesPagination";
import {ArticleType} from "../../types";
import mapCalendarEvents from "../../utils/mappers/mapCalendarEvents";
import {useTranslation} from "react-i18next";

export default function EventsCalendar() {
    const {pages} = useArticlesPagination(ArticleType.EVENT);
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const articles = pages.flatMap(page => page.articles);
    const events = mapCalendarEvents(articles, lang);

    return (
        <div className={styles.calendarWrapper}>
            <FullCalendar plugins={[dayGridPlugin]}
                          initialView={"dayGridMonth"}
                          events={events}
                          eventContent={(content) => {
                              const image = content.event.extendedProps.image;
                              const title = content.event.title;

                              return (
                                  <div className={styles.eventCard}>
                                      <div className={styles.eventCardTitle}>
                                          {title}
                                      </div>

                                      {image && (
                                          <img src={image} alt={""}/>
                                      )}
                                  </div>
                              );
                          }}
                          eventClick={(content) => {
                              window.location.href = content.event.url;
                          }}
            />
        </div>
    );
}