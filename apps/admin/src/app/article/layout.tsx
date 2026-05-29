import {ReactNode} from "react";

export default function ArticleLayout({children}: {
    children: ReactNode;
}) {
    return (
        <section className={"white-bg"}>
            {children}
        </section>
    );
}