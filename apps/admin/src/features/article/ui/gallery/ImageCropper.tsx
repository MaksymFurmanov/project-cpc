"use client";

import styles from "./article.gallery.module.css";
import {useCallback, useState} from "react";
import Cropper, {Area, Point} from "react-easy-crop";
import ZoomBar from "@/features/article/ui/gallery/ZoomBar";
import {useIsDesktop} from "@/lib/hooks/useIsDesktop";
import ImageButtons from "./ImageButtons";
import {useImgPreload} from "@cpc/article-system";
import GalleryLoading from "project-cpc/src/components/skeletons/articles-list-loading/GalleryLoading";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";
import {getCroppedImg} from "@/lib/utils/getCroppedImage";

export default function ImageCropper({index, unselectHandler}: {
    index: number,
    unselectHandler: () => void,
}) {
    const {article, updateImage} = useArticleEditor();
    const img = article.images[index];

    const [crop, setCrop] = useState<Point>(img.crop);
    const [zoom, setZoom] = useState<number>(img.zoom);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const isDesktop = useIsDesktop();

    const handleCropComplete = useCallback((_: Area, area: Area) => {
        setCroppedAreaPixels(area);
    }, []);

    const changeImage = (file: File) => {
        const url = URL.createObjectURL(file);

        updateImage(index, {
            original: {
                src: url,
                file: file
            },
            preview: {
                src: url,
                file: file
            },
            crop: {x: 0, y: 0},
            zoom: 1
        });
    }

    const saveChanges = async () => {
        try {
            if (!croppedAreaPixels) return;

            const croppedFile = await getCroppedImg(
                img.original.src,
                croppedAreaPixels
            );

            console.log("img saved with crop:", img.crop);

            updateImage(index, {
                ...img,
                preview: {
                    src: URL.createObjectURL(croppedFile),
                    file: croppedFile
                },
                crop: crop,
                zoom: zoom
            });

            unselectHandler();
        } catch (e) {
            console.error(e);
        }
    }

    const preloaded = useImgPreload([img], "original");
    if (!preloaded) return <GalleryLoading/>;

    return (
        <div className={styles.articleCropper}>
            <Cropper image={img.original.src}
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

            <ImageButtons unselectHandler={unselectHandler}
                          changeImage={changeImage}
                          saveChanges={saveChanges}
            />
        </div>
    );
}