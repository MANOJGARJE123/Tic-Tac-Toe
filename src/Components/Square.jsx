function Square({ value, onSquareClick }) {
    const valueClass = value === "X" ? "x" : value === "O" ? "o" : "";

    return (
        <button className={`square ${valueClass}`} onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square;