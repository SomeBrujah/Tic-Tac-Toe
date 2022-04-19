import React, {useState} from "react";
import { calculateWinerComb } from "./helpers";
import Cell from "./Cell";

const Field = () => {
    console.log('Field is render.');
    // Field have two variables to track their states 
    const [cells, setCells] = useState(new Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    //  And state for result
    const [winner, setWinner] = useState(null); 
    
    const restartFunc = () => {
        setCells(new Array(9).fill(null));
        setIsX(true);
        setWinner(null);
    };
    const handleCellClick = (i) => {
        if(winner !== null) {
            return;
        }
        cells[i] = isX ? 'X' : 'O';
        setCells(cells);
        setIsX(!isX);
        setWinner(calculateWinerComb(cells));
    };

    return (
        <div className="gameField">
            <div className="row">
                <Cell value={cells[0]} onClick={() => { handleCellClick(0) }} />
                <Cell value={cells[1]} onClick={() => { handleCellClick(1) }} />
                <Cell value={cells[2]} onClick={() => { handleCellClick(2) }} />
            </div>
            <div className="row">
                <Cell value={cells[3]} onClick={() => { handleCellClick(3) }} />
                <Cell value={cells[4]} onClick={() => { handleCellClick(4) }} />
                <Cell value={cells[5]} onClick={() => { handleCellClick(5) }} />
            </div>
            <div className="row">
                <Cell value={cells[6]} onClick={() => { handleCellClick(6) }} />
                <Cell value={cells[7]} onClick={() => { handleCellClick(7) }} />
                <Cell value={cells[8]} onClick={() => { handleCellClick(8) }} />
            </div>
            <h1>{winner}</h1>
            <button onClick={restartFunc}>Restart</button>
        </div>
    )
}

export default Field;