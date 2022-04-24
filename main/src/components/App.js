import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "../pages/main";
import Visualizer from "../pages/Visualizer";
import Algo from "../pages/Algo";
import DFSInfo  from "./DFSInfo";
import  BFSInfo  from "./BFSInfo";
import  AstarInfo  from "./AstarInfo";
import  DijkstraInfo  from "./DijkstraInfo";

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
                        <Route path="DijkstraInfo" element ={<DijkstraInfo/>}/>
                        <Route path ="AstarInfo" element={<AstarInfo/>}/>
                        <Route path = "DFSInfo" element={<DFSInfo/>} />
                        <Route path = "BFSInfo" element={<BFSInfo/>}/> 
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
