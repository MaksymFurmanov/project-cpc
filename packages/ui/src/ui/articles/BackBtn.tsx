"use client";

import styles from "./articles.module.css";
import {ReactNode} from "react";

export function BackBtn({children, onBack}: {
    children?: ReactNode,
    onBack: () => void,
}) {
    return (
        <button className={styles.backBtn} onClick={() => onBack()}>
            {children}
        </button>
    );
}