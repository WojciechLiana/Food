import React from "react";

export const Name = (props) => {
    return (
        <label>
            Dish name
            <input name="name" type="text" placeholder={"dish name"} value={props.name} onChange={props.handleName}
                   required={true}/>
        </label>
    );
};