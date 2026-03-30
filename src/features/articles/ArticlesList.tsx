"use client";

import styles from "./articles.module.css";
import {useEffect, useState} from "react";
import {Article} from "@/features/articles/articles.types";
import axios from "axios";
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

    const handleImageAdded = (articleId: string, imageUrl: string) => {
        setArticles((prev) =>
            prev?.map((article) =>
                article.id === articleId
                    ? {
                        ...article,
                        images: [...(article.images || []), imageUrl],
                    }
                    : article
            )
        );
    };

    return (
        <div className={styles.ArticlesList}>
            <ul>
                {articles?.map((article) => (
                    <li key={article.id}
                        className={styles.tableRow}>
                        <h3>{article.title_sk}</h3>

                        <p>{article.date.toString()}</p>

                        <AddImageBtn articleId={article.id}
                                     onImageAdded={handleImageAdded}
                        />

                        {/*Images preview*/}
                        {/*<div>
                            {
                                article?.images &&
                                article.images.length > 0 &&
                                article.images.map((img, index) => {
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
                                    }
                                )
                            }
                        </div>*/}
                    </li>
                ))}
            </ul>
        </div>
    );
}