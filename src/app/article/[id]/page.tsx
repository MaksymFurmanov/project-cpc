"use client";

import {useArticles} from "@/app/providers/ArticlesProvider";
import {useParams} from "next/navigation";
import {ArticleLoading} from "cpc-shared";
import Article from "@/features/articles/ui/article/Article";

export default function ArticlePage() {
    const params = useParams();
    const articleId = params.id! as string;
    if (!articleId) throw new Error("No article found");

    const {articlesMap, loading} = useArticles();

    const article = articlesMap.get(articleId);

    if (!article && !loading) throw new Error("No article found");

    return !article ? <ArticleLoading/> : <Article articleData={article} />;
}