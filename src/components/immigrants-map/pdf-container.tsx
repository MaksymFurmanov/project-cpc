import styles from "./immigrants-map.module.css";
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfContainer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const url = "/pdf/immigrants-map.pdf";

    return (
        <div className={styles.container}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className={styles.pdfContainer}>
                    <Viewer
                        fileUrl={url}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
            </Worker>
        </div>
    );
}