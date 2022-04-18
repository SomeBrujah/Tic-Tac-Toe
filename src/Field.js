import React, {useState} from "react";

import Cell from "./Cell";

const Field = () => {
    // Field have two variables to track their states 
    const [cells, setCells] = useState(new Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null); 
    
    const handleCellClick = (i) => {
        cells[i] = isX ? 'X' : 'O';
        setCells(cells);
        setIsX(!isX);
        console.log(cells, isX);

        
    };
    return (
        <div className="gameField">
            <div>
                <Cell value={cells[0]} onClick={() => { handleCellClick(0) }} />
                <Cell value={cells[1]} onClick={() => { handleCellClick(1) }} />
                <Cell value={cells[2]} onClick={() => { handleCellClick(2) }} />
            </div>
            <div>
                <Cell value={cells[3]} onClick={() => { handleCellClick(3) }} />
                <Cell value={cells[4]} onClick={() => { handleCellClick(4) }} />
                <Cell value={cells[5]} onClick={() => { handleCellClick(5) }} />
            </div>
            <div>
                <Cell value={cells[6]} onClick={() => { handleCellClick(6) }} />
                <Cell value={cells[7]} onClick={() => { handleCellClick(7) }} />
                <Cell value={cells[8]} onClick={() => { handleCellClick(8) }} />
            </div>
            <h1>Hello</h1>
        </div>
    )
}

export default Field;