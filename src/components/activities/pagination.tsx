import styles from "./activities.module.css";
import clsx from "clsx";

export default function Pagination({curr, selectFn, total}: {
    curr: number,
    selectFn: (index: number) => void,
    total: number,
}) {
    return (
        <div className={styles.pagination}>
            {Array
                .from({length: total}, (_, i) => i + 1)
                .map((_, i) => {
                        return (
                            <button key={i}
                                    onClick={() => selectFn(i + 1)}
                                    className={clsx(curr === i + 1 ? styles.active : "", "not-selectable")}
                            >
                                {i + 1}
                            </button>
                        );
                    }
                )
            }
        </div>
    );
}