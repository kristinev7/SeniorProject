import React from "react";

export default function Modal({
    time,
    shortestPathLength,
    totalVisitedNodes,
    setIsFinished,
}) {
    return (
        <>
            <div>
                <div>
                    <div>
                        {/*content*/}
                        <div>
                            {/*header*/}
                            <div>
                                <h3>Stats</h3>
                            </div>
                            {/*body*/}

                            <div>
                                <p>{time}</p>
                                <p>{totalVisitedNodes}</p>
                                <p>{shortestPathLength}</p>
                            </div>
                            {/*footer*/}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setIsFinished(false)}
                                >
                                    Cancel
                                </button>
                                <button type="button">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
