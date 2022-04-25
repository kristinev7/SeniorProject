import React from 'react';
import ReactPlayer from 'react-player';
import "../components/AlgoLayout.css";

function AstarInfo() {
    return (
        <div>
           <div className="info">
                <table>
                    <tr>
                        <th>Video</th>
                        <th id="da">A*'s Algorithm Information</th>
                    </tr>
                    <tr>
                        <td><ReactPlayer url = "https://www.youtube.com/embed/ySN5Wnu88nE"/></td>
                        <td>The shortest path in any situation after checking all values 
                            and finding the smallest amount per vertex. 
                            <br/>
                            <ul>
                                <br/>
                                <li>1. f(n)=g(n)+h(n)</li><br/>
                                <li>2. Where g(n) is the sum of all the nodes that have been touch since the start.</li><br/>
                                <li>3. h(n) is the heuristic value that is the estimated value of the entire travel.</li>
                            </ul>
                         
                        </td>
                    </tr>
                </table>
            </div>
        </div>        
    );
}
export default AstarInfo;