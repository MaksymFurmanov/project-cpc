import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {ArticleType, MultilingualArticle} from "../types";
import Article from "../components/articles/Article";
import {getArticleById} from "../api/articlesData";
import ArticleLoading from "../components/skeletons/articles-list-loading/ArticleLoading";

export default function NewsPage() {
    const params = useParams();
    const newsId = params.id!;

    const {data: article, isLoading, isError} = useQuery<MultilingualArticle | null>({
        queryKey: ["news", newsId],
        queryFn: () => getArticleById(newsId!),
        staleTime: 1000 * 60 * 5,
    });

    if(isError) console.error("Error fetching news...");

    return (
        <main>
            {isLoading ? (
                <div style={{margin: "5em 0 3em 0"}}>
                    <ArticleLoading/>
                </div>
            ) : article && (
                <Article articleData={article} type={ArticleType.NEWS}/>
            )}
        </main>
    );
}