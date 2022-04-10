import React from "react";
import Visualizer from "./Visualizer";
import { Link, useLocation, Outlet } from "react-router-dom";

// where is this being used

export function Home() {
    return (
        <div>
            <h1>[Website Name]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="visualize">Visualizer</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <nav>
                <Link to="services ">Services</Link>
                <Link to="history ">Company History</Link>
                <Link to="location ">Location </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2> Our Services </h2>
        </div>
    );
}
export function CompanyHistory() {
    return (
        <div>
            <h2>Company History </h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2> Our Location </h2>
        </div>
    );
}

export function Visualize() {
    return (
        <div>
            <h1>{<Visualizer />}</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1> Resource not found at {location.pathname}!</h1>
        </div>
    );
}
