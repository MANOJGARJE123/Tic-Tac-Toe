import {useState} from "react";

function Square({value}) {
    const[clikced , setClikced] = useState(false);

    function handleClick() {
        setClikced(true);
    }
    
    return (
        <button className="square" onClick={handleClick}>
                    {value}
        </button>
    )
}

export default Square;