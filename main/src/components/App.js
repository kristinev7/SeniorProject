import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Main from "./main";
import Visualizer from "./Visualizer";
import Algo from "./Algo";


function Layout() {
    return (
        <div className="App" >   
                <div className ="header">
                    <div className ="logo" >
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
        </div>
    )

};

function App() {
    return (
        <Router>
            <Layout />
            <Routes>
                <Route path ="/" element={<Main />}/>
                <Route path="/algo" element={<Algo />}/>
                <Route path ="/visualizer" element={<Visualizer />}/> 
            </Routes>
        </Router>
    );
}

export default App;
