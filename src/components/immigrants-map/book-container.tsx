import {useEffect, useRef, useState} from "react";
import styles from "./immigrants-map.module.css";
import {useTranslation} from "react-i18next";
import clsx from "clsx";

const FLIP_VIEWER_PATH = "/flipbook/index.html";

export default function BookContainer() {
    const {t} = useTranslation("immigrants-map");

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const detectDevice = () => {
            const touchDevice =
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0;

            setIsMobile(touchDevice);
        };

        detectDevice();
    }, []);

    const enterFullscreen = () => {
        if (wrapperRef.current?.requestFullscreen) {
            wrapperRef.current.requestFullscreen();
        }
    };

    const openMobileViewer = () => {
        window.open(
            FLIP_VIEWER_PATH,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleIframeLoad = () => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const doc = iframe.contentDocument;
        if (!doc) return;

        if (doc.getElementById("flipbook-overrides")) return;

        const link = doc.createElement("link");
        link.id = "flipbook-overrides";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/flipbook-overrides.css";

        doc.head.appendChild(link);
    };

    return (
        <div className={styles.pdfContainer}>
            <div
                ref={wrapperRef}
                className={clsx(styles.viewer, "not-selectable")}
                style={{height: isMobile ? "auto" : "80dvh"}}
            >
                {!isMobile ? (
                    <iframe
                        ref={iframeRef}
                        src={FLIP_VIEWER_PATH}
                        title="Flipbook viewer"
                        className={styles.pdf}
                        onLoad={handleIframeLoad}
                    />
                ) : (
                    <div
                        className={styles.previewContainer}
                        onClick={openMobileViewer}
                    >
                        <img
                            src={"/img/1.jpg"}
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

            {!isMobile && (
                <button
                    onClick={enterFullscreen}
                    className={styles.fullscreenBtn}
                >
                    {t("openFile")}
                </button>
            )}
        </div>
    );
}