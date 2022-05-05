import React from "react";
import ReactPlayer from 'react-player';
import "../components/AlgoLayout.css";

function DFSInfo() {
    return (
        <div>
            <div className="info">
                <table>
                    <tr>
                        <th>Video</th>
                        <th id="da">Depth First's Algorithm Information</th>
                    </tr>
                    <tr>
                        <td><ReactPlayer url = "https://www.youtube.com/embed/7fujbpJ0LB4"/></td>
                        <td>Searches Deepest Nodes. 
                            Uses a stack to remember to get to the next vertex. 
                            Goes through every vertex and must backtrack.  
                            <br/>
                            <ul>
                                <br/>
                                <li>1. Go to adjacent unvisited vertex, mark it as visited and push it into the stack.</li><br/>
                                <li>2. If none are found, pop up a vertex.</li><br/>
                                <li>3. Repeat 1 and 2 until the stack’s empty.</li>
                            </ul>
                         
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default DFSInfo;