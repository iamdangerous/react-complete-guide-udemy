import React from "react";
import Person from './Person.css'

const person = (props)=>{
    return (
        <div className='Person' >
            <p onClick={props.click}>I am {props.name} and my age is {props.age} !!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value = {props.name}/>
        </div>
        )
};

export default person