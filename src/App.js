import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import NavSidebar from "./components/nav-sidebar";
import {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const closeIfOpened = () => {
        if (sidebarToggle) setSidebarToggle(false);
    }

    return (
        <BrowserRouter>
            <main>
                <NavSidebar sidebarToggle={sidebarToggle}/>
                <div onClick={() => {
                    closeIfOpened();
                }}>
                    <Header sidebarToggle={sidebarToggle}
                            setSidebarToggle={setSidebarToggle}
                    />

                    <Routes>
                        <Route index element={<Home/>}/>
                    </Routes>

                    <Footer/>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
