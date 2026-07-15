"use client";

import styles from "./articles.module.css";
import {useState} from "react";
import clsx from "clsx";
import ArticlesList from "@/features/articles/ArticlesList";
import {ArticleType} from "@cpc/article-system";
import AddNewButton from "@/features/articles/AddNewButton";

export default function ArticlesByType() {
    const [type, setType] = useState(ArticleType.NEWS);

    return (
        <div className={styles.articlesList}>
            <div className={styles.typesButtons}>
                <button className={clsx(type === ArticleType.NEWS
                    && styles.selectedBtn)}
                        onClick={() => setType(ArticleType.NEWS)}>
                    Aktuality
                </button>

                <button className={clsx(type === ArticleType.EVENT
                    && styles.selectedBtn)}
                        onClick={() => setType(ArticleType.EVENT)}>
                    Podujatia
                </button>
            </div>

            <ArticlesList type={type}/>

            <AddNewButton/>
        </div>
    );
}