"use client";

import ImageCropper from "@/features/article/ui/gallery/ImageCropper";
import AddImageWindow from "@/features/article/ui/gallery/AddImageWindow";
import {useState} from "react";
import {Gallery} from "@cpc/article-system";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";
import GalleryWrapper from "@/features/article/ui/gallery/GalleryWrapper";
import AddImageBtn from "@/features/article/ui/gallery/AddImageBtn";

export default function GalleryEditor() {
    const {article} = useArticleEditor();

    const [selected, setSelected] = useState<number | null>(null);
    const [currentImage, setCurrentImage] = useState<number>(0);

    const unselectHandler = () => {
        setSelected(null);
    }

    console.log("article.images", article.images);

    return article.images.length > 0 ? (
        <div>
            <AddImageBtn/>

            {selected !== null ? (
                <Gallery images={article.images.map(src => src.original.src)}
                         setCurrImg={setCurrentImage}
                         viewport={
                             <ImageCropper index={selected}
                                           unselectHandler={unselectHandler}
                             />
                         }
                />
            ) : (
                <Gallery images={article.images.map(src => src.preview.src)}
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