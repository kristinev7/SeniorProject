import React from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "../pages/main";
import Visualizer from "../pages/Visualizer";
import Algo from "../pages/Algo";

function Layout() {
    return (
        <div className="App">
            <div className="header">
                <div className="logo">
                    Path <br /> Visualizer
                </div>
                <ul>
                    <li className="link">
                        <Link to="/">Main</Link>
                    </li>
                    <li className="link">
                        <Link to="/visualizer">Visualizer</Link>
                    </li>
                    <li className="link">
                        <Link to="/algo">Algorithm Info</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/algo" element={<Algo />} />
                <Route path="/visualizer" element={<Visualizer />} />
            </Route>
        </Routes>
    );
}

export default App;
