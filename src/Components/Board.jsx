import Square from "./Square";
import "./Board.css";
function Board({squares, onPlay}) {
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
export default Board;
