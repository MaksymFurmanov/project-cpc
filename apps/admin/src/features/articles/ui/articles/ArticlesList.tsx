"use client";

import styles from "../../articles.module.css";
import {useArticles} from "@/app/providers/ArticlesProvider";
import {useRouter} from "next/navigation";

export default function ArticlesList() {
    const {articles} = useArticles();
    const {push} = useRouter();

    return (
        <div className={styles.ArticlesList}>
            <ul>
                {articles?.map((article) => (
                    <li key={article.id}
                        className={styles.tableRow}>
                        <h3>{article.title_sk}</h3>

                        <p>{article.date.toString()}</p>

                        <button className={"primaryBtn"}
                                onClick={() => {
                                    push("/article/" + article.id);
                                }}>
                            Upraviť
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}