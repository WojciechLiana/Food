import React from "react";

export const Spaciness = (props) => {
    return (
        <label>
            Spaciness
            <input name="spaciness_scale" type="range" value={props.spaciness} min="1" max="10"
                   onChange={props.handleSpaciness}/>
        </label>
    );
};