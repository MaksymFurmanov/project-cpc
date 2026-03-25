import ArticleCard from "./ArticleCard";
import {ArticleType} from "../../types";
import {useArticlesPage} from "../../hooks/useArticlesPage";
import ArticlesListLoading from "../skeletons/articles-list-loading/ArticlesListLoading";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import Pagination from "./Pagination";

export default function ArticlesList({type}: {
    type: ArticleType
}) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const currentPage = Number(searchParams.get("page")) || 1;

    const {articles, loading, totalPages} = useArticlesPage(currentPage, type);

    const handlePageChange = (page: number) => {
        navigate(`${location.pathname}?page=${page}`);
    };
    if (loading) return <ArticlesListLoading/>;

    return (
        <div>
            <Pagination
                curr={currentPage}
                selectFn={handlePageChange}
                total={totalPages}
            />

            {articles.map((article, index) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    lang={"en"}
                    isLast={index !== articles.length - 1}
                    currentPage={currentPage}
                />
            ))}

            <Pagination
                curr={currentPage}
                selectFn={handlePageChange}
                total={totalPages}
            />
        </div>
    );
}