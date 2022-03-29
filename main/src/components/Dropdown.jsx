import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Dropdown({ setAlgorithm, visualize, setIsReady }) {
    const [isOpen, setIsOpen] = useState(false);
    const [val, setVal] = useState("");
    const ref = useRef(null);

    const dropdownValues = [
        {
            title: "Dijkstra",
        },
        {
            title: "A* Pathfinding",
        },
        {
            title: "Breath First Search",
        },
    ];

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (evt) => {
        if (ref.current && !ref.current.contains(evt.target)) {
            setIsOpen(false);
        }
    };

    const handleSetValue = (val) => {
        setVal(val.title);
        setAlgorithm(val.title);
        setIsReady(true);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return (
        <div ref={ref} className="dropdown">
            <button
                className="btn dropdown-toggle"
                onClick={handleClick}
                disabled={visualize}
            >
                {val ? val : "Choose Algorithm"}
                <Chevron isOpen={isOpen} />
            </button>

            {isOpen && (
                <ul className="dropdown-options">
                    {dropdownValues.map((item, i) => {
                        return (
                            <li
                                key={i}
                                onClick={() => handleSetValue(item)}
                                style={{
                                    backgroundColor:
                                        item.title === val ? "#202020" : "",
                                }}
                            >
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

const Chevron = ({ isOpen }) => {
    return isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />;
};
