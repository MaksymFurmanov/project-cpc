import styles from "@/features/article/article.module.css";
import {useCallback, useEffect, useRef, useState} from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export default function ZoomBar({zoom, setZoom}: {
    zoom: number,
    setZoom: (zoom: number) => void
}) {
    const barRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const updateZoomFromPosition = useCallback((clientX: number) => {
        if (!barRef.current) return;

        const rect = barRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = clamp(x / rect.width, 0, 1);

        const newZoom = MIN_ZOOM + (MAX_ZOOM - MIN_ZOOM) * percent;

        setZoom(newZoom);
    }, [setZoom]);

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setIsDragging(true);
        updateZoomFromPosition(e.clientX);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        updateZoomFromPosition(e.clientX);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
        setIsDragging(false);
    };

    useEffect(() => {
        const up = () => setIsDragging(false);
        window.addEventListener("pointerup", up);
        return () => window.removeEventListener("pointerup", up);
    }, []);

    const progress = (zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM);

    return (
        <div className={styles.zoomBar}
             ref={barRef}
             onPointerDown={handlePointerDown}
             onPointerMove={handlePointerMove}
             onPointerUp={handlePointerUp}
        >
            <div className={styles.zoomTrackFill}
                 style={{width: `${progress * 100}%`}}
            />
            <div className={styles.zoomThumb}
                 style={{left: `${progress * 100}%`}}
            />
        </div>
    );
}