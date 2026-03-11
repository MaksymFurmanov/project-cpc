import { Outlet, ScrollRestoration } from "react-router-dom";
import NavSidebar from "./components/nav-sidebar";
import Header from "./components/header";
import Footer from "./components/footer";

import clsx from "clsx";
import { useLanguage } from "./providers/languageProvider";
import useSidebar from "./hooks/useSidebar";

export default function Layout() {
    const { sidebarToggle, toggleSidebar, closeIfOpened } = useSidebar();
    const { isChanging } = useLanguage();

    return (
        <div className={clsx("pageWrapper", { fadeOut: isChanging })}>
            <main>
                <NavSidebar
                    sidebarToggle={sidebarToggle}
                    closeIfOpened={closeIfOpened}
                />

                <div
                    className={`content ${sidebarToggle && "moveContent"}`}
                    onClick={() => closeIfOpened()}
                >
                    <Header
                        sidebarToggle={sidebarToggle}
                        toggleSidebar={toggleSidebar}
                    />

                    <Outlet />

                    <Footer />
                </div>
            </main>

            <ScrollRestoration />
        </div>
    );
}