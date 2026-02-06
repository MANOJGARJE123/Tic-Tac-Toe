import {useState} from "react";

function Square({}) {
    const[value , setValue] = useState(Array(9).fill(null));

    function handleClick() {
        setValue('X');
    }
    
    return (
        <button className="square" onClick={handleClick}>
            <div style={{color: value === 'X' ? 'red' : 'blue', alignItems: 'center', justifyContent: 'center'}}>
                {value}
            </div>
        </button>
    )
}

export default Square;