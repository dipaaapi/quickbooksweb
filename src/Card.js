import React from "react";

// const Card = (props) => {
const Card = ({ name, age, gender, position }) => {
    // const { name, age, gender, position } = props
    return (
        <div className="card-main">
            <h1>Users Card</h1>
            <div>Name: {name}</div>
            <div>Name: {position}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
        </div>
    )
}

export default Card