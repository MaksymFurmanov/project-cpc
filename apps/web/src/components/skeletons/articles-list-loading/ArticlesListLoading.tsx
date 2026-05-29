import styles from "./articles-list-loading.module.css";
import ArticleLoading from "./ArticleLoading";

export default function ArticlesListLoading() {
    return (
        <div className={styles.container}>
            <div>
                <div className={`${styles.paginationSkeleton} ${styles.skeleton}`}/>
            </div>
            <ArticleLoading/>
        </div>
    );
}