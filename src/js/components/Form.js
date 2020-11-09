import React, {useState} from "react";
import {Name} from "./Name";
import {PreparationTime} from "./PreparationTime";
import {Type} from "./Type";
import {Slices} from "./Slices";
import {Diameter} from "./Diameter";
import {Spiciness} from "./Spiciness";
import {Bread} from "./Bread";

function Form() {

    const [name, setName] = useState("");
    const [duration, setDuration] = useState("00:00:00");
    const [type, setType] = useState("");
    const [slices, setSlices] = useState("");
    const [diameter, setDiameter] = useState("");
    const [spiciness, setSpiciness] = useState(1);
    const [bread, setBread] = useState("");

    const onHandle = (handlingFnc, event) => {
        handlingFnc(event.target.value);
    };

    const prepareRequestBody = (type) => {
        const body = {
            name: name,
            preparation_time: duration,
            "type": type
        };

        if (type === "pizza") {
            body.no_of_slices = parseInt(slices);
            body.diameter = parseFloat(diameter);
        }

        if (type === "soup") {
            body.spiciness_scale = spiciness;
        }

        if (type === "sandwich") {
            body.slices_of_bread = parseInt(bread);
        }

        return body;

    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(prepareRequestBody(type))
    };

    const submitForm = () => {

        fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions)
            .then(response => response.json())
            .then(response => alert("Dish submitted"))
            .catch(() => alert("Submit failed. Try again later"))
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };

    return (
        <form onSubmit={onHandleSubmit}>

            <Name name={name} handleName={onHandle.bind(this, setName)}/>

            <PreparationTime duration={duration} handleDuration={onHandle.bind(this, setDuration)}/>

            <Type type={type} handleType={onHandle.bind(this, setType)}/>

            <Slices slices={slices} handleSlices={onHandle.bind(this, setSlices)} type={type}/>

            <Diameter diameter={diameter} handleDiameter={onHandle.bind(this, setDiameter)} type={type}/>

            <Spiciness spiciness={spiciness} handleSpiciness={onHandle.bind(this, setSpiciness)} type={type}/>

            <Bread bread={bread} handleBread={onHandle.bind(this, setBread)} type={type}/>

            <input type="submit" value="Submit"/>

        </form>
    );
}

export default Form;