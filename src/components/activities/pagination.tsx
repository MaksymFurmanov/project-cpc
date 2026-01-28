import styles from "./activities.module.css";
import clsx from "clsx";

export default function Pagination({curr, selectFn, max}: {
    curr: number,
    selectFn: (index: number) => void,
    max: number,
}) {
    if(max < 2) return null;

    return (
        <div className={styles.pagination}>
            {Array
                .from({length: max}, (_, i) => i + 1)
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