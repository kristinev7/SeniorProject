import React from "react";
import ReactPlayer from "react-player";
import "../components/AlgoPage.css";
import Grid from '@mui/material/Grid';

function AStarPage() {
    return (
    <div className="main">
        <Grid  container xs={12} spacing={2} direction="column" >
            <Grid item xs={6}>
                 <ReactPlayer url = "https://www.youtube.com/embed/oDqjPvD54Ss"/>
            </Grid>
       
        <div id="info">
            <Grid item xs={12} container spacing={2} direction="row">
                    <Grid item xs={6}>
                    <h1>A* Algorithm Information</h1>
                    Used in map vased applications, games for its positioning system, <br/>
                    string search applications, such as NLP (Natural Language Processing).<br/>
                        - 3 parameters <br/>
                            1. g(n): The actual cost of traversal from initial state to the current state.<br/>
                            2. h(n): The estimated cost of traversal from the current state to the goal state.<br/>
                                - uses heuristic function: euclidian distance or manhattan distance
                            3. f(n): The actual cost of traversal from the initial state to the goal state. <br/>
                                - <b>f(n) = g(n) + h(n)</b> <br/>
                    <h2>Time and Space Complexity</h2>
                    <p>
                        - <b>|V|</b>: the number of nodes (vertices) <br/>
                        - <b>|E|</b>: the number of edges <br/>
                        - <b>Time</b>: O(|E|) = O(b^d) (Worse Case Performance) <br/>
                        - <b>Space</b>: O(|V|) = O(b^d)
                    </p>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>A* Pseudocode</h1>
                            <p> 
                                <ul>
                                <li>1. Create Open List to store visited nodes, but neighbor nodes are not visited. </li>
                                <li>2. Create Closed list to store visited nodes and neighboring nodes are visited.</li>
                                <li>3. put start node in Open List</li>
                                <li>4. while the Open List is not empty</li>
                                <li>5. let current node equal to the node with least F value</li>
                                <li>6. remove the current Node from the Open List</li>
                                <li>7. add the current Node to the Closed List</li> 
                                <li>8. check if the current node is the goal</li>
                                <li>9. if yes: backtrack to get the path</li>
                                <li>10. let children nodes of current node equal the adjacent nodes</li>
                                <li>11. for each children node</li>
                                <li>12. if child node is in Closed List</li>
                                <li>13. create the f, g, h values</li>
                                <li>14. if child node is already in Open List</li>
                                <li>15. if gscore of child node is higher than the Open List gscore </li>
                                <li>16. continue to beginning of for loop</li>
                                <li>17. add the child to the Open List</li>
                            </ul>
                            </p> 
                    </Grid>
                </Grid>
        </div>
        </Grid>
    </div>
    );
}
export default AStarPage;