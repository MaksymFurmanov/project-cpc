"use client";

import axios from "axios";
import styles from "./article.gallery.module.css";
import {getCroppedImg} from "@/lib/utils/getCroppedImage";
import {Area} from "react-easy-crop";
import {useParams} from "next/navigation";

export default function ImageButtons({img, index, croppedAreaPixels}: {
    img: string,
    index: number,
    croppedAreaPixels: Area | null
}) {
    return (
        <div className={styles.imageButtons}>
            <ChangeButton/>
            <SaveBtn img={img}
                     index={index}
                     croppedAreaPixels={croppedAreaPixels}
            />
        </div>
    );
}

const SaveBtn = ({img, index, croppedAreaPixels}: {
    img: string,
    index: number,
    croppedAreaPixels: Area | null
}) => {
    const params = useParams();
    const articleId = params.id as string;

    const handleSave = async () => {
        try {
            if (!croppedAreaPixels) return;

            const croppedImage = await getCroppedImg(img, croppedAreaPixels);

            const formData = new FormData();
            formData.append("file", croppedImage);
            formData.append("index", index.toString());

            axios.post(`/api/articles/${articleId}/images`, {
                formData
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <button onClick={handleSave}>
            Uložiť
        </button>
    );
}

const ChangeButton = () => {
    return (
        <button>
            Zmeniť
        </button>
    );
}