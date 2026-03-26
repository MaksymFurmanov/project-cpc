import styles from "./articles.module.css";
import {ArticleType, MultilingualArticle} from "../../types";
import Gallery from "./Gallery";
import {useMemo} from "react";
import i18n from "i18next";
import localizeArticle from "../../lib/localizeArticle";
import ReactMarkdown from "react-markdown";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";

export default function Article({articleData, type}: {
    articleData: MultilingualArticle,
    type: ArticleType
}) {
    const navigate = useNavigate();
    const lang = i18n.language.toLowerCase().slice(0, 2);
    const {t} = useTranslation(["articles"]);

    const {title, text, date} = useMemo(
        () => localizeArticle(articleData, lang),
        [articleData, lang]
    );

    const location = useLocation();
    const page = location.state?.page ?? 1;

    const backHandler = () => {
        switch (type) {
            case ArticleType.EVENT:
                navigate(`/events?page=${page}`);
                break;

            case ArticleType.NEWS:
                navigate(`/news?page=${page}`);
                break;

            default:
                throw new Error("Page not found");
        }
    };

    return (
        <article className={styles.article}>
            <button className={styles.backBtn}
                    onClick={backHandler}>
                ← &nbsp;{t("backBtn")}
            </button>
            <div>
                <Gallery images={articleData.images}/>
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.articleTitle}>
                    {title}
                </h2>
                <p className={styles.date}>
                    {date}
                </p>
                <p className={styles.articleText}>
                    <ReactMarkdown>
                        {text}
                    </ReactMarkdown>
                </p>
            </div>

        </article>
    );
}