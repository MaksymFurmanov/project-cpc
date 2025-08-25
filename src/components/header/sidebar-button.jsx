import styles from "./header.module.css";
import {IoMdClose} from "react-icons/io";
import {RiMenu2Line} from "react-icons/ri";

export default function SidebarButton({sidebarToggle, setSidebarToggle}) {
    const openSidebar = () => {
        setSidebarToggle(true);
    }

    const closeSidebar = () => {
        setSidebarToggle(false);
    }

    return (
        <div className={styles.burgerIconContainer}>
            {sidebarToggle
                ? <IoMdClose onClick={() => {
                    closeSidebar()
                }}/>
                : <RiMenu2Line onClick={() => {
                    openSidebar()
                }}/>
            }
        </div>
    );
}