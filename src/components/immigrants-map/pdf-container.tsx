import {useEffect, useRef, useState} from "react";
import styles from "./immigrants-map.module.css";
import {useTranslation} from "react-i18next";
import clsx from "clsx";

const PDF_MIN_WIDTH = 420;
const PDF_FILE_PATH = "/pdf/immigrants-map.pdf";

export default function PdfContainer() {
    const {t} = useTranslation("immigrants-map");

    const [showPDF, setShowPDF] = useState<boolean>(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const enterFullscreen = () => {
        if (wrapperRef.current?.requestFullscreen) {
            wrapperRef.current.requestFullscreen();
        }
    };

    useEffect(() => {
        const checkWidth = () => {
            setShowPDF(window.innerWidth >= PDF_MIN_WIDTH);
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const openPdfMobile = () => {
        window.open(
            PDF_FILE_PATH,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className={styles.pdfContainer}>
            <div ref={wrapperRef}
                 className={clsx(styles.viewer, "not-selectable")}
                 style={{height: showPDF ? "80dvh" : "100%"}}>
                {showPDF ? (
                    <iframe src={`${PDF_FILE_PATH}#zoom=50`}
                            title={"PDF viewer"}
                            className={styles.pdf}
                    />
                ) : (
                    <div className={styles.previewContainer}
                         onClick={openPdfMobile}>
                        <img
                            src={"/img/book-preview.jpg"}
                            alt={""}
                            className={styles.preview}
                        />

                        <div className={styles.previewShade}>
                            <span className={styles.previewText}>
                                {t("openFile")}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {showPDF && (
                <button onClick={enterFullscreen}
                        className={styles.fullscreenBtn}>
                    {t("openFile")}
                </button>
            )}
        </div>
    );
}