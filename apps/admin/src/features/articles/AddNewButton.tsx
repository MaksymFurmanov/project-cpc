import styles from "./articles.module.css";
import {AiFillPlusCircle} from "react-icons/ai";
import Link from "next/link";

export default function AddNewButton() {
    return (
        <div className={styles.addNewButton}>
            <Link href={"/article/new"}>
                <AiFillPlusCircle/>
            </Link>
        </div>
    );
}