import React, { useState } from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from "./Home.js";
import Color from "./Color.js";
import NewColor from "./NewColor.js";

function Routes() {
    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        purple: "#800080",
        yellow: "#FFFF00"
    };

    const [colors, setColors] = useState(initialColors);

    function handleAdd(colorData) {
        setColors(existingColors => ({ ...existingColors, ...colorData }));
    }

    function displayColor(props) {
        const { color } = props.match.params;
        const hex = colors[color];
        return <Color {...props} hex={hex} color={color} />;
    }

    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/colors" >
                <Home colors={colors}/>
            </Route>
            <Route exact path="/colors/new" >
                <NewColor newColor={handleAdd}/>
            </Route>
            <Route path="/colors/:color" render={displayColor}/>
            <Redirect to="/colors"/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;