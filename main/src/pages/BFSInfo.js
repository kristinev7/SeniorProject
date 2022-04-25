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
                    </tr>
                    <tr>
                        <td><ReactPlayer url = "https://www.youtube.com/embed/oDqjPvD54Ss"/></td>
                        <td>Queue is used to remember to search the next vertex 
                            and when a dead end occurs a new search is done again.
                            <br/>
                            <ul>
                                <br/>
                                <li>1. Go to adjacent unvisited vertex, mark it as visited and insert into the queue.</li><br/>
                                <li>2. If none are found, remove the first vertex.</li><br/>
                                <li>3. Repeat 1 and 2 until the queue is empty.</li>
                            </ul>
                         
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default BFSInfo;
