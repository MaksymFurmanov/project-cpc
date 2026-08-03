"use client";

import styles from "../../article.module.css";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";
import {useRouter} from "next/navigation";

export function SaveBtn() {
    const {submitArticle} = useArticleEditor();
    const {push} = useRouter();

    const handleSave = async () => {
        try {
            await submitArticle();

            push("/articles");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button type={"button"}
                className={styles.actionBtn}
                onClick={handleSave}
        >
            Uložiť
        </button>
    );
}