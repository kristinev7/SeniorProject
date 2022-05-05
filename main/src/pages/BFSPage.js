import React from "react";
import ReactPlayer from "react-player";
import "../components/AlgoPage.css";
import Grid from '@mui/material/Grid';

function BFSPage() {
    return (
    <div className="main">
        <Grid container xs={12} spacing={2} direction="column" >
            <Grid item xs={12} className="vid">
                 <ReactPlayer url = "https://www.youtube.com/embed/oDqjPvD54Ss"/>
            </Grid>
       
        <div id="info">
            <Grid item xs={12} container spacing={{xs:4, md:4}} direction="row">
                    <Grid item xs={6}>
                    <h1>BFS Information</h1>
                    <p>
                    Used in network analysis, GPS, Search Engines, Scheduling 
                    and other types of graph analysis. <br/>
                        - BFS uses a Queue (First In First Out) <br/>
                        - Explores equally in all directions until the end node is found<br/>
                        - Guarantees the shortest path
                    </p>
                    <h2>Time and Space Complexity</h2>
                    <p>
                        - <b>|V|</b>: the number of nodes (vertices) <br/>
                        - <b>|E|</b>: the number of edges <br/>
                        - <b>Time</b>: O(|V| + |E|) (Worse Case Performance) <br/>
                        - <b>Space</b>: O(|V|)
                    </p>
                    </Grid>
                    <Grid item xs={6} >
                        <h1>BFS Pseudocode</h1>
                            <p>
                                Input: graph G, starting node root at g <br/>
                                Output: shortest path to end node
                                <ul>
                                    <li>1. Create a queue</li>
                                    <li>2. Create an array for nodes that have been visited</li>
                                    <li>3. add graph to the queue</li>
                                    <li>4. while the queue is not empty</li>
                                    <li>5. check if node has been visited </li>
                                    <li>6. if no: visit neighboring nodes</li>
                                    <li>7. check if node is the end node </li> 
                                    <li>8. if no: add node to array and mark as visited</li>
                                    <li>9. search next node in the queue</li>
                                    <li>10. else:</li>
                                    <li>11. return True, end node is found</li>
                                
                            </ul>
                            </p> 
                    </Grid>
                </Grid>
        </div>
        </Grid>
    </div>
    );
}
export default BFSPage;