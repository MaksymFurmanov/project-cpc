import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {ArticleType, MultilingualArticle} from "../types";
import {getArticleById} from "../api/articlesData";
import Article from "../components/articles/Article";
import ArticleLoading from "../components/skeletons/articles-list-loading/ArticleLoading";

export default function EventPage() {
    const params = useParams();
    const eventId = params.id!;

    const {data: article, isLoading, isError} = useQuery<MultilingualArticle | null>({
        queryKey: ["event", eventId],
        queryFn: () => getArticleById(eventId!),
        staleTime: 1000 * 60 * 5,
    });

    if (isError) console.error("Error fetching event...");

    return (
        <main>
            {isLoading ? (
                <div style={{margin: "5em 0 3em 0"}}>
                    <ArticleLoading/>
                </div>
            ) : article && (
                <Article articleData={article} type={ArticleType.EVENT}/>
            )}
        </main>
    );
}