import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Admin = () => {
    const {cash, color} = useSelector((s) => s)
    const dispach = useDispatch()
    return (
        <div>
            <button  onClick={() => dispach({type: "ISKENDER", payload: 1})}>+</button>
            <h2>{cash}</h2>
            <button onClick={() => dispach ({type: "COLOR", payload: 1})}> {
               color ?  <div className="box"></div> : <h1>iskender</h1>
            }</button>
           
        </div>
    );
};

export default Admin;