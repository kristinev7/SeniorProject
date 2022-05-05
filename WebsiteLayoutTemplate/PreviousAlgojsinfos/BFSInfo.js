import React from "react";
import ReactPlayer from "react-player";
import "../components/AlgoLayout.css";

 function BFSInfo() {
    return (
        <div>
            <div className="info">
                <table>
                    <tr>
                        <th>Video</th>
                        <th id="da">Breadth First's Algorithm Information</th>
                        <th id = "da">BFS Pseudocode</th>
                    </tr>
                    <tr>
                        <td><ReactPlayer url = "https://www.youtube.com/embed/oDqjPvD54Ss"/></td>
                        <td>Used in network analysis, GPS, Search Engines, Scheduling 
                            and other types of graph analysis.
                                - BFS uses a Queue (First In First Out)
                                - Explores equally in all directions until the end node is found 
                            <br/>
                            <ul>
                                <br/>
                                <li>1. Go to unvisited node, mark it as visited and insert into the queue.</li><br/>
                                <li>2. Add to the queue of all available neighbors and note the parent and mark visited.</li><br/>
                                <li>3. Backtrack from goal to start using the parent to get to the shortest path.</li><br/>
                            </ul>
                        </td>
                        <td>
                            <p>
                                Input: graph G, starting node root at g
                                Output: shortest path to end node
                                1  procedure BFS(G, root) is
                                2      let Q be a queue
                                3      label root as explored
                                4      Q.enqueue(root)
                                5      while Q is not empty do
                                6          v := Q.dequeue()
                                7          if v is the goal then
                                8              return v
                                9          for all edges from v to w in G.adjacentEdges(v) do
                                10              if w is not labeled as explored then
                                11                  label w as explored
                                12                  Q.enqueue(w)
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default BFSInfo;
