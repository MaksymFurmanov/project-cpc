"use client";

import styles from "../../article.module.css";
import {BackBtn} from "@cpc/article-system";
import ArticlesType from "@/features/article/ui/heading/ArticlesType";
import LanguageSwitcher from "@/features/article/ui/heading/LanguageSwitcher";
import {useLanguage} from "@/app/providers/LanguageProvider";
import {useRouter} from "next/navigation";

export default function EditorHeading() {
    const {push} = useRouter();

    const {lang} = useLanguage();

    const backHandler = () => {
        push("/articles");
    }

    let backBtnText;
    switch (lang) {
        case "en":
            backBtnText = "Back";
            break;
        case "uk":
            backBtnText = "Назад";
            break;
        default:
            backBtnText = "Späť";
    }

    return (
        <div className={styles.editorHeading}>
            <BackBtn onBack={backHandler}>
                ← {backBtnText}
            </BackBtn>

            <ArticlesType/>

            <LanguageSwitcher/>
        </div>
    );
}