import styles from "./articles-list-loading.module.css";
import clsx from "clsx";

export default function GalleryLoading() {
    return (
        <div className={clsx(styles.gallerySkeleton, styles.skeleton)}/>
    );
}