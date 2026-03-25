"use client";

import styles from "./articles.module.css";
import {useEffect, useState} from "react";
import {Article} from "@/features/articles/articles.types";
import axios from "axios";
import Image from "next/image";
import {AddImageBtn} from "@/features/articles/AddImageBtn";

export default function ArticlesList() {
    const [articles, setArticles] = useState<Article[]>();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const {data} = await axios.get<Article[]>("/api/articles");
                setArticles(data);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <ul>
                {articles?.map((article) => (
                    <li key={article.id}
                        className={styles.tableRow}
                        style={{gridTemplateColumns: `repeat(${article?.images ? 3 : 2}, 1fr)`}}>
                        <h3>{article.title_sk}</h3>

                        {article?.images && article.images.length > 0 && (
                            <div>
                                {article.images.map((img, index) => {
                                    return (
                                        <div key={index} className={styles.imageWrapper}>
                                            <Image className={styles.image}
                                                   src={img}
                                                   width={350}
                                                   height={150}
                                                   alt={"Failed to show image"}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        <AddImageBtn articleId={article.id}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}