import React from "react";
import { Link } from "react-router-dom";

function Color({hex, color, history}) {
    if (!hex) history.push("/colors");
    return (
        <>
            <div style={{backgroundColor: hex}}>
                <h1>This is {color}. Isn't it beautiful?</h1>
            </div>
            <p><Link to="/">Go Back</Link></p>
        </>
    )
}

export default Color;