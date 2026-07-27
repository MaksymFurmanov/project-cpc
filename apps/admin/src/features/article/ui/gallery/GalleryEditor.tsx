"use client";

import ImageCropper from "@/features/article/ui/gallery/ImageCropper";
import AddImageWindow from "@/features/article/ui/gallery/AddImageWindow";
import {useState} from "react";
import {Gallery} from "@cpc/article-system";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";
import GalleryWrapper from "@/features/article/ui/gallery/GalleryWrapper";

export default function GalleryEditor() {
    const {article} = useArticleEditor();
    const images = article.images;

    const [selected, setSelected] = useState<number | null>(null);
    const [currentImage, setCurrentImage] = useState<number>(0);

    const unselectHandler = () => {
        setSelected(null);
    }

    return images.length > 0 ? (
        <div>
            {selected !== null ? (
                <Gallery images={article.images.map(
                    image => image.src
                )}
                         setCurrImg={setCurrentImage}
                         viewport={
                             <ImageCropper img={images[selected].src}
                                           index={selected}
                                           unselectHandler={unselectHandler}
                             />
                         }
                />
            ) : (
                <Gallery images={article.images.map(
                    image => image.src
                )}
                         setCurrImg={setCurrentImage}
                         overlay={
                             <GalleryWrapper selectImage={() => {
                                 setSelected(currentImage);
                             }}/>
                         }
                />
            )}
        </div>
    ) : (
        <AddImageWindow/>
    );
}