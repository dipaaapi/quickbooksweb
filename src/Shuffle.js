import React from "react";
// component
import Card from "./Card";
// style
import './App.css';

const Shuffle = () => {
    return (
        <div className="app-locate">
            <Card name="John Edward" age={33} gender="male" position="Web Developer" />
            <Card name="Edward" age={33} gender="male" position="UI Designer" />
            <Card name="John" age={33} gender="male" position="Quality Assurance" />
            <Card name="Ed" age={33} gender="male" position="Graphic Artist" />
            <Card name="Janjan" age={33} gender="male" position="Computer Technician" />
        </div>
    )
}

export default Shuffle