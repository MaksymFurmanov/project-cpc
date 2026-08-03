import styles from "../../article.module.css";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";
import {useRouter} from "next/navigation";

export default function PublishToggle() {
    const {article, submitArticle} = useArticleEditor();
    const {push} = useRouter();

    const handlePublish = async () => {
        try{
            await submitArticle(true);

            push("/articles");
        } catch (e) {
            console.error(e);
        }
    }

    const handleUnpublish = async () => {
        try{
            await submitArticle(false);

            push("/articles");
        } catch (e) {
            console.error(e);
        }
    }

    return article.published ? (
        <button className={styles.actionBtn}
                onClick={handleUnpublish}>
            Skryť
        </button>
    ) : (
        <button className={styles.actionBtn}
                onClick={handlePublish}>
            Publikovať →
        </button>
    );
}