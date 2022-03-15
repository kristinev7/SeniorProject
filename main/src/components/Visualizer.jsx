import React, { useState } from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";
import { FiAlertTriangle } from "react-icons/fi";

export default function Visualizer() {
    const [visualize, setVisualize] = useState(false);
    const [error, setError] = useState(false);
    // idk how I feel about doing it this way. There is probably some better way but for now this works
    const [gridOneIsReady, setGridOneIsReady] = useState(false);
    const [gridTwoIsReady, setGridTwoIsReady] = useState(false);

    const handleClick = () => {
        if (!gridOneIsReady || !gridTwoIsReady) {
            console.log("Choose Algorithms");
            setError(true);
            return;
        }
        setError(false);
        setVisualize(true);
    };

    return (
        <div>
            <Navbar handleClick={handleClick} visualize={visualize} />
            {error && (
                <div className="error-msg">
                    <FiAlertTriangle size={25} />
                    <h2> Choose Algorithms</h2>
                </div>
            )}
            <main>
                <div className="Grid-container">
                    <Grid
                        setIsReady={setGridOneIsReady}
                        setVisualize={setVisualize}
                        visualize={visualize}
                        gridName="first"
                    />
                </div>
                <div className="Grid-container">
                    <Grid
                        setIsReady={setGridTwoIsReady}
                        setVisualize={setVisualize}
                        visualize={visualize}
                        gridName="second"
                    />
                </div>
            </main>
        </div>
    );
}
