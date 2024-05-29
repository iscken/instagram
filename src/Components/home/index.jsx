import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const {cash, color  } = useSelector((s) => s)
    const dicpatch = useDispatch()
    console.log(color);
    return (
        <div>
            <div className="container">
                <button onClick={() => dicpatch({type: "ADD_MANEY", payload: 1})}>{cash === 5 ? "Iskender" : "plus"} </button>
                <h1>{cash === 10 ? "sexy" : cash}</h1>
                <button onClick={() => cash > 0 ?dicpatch({type: "TAKE_MANEY", payload: 1}) : cash}>{cash === 0  ? "ty sexy" : "minus"}</button>
              
                <button className='openbtn' onClick={() => dicpatch({type: "COLOR"})}>{
                    color ? "close modal" : "open Modal"
                }</button>
                
               {
                   color ?  <div className="box">
                    <h1 className='h1' onClick={() => dicpatch({type: "COLOR"})}>x</h1>
                   </div> : null
                }
            {
                color ? <div className="bg" onClick={() => dicpatch({type: "COLOR"})}></div> :null
            }
            </div>
        
        </div>
    );
};

export default Home;