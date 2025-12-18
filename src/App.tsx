import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import NavSidebar from "./components/nav-sidebar";
import {useState} from "react";
import Header from "./components/header";
import Activities from "./pages/activities";
import Footer from "./components/footer";
import Activity from './pages/activity';

function App() {
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

    const closeIfOpened = () => {
        if (sidebarToggle) setSidebarToggle(false);
    }

    const toggleSidebar = () => {
        setSidebarToggle(prevState => !prevState)
    }

    return (
        <BrowserRouter>
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

                        <Route path={"/activities"} element={<Activities/>}/>

                        <Route path={"/activity/:id"} element={<Activity/>}/>
                    </Routes>

                    <Footer/>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
