"use client";

import styles from "./article-system.module.css";
import {ReactNode} from "react";

export function BackBtn({children, onBack}: {
    children?: ReactNode,
    onBack: () => void,
}) {
    return (
        <div>
            <button className={styles.backBtn}
                    onClick={() => onBack()}>
                {children}
            </button>
        </div>
    );
}