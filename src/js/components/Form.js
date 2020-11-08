import React, {Fragment, useState} from "react";
import {Name} from "./Name";
import {PreparationTime} from "./PreparationTime";
import {Type} from "./Type";
import {Slices} from "./Slices";
import {Diameter} from "./Diameter";
import {Spaciness} from "./Spaciness";
import {Bread} from "./Bread";

function Form() {

    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("");
    const [slices, setSlices] = useState("");
    const [diameter, setDiameter] = useState("");
    const [spaciness, setSpaciness] = useState(1);
    const [bread, setBread] = useState("");

    const onHandle = (handlingFnc, event) => {
        handlingFnc(event.target.value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log("wysyłam");
    };

    return (
        <form onSubmit={onHandleSubmit}>

            <Name name={name} handleName={onHandle.bind(this, setName)}/>

            <PreparationTime duration={duration} handleDuration={onHandle.bind(this, setDuration)}/>

            <Type type={type} handleType={onHandle.bind(this, setType)}/>

            <Slices slices={slices} handleSlices={onHandle.bind(this, setSlices)}  type={type}/>

            <Diameter diameter={diameter} handleDiameter={onHandle.bind(this, setDiameter)}  type={type}/>

            <Spaciness spaciness={spaciness} handleSpaciness={onHandle.bind(this, setSpaciness)}  type={type}/>

            <Bread bread={bread} handleBread={onHandle.bind(this, setBread)} type={type}/>

            <input type="submit" value="Submit" />

        </form>
    );
}

export default Form;