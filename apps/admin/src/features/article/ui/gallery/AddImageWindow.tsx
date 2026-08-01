"use client";

import styles from "./article.gallery.module.css";
import {useImageUpload} from "@/features/article/hooks/useImageUpload";

export default function AddImageWindow() {
    const uploadHandler = useImageUpload();

    return (
        <div className={styles.addImgWindow}>
            <input
                className={styles.addImgInput}
                id={"window-upload-image"}
                type={"file"}
                accept={"image/*"}
                onChange={uploadHandler}
            />

            <label htmlFor={"window-upload-image"}>
                <p>Pridať obrazok</p>
            </label>
        </div>
    );
}