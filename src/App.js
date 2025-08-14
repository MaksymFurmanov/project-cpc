import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import sidebarStyles from "./components/nav-sidebar/nav-sidebar.module.css";
import Sidebar from "./components/nav-sidebar";
import {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const closeIfOpened = () => {
        if(sidebarToggle) setSidebarToggle(false);
    }

    return (
        <main className={`${sidebarToggle && sidebarStyles.shiftRight}`}>
            <BrowserRouter>
                <Sidebar/>
                <div className={"content"} onClick={() => {closeIfOpened()}}>
                    <Header sidebarToggle={sidebarToggle}
                            setSidebarToggle={setSidebarToggle}
                    />

                    <Routes>
                        <Route index element={<Home/>}/>
                    </Routes>

                    <Footer/>
                </div>
            </BrowserRouter>
        </main>
    );
}

export default App;
