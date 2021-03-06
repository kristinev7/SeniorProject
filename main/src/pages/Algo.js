import React, { useEffect, useRef } from "react";
import "../components/Algo.css";
import gsap from "gsap";
import Transition from "../components/Transition";
// import "../components/AlgoLayout.css";
import { Link, Outlet } from "react-router-dom";

function Algo () {
    const algo = gsap.timeline();
    const algoh1 = useRef(null);
    const algoimg = useRef(null);

    useEffect(() => {
        algo.from(
            algoh1.current,
            { duration: 0.6, skewX: 10, x: -100, opacity: 0 },
            "-=3.5",
        );
        algo.from(
            algoimg.current,
            { duration: 0.5, y: -200, opacity: 0 },
            "-=3",
        );
    });
    
    return (
        
        <div>
           <Transition timeline={algo} />
           <div className="link">
                    <Link to="/algo"> Breadth First Search Algorithm </Link>
                    <br/>
                    <Link to="/algo/DFSPage">Depth First Search Algorithm</Link>
                    <br/>
                    <Link to ="/algo/DijkstraPage"> Dijkstra's Algorithm </Link>
                    <br/>
                    <Link to="/algo/AstarPage"> A* Algorithm </Link>
                    
            </div>
            <Outlet />
            
            {/* <div className="container-algo">
                <h1 ref={algoh1} >Algorithm Page</h1>
            </div>
            <div className="algo-image algo-overlay"></div> */}
           
           
        </div>
    );
}
export default Algo;
