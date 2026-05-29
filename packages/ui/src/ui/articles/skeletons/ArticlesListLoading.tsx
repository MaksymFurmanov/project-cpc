import styles from "./articles-skeletons.module.css";
import {ArticleLoading} from "./ArticleLoading";

export function ArticlesListLoading() {
    return (
        <div className={styles.container}>
            <div>
                <div className={`${styles.paginationSkeleton} ${styles.skeleton}`}/>
            </div>
            <ArticleLoading/>
        </div>
    );
}