import React from "react";
import ReactPlayer from "react-player";
import "../components/AlgoPage.css";
import Grid from '@mui/material/Grid';

function DijkstraPage() {
    return (
    <div className="main">
        <Grid  container xs={12} spacing={2} direction="column" >
            <Grid item xs={6}>
                 <ReactPlayer url = "https://www.youtube.com/embed/oDqjPvD54Ss"/>
            </Grid>
       
        <div id="info">
            <Grid item xs={12} container spacing={2} direction="row">
                    <Grid item xs={6}>
                    <h1>Dijkstra's Algorithm Information</h1>
                    Finds the fastest path between nodes with weighted edges. <br/>
                    Used in navigational maps<br/>
                        -  Uses Priority Queue or Heap<br/>
                            - Orders based on the weight each element has
                        -  Weighted Graph represented by an adjacency list
                            - each node in the list points to an array of neighboring nodes
                            - the weight of each edge
                    <h2>Time and Space Complexity</h2>
                    <p>
                        - <b>|V|</b>: the number of nodes (vertices) <br/>
                        - <b>|E|</b>: the number of edges <br/>
                        - <b>Time</b>: O(E + V log V) (Worse Case Performance) <br/>
                        - <b>Space</b>: O(|V|)
                    </p>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Dijkstra's Pseudocode</h1>
                            <p>
                                
                                <ul>
                                <li>1. Create a priority queue to store nodes</li>
                                <li>2. put the starting node in the queue</li>
                                <li>3. while the queue is not empty</li>
                                <li>4. get the node with the smallest weight</li>
                                <li>5. check if node has been visited</li>
                                <li>6. if not visited: add node to visited nodes</li>
                                <li>7. check all the nodes connected to the current node</li> 
                                <li>8. check the weight of the edge</li>
                                <li>9. if the weight is less than the current distance</li>
                                <li>10. update the distance</li>
                                <li>11. add the node tot he queue</li>
                                <li>12. return the distance</li>
                            </ul>
                            </p> 
                    </Grid>
                </Grid>
        </div>
        </Grid>
    </div>
    );
}
export default DijkstraPage;