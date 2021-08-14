import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({ newColor }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        colorName: "",
        color: ""
    });
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = evt => {
        evt.preventDefault();
        newColor({ [formData.colorName]: formData.color });
        history.push("/colors");
    };

    return (
        <div>
        <form onSubmit={gatherInput}>
            <div>
                <label htmlFor="colorName">Color Name:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="colorName"
                    value={formData.colorName}
                    id="colorName"
                />
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <input
                    onChange={handleChange}
                    type="color"
                    name="color"
                    id="color"
                    value={formData.color}
                />
            </div>
            <button id="newBoxButton">Add a new color!</button>
        </form>
        </div>
    );
}

export default NewColorForm;