"use client";

import styles from "../../articles.module.css";
import {Editor} from "@tiptap/core";
import TurndownService from "turndown";

export function SaveBtn({editor, articleId, lang}: {
    editor: Editor | null,
    articleId: string,
    lang: string
}) {
    const turndown = new TurndownService();

    const handleSave = async () => {
        if (!editor) return;

        const html = editor.getHTML();
        const markdown = turndown.turndown(html);

        await fetch(`/api/articles/${articleId}`, {
            method: "POST",
            body: JSON.stringify({text: markdown, lang: lang}),
        });
    }

    return (
        <button className={styles.SaveBtn} onClick={handleSave}>
            Uložiť
        </button>
    );
}