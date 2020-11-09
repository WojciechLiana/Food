import React from "react";

export const Spiciness = (props) => {
    return (
        props.type === "soup" ?
            <label>
                Spiciness
                <input name="spiciness_scale" type="range" value={props.spiciness} min="1" max="10"
                       onChange={props.handleSpiciness}/>
            </label>
            :
            null
    );
};