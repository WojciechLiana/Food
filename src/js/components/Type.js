import React from "react";

export const Type = (props) => {
    return (
        <select value={props.type} onChange={props.handleType} required={true}>
            <option value="">Type</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
        </select>
    );
};