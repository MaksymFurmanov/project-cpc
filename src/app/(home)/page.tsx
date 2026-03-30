import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={"pageCenter"}>
            <Link href={"/articles"}
                  className={styles.adminBtn}>
                Admin
            </Link>
        </main>
    );
}