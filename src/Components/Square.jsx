import {useState} from "react";

function Square({value , onSquareClick}) {
 
    return (
        <button className="square" onClick={onSquareClick}>
            <div style={{color: value === 'X' ? 'red' : 'blue', alignItems: 'center', justifyContent: 'center'}}>
                {value}
            </div>
        </button>
    )
}

export default Square;