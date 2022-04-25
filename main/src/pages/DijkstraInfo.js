import React from 'react';
import ReactPlayer from 'react-player';
import '../components/AlgoLayout.css';

function DijkstraInfo() {
    return (
        <div>
            <div className="info">
                <table>
                    <tr>
                        <th>Video</th>
                        <th id="da">Dijkstra's Algorithm Information</th>
                    </tr>
                    <tr>
                        <td><ReactPlayer url = "https://www.youtube.com/embed/GazC3A4OQTE"/></td>
                        <td>Find the shortest path between nodes in a graph
                            <br/>
                            <ul>
                                <br/>
                                <li>1. Create your set to prepare your output</li><br/>
                                <li>2. Assign a distance for each vertice in the graph</li><br/>
                                <li>3. While the created set doesn’t have all the vertices the lowest value for each will be scanned and added to the set</li>
                            </ul>
                         
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default DijkstraInfo;