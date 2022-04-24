import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import { FiAlertTriangle } from "react-icons/fi";
import "../components/visualizer.css";

const startNodeRows = 2; 
const startNodeCols = 10;
const endNodeRows = 47;
const endNodeCols = 10;

export default function Visualizer() {
    const [visualize, setVisualize] = useState(false);
    const [error, setError] = useState(false);
    // idk how I feel about doing it this way. There is probably some better way but for now this works
    const [gridOneIsReady, setGridOneIsReady] = useState(false);
    const [gridTwoIsReady, setGridTwoIsReady] = useState(false);
    const [isGridOneAnimating, setIsGridOneAnimating] = useState(false);
    const [isGridTwoAnimating, setIsGridTwoAnimating] = useState(false);

    const getGridWithoutPath = (grid) => {
        let newGrid = grid.slice();
        for (let row of grid) {
            for (let node of row) {
                let newNode = {
                    row: node.row,
                    col: node.col,
                    startNode:
                        node.row === startNodeRows &&
                        node.col === startNodeCols,
                    endNode:
                        node.row === endNodeRows && node.col === endNodeCols,
                    previousNode: null,
                    distance: Infinity,
                    isWall: node.isWall,
                    isVisited: false,
                };
                newGrid[node.row][node.col] = newNode;
            }
        }
        return newGrid;
    };

    const clearPath = (grid, gridName) => {
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                let node = document.getElementById(`${gridName}-${row}-${col}`);
                if (
                    node.className === "node node-shortest-path" ||
                    node.className === "node node-visited"
                ) {
                    document.getElementById(
                        `${gridName}-${row}-${col}`,
                    ).className = "node";
                }
            }
        }
        const newGrid = getGridWithoutPath(grid);
        return newGrid;
    };

    const handleClick = () => {
        if (!gridOneIsReady || !gridTwoIsReady) {
            console.log("Choose Algorithms");
            setError(true);
            return;
        }

        setError(false);
        setVisualize(true);
        setIsGridOneAnimating(true);
        setIsGridTwoAnimating(true);
        return;
    };

    const getInitialGrid = (numRows = 50, numCols = 20) => {
        let initialGrid = [];

        for (let row = 0; row < numRows; row++) {
            let gridRow = [];
            for (let col = 0; col < numCols; col++) {
                gridRow.push({
                    row,
                    col,
                    startNode: row === startNodeRows && col === startNodeCols,
                    endNode: row === endNodeRows && col === endNodeCols,
                    previousNode: null,
                    distance: Infinity,
                    isWall: false,
                    isVisited: false,
                });
            }
            initialGrid.push(gridRow);
        }

        return initialGrid;
    };

    const clearGrid = (grid, gridName) => {
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col].startNode || grid[row][col].endNode)
                    continue;
                document.getElementById(`${gridName}-${row}-${col}`).className =
                    "node";
            }
        }

        let newGrid = getInitialGrid();
        return newGrid;
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
                        isAnimating={isGridOneAnimating}
                        setIsAnimating={setIsGridOneAnimating}
                        clearGrid={clearGrid}
                        clearPath={clearPath}
                        getInitialGrid={getInitialGrid}
                    />
                </div>
                <div className="Grid-container">
                    <Grid
                        setIsReady={setGridTwoIsReady}
                        setVisualize={setVisualize}
                        visualize={visualize}
                        gridName="second"
                        isAnimating={isGridTwoAnimating}
                        setIsAnimating={setIsGridTwoAnimating}
                        clearGrid={clearGrid}
                        clearPath={clearPath}
                        getInitialGrid={getInitialGrid}
                    />
                </div>
            </main>
        </div>
    );
}
