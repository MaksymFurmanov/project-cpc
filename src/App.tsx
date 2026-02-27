import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import NavSidebar from "./components/nav-sidebar";
import Header from "./components/header";
import Activities from "./pages/activities";
import Footer from "./components/footer";
import Activity from './pages/activity';
import ImmigrantsMap from "./pages/immigrants-map";
import useSidebar from "./hooks/use-sidebar";
import React from "react";
import clsx from "clsx";
import {useLanguage} from "./providers/languageProvider";

function App() {
    const {sidebarToggle, toggleSidebar, closeIfOpened} = useSidebar();

    const {isChanging} = useLanguage();

    return (
        <BrowserRouter>
            <div className={clsx("pageWrapper", {fadeOut: isChanging})}>
                <main>
                    <NavSidebar sidebarToggle={sidebarToggle} closeIfOpened={closeIfOpened}/>

                    <div className={`content ${sidebarToggle && 'moveContent'}`}
                         onClick={() => {
                             closeIfOpened();
                         }}>
                        <Header sidebarToggle={sidebarToggle}
                                toggleSidebar={toggleSidebar}
                        />

                        <Routes>
                            <Route index element={<Home/>}/>

                            <Route path={"/activities/:page"} element={<Activities/>}/>

                            <Route path={"/activity/:id"} element={<Activity/>}/>

                            <Route path={"/immigrants-map"} element={<ImmigrantsMap/>}/>
                        </Routes>

                        <Footer/>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
