import React from "react";
import ReactPlayer from "react-player";
import "../components/AlgoPage.css";
import Grid from '@mui/material/Grid';

function DFSPage() {
    return (
    <div className="main">
        <Grid  container xs={12} spacing={2} direction="column">
            <Grid item xs={12}>
                 <ReactPlayer url ="https://www.youtube.com/embed/7fujbpJ0LB4"/>
            </Grid>
        <div id="info">
            <Grid item xs={12} container spacing={{xs:4, md:4}} direction="row" >
                <Grid item xs={6}>
                    <h1>DFS Information</h1>
                    <p>
                    Used genereate mazes, traverse trees in specific order, build decision trees, 
                    detect a cycle in a graph. <br/>
                        - DFS uses a Stack (Last In First Out) <br/>
                        - Explores deep through each node before backtracking<br/>
                    </p>
                    <h2>Time and Space Complexity</h2>    
                    <p>
                        - <b>Time</b>: O(|V| + |E|) (Worse Case Performance)<br/>
                        - <b>Space</b>: O(|V|)
                    </p>
                </Grid>
            <Grid item xs={6} spacing={2}>
                        <h1>DFS Pseudocode</h1>
                            <p>
                                
                                <ul>
                                <li>1. Initialize empty stack for all nodes, S</li>
                                <li>2. Push start node to S</li>
                                <li>3. While S is not empty</li>
                                <li>4. Pop node, U </li>
                                <li>5. check if node is visited</li>
                                <li>6. if no: mark node, U,  as visited</li>
                                <li>7. visit neighboring node, W, of U </li> 
                                <li>8. Push node W into S </li>
                                <li>9. End when all nodes are visited</li>
                            </ul>
                            </p> 
            </Grid>
            </Grid>
        </div>
        </Grid>
    </div>
    );
}
export default DFSPage;