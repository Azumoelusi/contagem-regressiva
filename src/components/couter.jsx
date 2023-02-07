import React from "react";
import './Counter.css';

const Counter = (Title,number) => {
    return (
        <div className="counter">
            <p className="couter-number">{number}</p>
            <h3 className="conter-text">{Title}</h3>
        </div>
    )
}

export default Counter;