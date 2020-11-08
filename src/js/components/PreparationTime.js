import React from "react";
import TimeField from "react-simple-timefield";

export const PreparationTime = (props) => {
    return (
        <label>
            Preparation time
            <TimeField showSeconds={true} colon=":" value={props.duration} onChange={props.handleDuration}/>
        </label>
    );
};