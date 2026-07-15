"use client";

import ArticleCropper from "@/features/article/ui/gallery/ArticleCropper";
import AddImageWindow from "@/features/article/ui/gallery/AddImageWindow";
import {useState} from "react";
import {Gallery} from "@cpc/article-system";
import {useArticleEditor} from "@/app/providers/ArticleEditorProvider";

export default function GalleryEditor() {
    const {article} = useArticleEditor();
    const images = article.images;

    const [selected, setSelected] = useState<number | null>(null);

    return images.length > 0 ? (
        <div>
            {selected !== null ? (
                <ArticleCropper img={images[selected].src}
                                index={selected}
                />
            ) : (
                <Gallery images={article.images.map(
                    image => image.src
                )}/>
            )}
        </div>
    ) : (
        <AddImageWindow/>
    );
}