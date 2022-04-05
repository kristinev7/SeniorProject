import React from "react";
import "./App.css";
import Main from "./main";

function App() {
    return (
        <div className="App" >
            <Routes >
                <Route path ="/" element={<Home1 />}>                
                {/* <Route path = "/about" element={<About />}>
                    <Route path ="services" element={<Services />}/>   
                    <Route path ="history" element={<CompanyHistory />}/>  
    <Route path ="location" element={<Location />}/> */}  
                    <Route path = "/visualize" element={<Visualize />}/>
                </Route> 

                {/* <Route path = "/visualize" element={<Visualize />}/>
                <Route path ="*" element={<Whoops404 />}/>   */}

            </Routes>
            {/* <Visualizer /> */}
        </div>
    );
}

export default App;
