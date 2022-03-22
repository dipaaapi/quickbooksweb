import React from "react";

// const Card = (props) => {
const Card = ({ name, age, gender, position }) => {
    // const { name, age, gender, position } = props
    return (
        <div className="card-main">
            <h1 className="title-main">Users Card</h1>
            <div className="card-data">
                <p className="data-inner-left">Name: </p>
                <p className="data-inner-right">{name}</p>
            </div>
            <div className="card-data">
                <p className="data-inner-left">Position: </p>
                <p className="data-inner-right">{position}</p>
            </div>
            <div className="card-data">
                <p className="data-inner-left">Age: </p>
                <p className="data-inner-right">{age}</p>
            </div>
            <div className="card-data">
                <p className="data-inner-left">Gender: </p>
                <p className="data-inner-right">{gender}</p>
            </div>
        </div>
    )
}

export default Card