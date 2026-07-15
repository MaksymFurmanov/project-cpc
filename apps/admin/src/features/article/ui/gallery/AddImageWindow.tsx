"use client";

import styles from "./article.gallery.module.css";
import {ChangeEvent} from "react";
import clsx from "clsx";

import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";

export default function AddImageWindow() {
    const {article, setImages} = useArticleEditor();

    const addImage = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const previewUrl = URL.createObjectURL(file);

        setImages([
            ...article.images,
            {
                src: previewUrl,
                file,
            },
        ]);

        e.target.value = "";
    };

    return (
        <div className={styles.addImgWindow}>
            <input
                className={styles.addImgInput}
                id={"article-image-upload"}
                type={"file"}
                accept={"image/*"}
                onChange={addImage}
            />

            <label
                className={clsx(
                    "primaryBtn",
                    styles.addImgBtn
                )}
                htmlFor={"article-image-upload"}
            >
                Add image
            </label>
        </div>
    );
}