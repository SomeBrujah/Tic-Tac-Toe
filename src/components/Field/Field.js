import React, {useState} from "react";
import { calculateWinerComb, generateGrid } from "../../helpers";
import Cell from "../Cell/Cell";

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
        if(winner !== null || cells[i] !== null) {
            return;
        }
        cells[i] = isX ? 'X' : 'O';
        setCells(cells);
        setIsX(!isX);
        let result = calculateWinerComb(cells); 
        if(result === null && !cells.includes(null)) {
            setWinner('Draw');
        } else if(result !== null) {
            setWinner("Winner is: " + result);
        }
    };
    
    return (generateGrid(cells, handleCellClick, restartFunc, winner))
}

export default Field;