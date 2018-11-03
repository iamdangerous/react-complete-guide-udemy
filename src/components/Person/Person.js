import React from "react";
import classes from './Person.css'

const person = (props)=>{
    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I am {props.name} and my age is {props.age} !!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value = {props.name}/>
        </div>
        )
};

export default person