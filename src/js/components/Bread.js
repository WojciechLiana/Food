import React from "react";

export const Bread = (props) => {
    return (
        <label>
            Slices of bread
            <input name="slices_of_bread" type="number" min={1} value={props.bread} onChange={props.handleBread}
                   required={true}/>
        </label>
    );
};