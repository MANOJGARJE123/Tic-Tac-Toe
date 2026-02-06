import Square from "./Square";
import "./Board.css";
import { useState } from "react";
import calculateWinner from "./calculateWinnder";

function Board() {
    const[xIsNext, setIsNext] = useState(true);
    const[squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i){
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(Boolean);
    const status = winner
        ? `Winner: ${winner}`
        : isDraw
            ? "Draw"
            : `Next player: ${xIsNext ? "X" : "O"}`;

    function handleReset() {
        setSquares(Array(9).fill(null));
        setIsNext(true);
    }

    return (
        <div className="game">
            <div className="status">{status}</div>
            <div className="board">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
                ))}
            </div>
            <div className="controls">
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
export default Board;
