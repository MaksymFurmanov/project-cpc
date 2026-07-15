"use client";

import styles from "./article.text.module.css";
import {useLanguage} from "@/app/providers/LanguageProvider";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";

export function SaveBtn() {
    const {lang} = useLanguage();

    const {saveArticle} = useArticleEditor();

    const handleSave = async () => {
        await saveArticle(lang);
    };

    let uploadBtnText;

    switch (lang) {
        case "en":
            uploadBtnText = "Upload";
            break;
        case "uk":
            uploadBtnText = "Зберегти";
            break;
        default:
            uploadBtnText = "Uložiť";
    }

    return (
        <button
            type="button"
            className={styles.saveBtn}
            onClick={handleSave}
        >
            {uploadBtnText}
        </button>
    );
}