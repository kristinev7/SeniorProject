import React from "react";
import { FaPlay } from "react-icons/fa";
export default function Navbar({ handleClick, visualize }) {
    return (
        <nav className="navbar">
            <p className="nav-title">Visualizer</p>
            <button
                className="btn nav-button"
                onClick={handleClick}
                disabled={visualize}
            >
                Visualize
                <FaPlay size={14} className="nav-button-icon" />
            </button>
        </nav>
    );
}
