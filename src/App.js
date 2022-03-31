// imports
import React from "react";
import { Route, Routes } from 'react-router-dom';
// component
import Home from './component/Home';
import Todolist from './component/Todolist';
// style
import './App.css';

const App = () => {
    return (
        <div className="app-main">
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/todolist' element={<Todolist/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </div>
    )
}

export default App