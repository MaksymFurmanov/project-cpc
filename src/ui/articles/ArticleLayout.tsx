"use client";

import styles from "./articles.module.css";
import {ReactNode} from "react";

export function ArticleLayout({navigation, gallery, title, date, content}: {
    navigation: ReactNode,
    gallery: ReactNode,
    title: ReactNode,
    date: ReactNode,
    content: ReactNode,
}) {
    return (
        <article className={styles.mainContainer}>
            {navigation}

            {gallery}

            <div className={styles.textContent}>
                <h2 className={styles.articleTitle}>
                    {title}
                </h2>

                <b className={styles.date}>
                    {date}
                </b>

                <div className={styles.textField}>
                    {content}
                </div>
            </div>
        </article>
    );
}