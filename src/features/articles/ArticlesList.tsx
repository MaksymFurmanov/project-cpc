"use client";

import {useEffect, useState} from "react";
import {Article} from "@/features/articles/articles.types";
import axios from "axios";

export default function ArticlesList() {
    const [articles, setArticles] = useState<Article[]>();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const { data } = await axios.get<Article[]>("/api/articles");
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
                    <li key={article.id}>
                        {article.title_sk}
                    </li>
                ))}
            </ul>
        </div>
    );
}