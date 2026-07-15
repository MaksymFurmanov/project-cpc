"use client";

import styles from "./article.gallery.module.css";
import {useCallback, useState} from "react";
import Cropper, {Area} from "react-easy-crop";
import ZoomBar from "@/features/article/ui/gallery/ZoomBar";
import {useIsDesktop} from "@/lib/hooks/useIsDesktop";
import ImageButtons from "./ImageButtons";

export default function ArticleCropper({img, index}: {
    img: string,
    index: number
}) {
    const [crop, setCrop] = useState<{ x: number, y: number }>({x: 0, y: 0});
    const [zoom, setZoom] = useState<number>(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const isDesktop = useIsDesktop();

    const handleCropComplete = useCallback((_: Area, area: Area) => {
        setCroppedAreaPixels(area);
    }, []);

    return (
        <div className={styles.articleCropper}>
            <Cropper image={img}
                     crop={crop}
                     zoom={zoom}
                     aspect={isDesktop ? 3 : 2}
                     objectFit={"cover"}
                     onCropChange={setCrop}
                     onCropComplete={handleCropComplete}
                     onZoomChange={setZoom}
            />

            <ZoomBar zoom={zoom}
                     setZoom={setZoom}
            />

            <ImageButtons img={img}
                          index={index}
                          croppedAreaPixels={croppedAreaPixels}
            />
        </div>
    );
}