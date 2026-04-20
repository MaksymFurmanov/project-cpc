"use client";

import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {marked} from "marked";
import {SaveBtn} from "@/features/articles/ui/article/SaveBtn";

export function TipTapEditorContent({text, lang, articleId}: {
    text: string,
    lang: string,
    articleId?: string
}) {
    if (!articleId) throw new Error("No article id found");

    const editor = useEditor({
        extensions: [StarterKit],
        content: marked.parse(text),
        immediatelyRender: false,
    });

    return (
        <div>
            <EditorContent editor={editor}/>
            <SaveBtn articleId={articleId}
                     editor={editor}
                     lang={lang}
            />
        </div>
    );
}