import React from "react";

export const Slices = (props) => {
    return (
        props.type === "pizza" ?
            <label>
                Number of slices
                <input name="no_of_slices" type="number" min={0} value={props.slices} onChange={props.handleSlices}
                       required={true}/>
            </label>
            :
            null
    );
};