import React from "react";

export const Diameter = (props) => {
    return (
        <label>
            Diameter [cm]
            <input name="diameter" type="number" min={0.0} step={0.1} value={props.diameter} onChange={props.handleDiameter} required={true}/>
        </label>
    );
};