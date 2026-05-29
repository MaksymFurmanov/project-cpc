import {useState} from "react";

const useSidebar = (): {
    sidebarToggle: boolean,
    closeIfOpened: () => void,
    toggleSidebar: () => void
} => {
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

    const closeIfOpened = () => {
        if (sidebarToggle) setSidebarToggle(false);
    }

    const toggleSidebar = () => {
        setSidebarToggle(prevState => !prevState)
    }

    return {sidebarToggle, closeIfOpened, toggleSidebar};
}

export default useSidebar;