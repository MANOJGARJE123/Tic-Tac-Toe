import { Square } from "./Square";
export function Board({squares, onPlay}) {
    return (
        <>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
         <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
         <div className="board-row">    
            <Square />
            <Square />
            <Square />
        </div>
       </>
    )
}
