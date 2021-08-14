import React from "react";
import { Link } from "react-router-dom";

function Home({colors}) {
    const definedColors = Object.keys(colors).map(name => (
        <li key={name}>
            <Link to={`/colors/${name}`}>{name}</Link>
        </li>
    ));
    return (
        <>
            <h3>Welcome to the color factory</h3>
            <h4><Link to="/colors/new">Add A New Color</Link></h4>
            <p>Please select a color:</p>
            <ul>
                {definedColors}
            </ul>
        </>
    )
}

export default Home;