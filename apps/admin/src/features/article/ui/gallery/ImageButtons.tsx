"use client";

import styles from "./article.gallery.module.css";
import {ChangeEvent, useRef} from "react";

export default function ImageButtons({
                                         unselectHandler,
                                         changeImage,
                                         saveChanges,
                                     }: {
    unselectHandler: () => void,
    changeImage: (file: File) => void,
    saveChanges: () => void,
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        changeImage(file);
        e.target.value = "";
    };

    return (
        <>
            <input
                ref={inputRef}
                hidden
                type={"file"}
                accept={"image/*"}
                onChange={handleChange}
            />

            <div className={styles.imageButtons}>
                <div>
                    <button onClick={unselectHandler}>
                        Zrušiť
                    </button>
                </div>

                <div className={styles.changingButtons}>
                    <button
                        onClick={() => inputRef.current?.click()}
                    >
                        Zmeniť
                    </button>

                    <button
                        onClick={saveChanges}
                    >
                        Uložiť
                    </button>
                </div>
            </div>
        </>
    );
}