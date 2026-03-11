import styles from "./articles-list-loading.module.css";

export default function GalleryLoading() {
    return (
        <div className={`${styles.gallerySkeleton} ${styles.skeleton}`}/>
    );
}