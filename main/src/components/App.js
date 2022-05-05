import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "../pages/main";
import Visualizer from "../pages/Visualizer";
import Algo from "../pages/Algo";
import BFSPage from "../pages/BFSPage";
import DFSPage from "../pages/DFSPage";
import DijkstraPage from "../pages/DijkstraPage";
import AStarPage from "../pages/AStarPage";
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
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/visualizer" element={<Visualizer />} />
                    <Route path="/algo" element={<Algo />}>
                        <Route index element ={<BFSPage/>}/>
                        <Route path ="DFSPage" element={<DFSPage/>}/>
                        <Route path = "DijkstraPage" element={<DijkstraPage/>} />
                        <Route path = "AStarPage" element={<AStarPage/>}/> 
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
