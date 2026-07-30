"use client";

import styles from "./article.gallery.module.css";
import {useImageUpload} from "@/lib/hooks/useImageUpload";

export default function AddImageBtn() {
    const uploadHandler = useImageUpload();

    return (
        <div>
            <input
                className={styles.addImgInput}
                id={"article-image-upload"}
                type={"file"}
                accept={"image/*"}
                onChange={uploadHandler}
            />

            <label htmlFor={"article-image-upload"}
                   className={styles.addImgBtn}>
                Add image
            </label>
        </div>
    );
}