"use client";

import styles from "./article.gallery.module.css";

export default function GalleryWrapper({selectImage}: {
    selectImage: () => void
}) {
    return (
        <div className={styles.galleryHover}>
            <button className={styles.selectImageBtn}
                    onClick={selectImage}>
                Select image
            </button>
        </div>
    );
}